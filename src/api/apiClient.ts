import { AuthError } from '#/app/Errors'
import { useAuthStore } from '#/store/authStore'
import axios, { CreateAxiosDefaults } from 'axios'
import * as Sentry from '@sentry/react'
import { refreshAuthToken } from '#/api/refresh'
import { AxiosRequestConfig } from 'axios'

export const API_BASE_URL = import.meta.env.VITE_BASE_URL

const baseConfig: CreateAxiosDefaults = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const apiClient = axios.create(baseConfig)

// access-token이 필요한 요청들
export const authApiClient = axios.create(baseConfig)

authApiClient.interceptors.request.use(
  // store에 토큰이 있는 경우 요청에 토큰을 실어서 요청
  (config) => {
    const { accessToken } = useAuthStore.getState()
    if (!accessToken) {
      return Promise.reject(new AuthError('token이 존재하지 않습니다.'))
    }

    config.headers['Authorization'] = `Bearer ${accessToken}`

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

authApiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean }

    if (originalRequest.url?.includes('/auth/refresh')) {
      return Promise.reject(error)
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        await refreshAuthToken()

        const { accessToken } = useAuthStore.getState()
        if (!originalRequest.headers) {
          originalRequest.headers = {}
        }
        originalRequest.headers.Authorization = `Bearer ${accessToken}`

        return authApiClient(originalRequest)
      } catch (refreshError) {
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

// 에러 발생 시 Sentry로 전송
apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    Sentry.captureException(error)
    return Promise.reject(error)
  }
)

authApiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    Sentry.captureException(error)
    return Promise.reject(error)
  }
)

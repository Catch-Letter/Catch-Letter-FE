import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useAuthStore } from '#/store/authStore'
import { useToastStore } from '#/store/toastStore'
import { AxiosError } from 'axios'
import { apiClient } from '#/api/apiClient'

export const useValidateUuid = () => {
  const { uuid } = useParams()
  const navigate = useNavigate()
  const { deleteAccessToken } = useAuthStore()
  const { showToast } = useToastStore()

  useEffect(() => {
    const validate = async () => {
      try {
        await apiClient.get(`/users/${uuid}/status`)
      } catch (error) {
        if ((error as AxiosError).response?.status === 403) {
          showToast('유효하지 않은 접근입니다.', 'error')
          deleteAccessToken()
          navigate('/')
        }
      }
    }

    validate()
  }, [uuid, deleteAccessToken, navigate, showToast])
}

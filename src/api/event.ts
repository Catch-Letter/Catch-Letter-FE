import { apiClient } from '#/api/apiClient'
import { API_ENDPOINTS } from '#/api/apiEndpoints'
import dayjs from 'dayjs'

//이벤트 조회
export const fetchEventList = async () => {
  const date = dayjs(new Date()).format('YYYY-MM-DD')

  try {
    const res = await apiClient.get(`${API_ENDPOINTS.GET_EVENT}/?date=${date}`)
    return res.data
  } catch (error) {
    throw error
  }
}

//이벤트 참여
export const fetchParticipantEvent = async (eventId: string, phoneNumber: string) => {
  try {
    const res = await apiClient.post(API_ENDPOINTS.EVENT(eventId), {
      phone_number: phoneNumber,
    })
    return res.data
  } catch (error) {
    throw error
  }
}

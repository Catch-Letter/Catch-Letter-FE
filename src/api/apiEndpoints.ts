export const API_ENDPOINTS = {
  INFO_UUID: (uuid: string) => `users/${uuid}/status`,
  CREATE: '/auth/register',
  AUTH: '/auth/login',
  DRAW: (uuId: string) => `/users/${uuId}/images`,
  SEND_LETTER: (uuId: string, letterId: number) => `/users/${uuId}/images/${letterId}/letters`,
  MY_LETTERS: (uuId: string) => `/users/${uuId}/images`,
  TRY_ANSWER: (uuId: string, letterId: number) => `/users/${uuId}/images/${letterId}`,
  GET_LETTER: (uuId: string, letterId: number) => `/users/${uuId}/images/${letterId}/letters`,
  GET_DRAW: (uuId: string, letterId: number) => `/users/${uuId}/images/${letterId}`,
  GET_ANSWER_STATUS: (uuId: string, letterId: number) => `/users/${uuId}/images/${letterId}/status`,
  GET_ANSWER: (uuId: string, letterId: number) => `/users/${uuId}/images/${letterId}/answer`,
}

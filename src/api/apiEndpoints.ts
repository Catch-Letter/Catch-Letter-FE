export const API_ENDPOINTS = {
  CREATE: '/auth/register',
  SEND_LETTER: (uuId: string, letterId: number) => `/users/${uuId}/images/${letterId}/letters`,
}

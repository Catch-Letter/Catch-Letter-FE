export const API_ENDPOINTS = {
  CREATE: '/auth/register',
  DRAW: (uuId: string) => `/users/${uuId}/images`,
  SEND_LETTER: (uuId: string, letterId: number) => `/users/${uuId}/images/${letterId}/letters`,
}

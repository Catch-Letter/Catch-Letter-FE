export const API_ENDPOINTS = {
  CREATE: '/auth/register',
  TRY_ANSWER: (uuId: string, letterId: number) => `/users/${uuId}/images/${letterId}`,
}

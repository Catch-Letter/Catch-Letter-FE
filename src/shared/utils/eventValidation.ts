export const isValidPhoneNumber = (phoneNumber: string) => {
  const regex = /^010\d{8}$/
  return regex.test(phoneNumber)
}

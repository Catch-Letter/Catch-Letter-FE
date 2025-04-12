class AuthError extends Error {
  name: string
  code: number

  constructor(message: string) {
    super(message)
    this.name = 'AuthError'
    this.code = 1010
  }
}

export default AuthError

const baseAddress = 'http://localhost:4000'
const api = {
    validateToken : `${baseAddress}/validateToken`,
    details : `${baseAddress}/details`,
    accommodation : `${baseAddress}/accommodation`,
    signup : `${baseAddress}/auth/signup`,
    login : `${baseAddress}/auth/login`,
    wishlist : `${baseAddress}/wishlist`
}

export default api
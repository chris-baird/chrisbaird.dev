import isAuthenticated from '../middleware/isAuthenticated.js';
describe('Auth Middleware Tests', () => {
    it('calls next function if there is a user', () => {
        // Test user
        let user = {
            email: '',
            password: ''
        }
        // Jest mock for next middleware function
        let next = jest.fn()
        // Calling middleware with user and mock response and next callback
        isAuthenticated({ user }, { json: jest.fn() }, next)
        // Next function is called if a user is present
        expect(next).toHaveBeenCalled();
    })
})
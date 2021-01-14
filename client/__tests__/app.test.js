// import shallow from 'enzyme'
// import app from '../src/App'
const app = require('../src/App') 
describe('App component', () => {
    it('Renders without crashing.', () => {
        renderer(app)
    })
})
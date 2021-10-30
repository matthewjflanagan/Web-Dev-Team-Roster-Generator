const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should return the office number', () => {
        let newManager = new Manager ('Michael Scott', 3, 'msizzle@hotmail.com','8675309')
        expect(newManager.officeNumber).toBe('8675309'); 
    } )
})
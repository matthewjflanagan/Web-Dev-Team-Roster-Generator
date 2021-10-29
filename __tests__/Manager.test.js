const Manager = require('../lib/manager');

describe('manager', () => {
    it('should return the office number', () => {
        let newManager = new Manager ('Michael Scott', 3, '8675309')
        expect(newManager.officeNumber).toBe('8675309'); 
    } )
})
const Employee = require('../lib/employee');

describe('employee', () => {
    it('should return the employee name', () => {
        let newEmployee = new Employee ('X Æ A-12', 1, 'X Æ A-12@hotmail.com')
        expect(newEmployee.name).toBe('X Æ A-12'); 
    } )
})
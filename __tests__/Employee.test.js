const Employee = require('../lib/employee');

describe('employee', () => {
    it('should return the employee name', () => {
        let newEmployee = new Employee ('u', 1, 'asd')
        expect(newEmployee.name).toBe('u'); 
    } )
})
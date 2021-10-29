const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe('engineer', () => {
    it('should return the engineer github link', () => {
        let newEngineer = new Engineer ('Larry', 2, 'larry@hotmail.com', 'https://github.com/larry')
        expect(newEngineer.github).toBe('https://github.com/larry'); 
    } )
})
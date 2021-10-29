const Engineer = require('../lib/engineer');

describe('intern', () => {
    it('should return the intern school', () => {
        let newIntern = new Intern ('FNI', 4, 'fni@hotmail.com', 'school of sunshine')
        expect(newIntern.school).toBe('school of sunshine'); 
    } )
})
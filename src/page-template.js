const inquirer = require('inquirer');

inquirer.prompt([{
    type: 'input',
    message: 'hey how are you',
    name: 'doing'
}])
.then(({doing}) => {
    if (makeTeam === 'done') {
        writeHTML();
    } else {
        askForAnotherEmployee();
    }
})

function good() {
    console.log('great to hear')
}
function bad() {
    inquirer
        .prompt([{
            type: 'input',
            message: 'oh whats wrong sorry to hear that',
            name: 'whatToDo'
        }])
}
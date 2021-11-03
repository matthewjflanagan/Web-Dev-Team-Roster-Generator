function generateTeam (member) {
    let cards = []

    member.forEach(member => {    
    const name = member.getName();
    const id = member.getId();
    const email = member.getEmail();

        switch (member.getRole()) {
            case 'Manager':
                cards.push(
                    `<div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${ name }</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${ member.getRole() }</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${ id }</li>
                            <li class="list-group-item">Email: <a href="mailto:${ email }">${ email }</a></li>
                            <li class="list-group-item">Office number: ${ member.getOfficeNumber() }</li>
                        </ul>
                    </div>
                </div>`
                )
                break;
            case 'Engineer':
                cards.push(
                    `<div class="card employee-card">
                        <div class="card-header">
                        <h2 class="card-title">${ name }</h2>
                        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${ member.getRole() }</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${ id }</li>
                            <li class="list-group-item">Email: <a href="mailto:${ email }">${ email }</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/ ${ member.getGithub() }" target="_blank" rel="">${ member.getGithub() }</a></li>
                        </ul>
                    </div>
                </div>`
                )
                break;
            case 'Intern':
                cards.push(
                    `<div class="card employee-card">
                        <div class="card-header">
                            <h2 class="card-title">${ name }</h2>
                            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${ member.getRole() }</h3>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item">ID: ${ id }</li>
                                <li class="list-group-item">Email: <a href="mailto:${ email }">${ email }</a></li>
                                <li class="list-group-item">School: ${ member.getSchool() }</li>
                            </ul>
                        </div>
                    </div>`
                )
                break;
        }
    });
    return cards.join('')
}

function generateMarkdown (member) {
    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profiles</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                </div>
                ${generateTeam(member)}
            </div>
        </div>
    </body>
    </html>`

    }

module.exports = generateMarkdown
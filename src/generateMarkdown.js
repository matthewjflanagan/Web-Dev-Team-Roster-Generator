function startHTML() {
    const html = 
    ` <!DOCTYPE html>
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
                <div class="team-area col-12 d-flex justify-content-center">`
    fs.writeFile("./dist/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

function generateManagerHTML(member) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    const officeNumber = member.getOfficeNumber();
    const managerHtml = 
    `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ name }</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${ role }</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ email }">${ email }</a></li>
            <li class="list-group-item">Office number: ${ officeNumber }</li>
        </ul>
    </div>
</div>`
fs.appendFile("./dist/team.html", managerHtml, function (err) {
 if (err) {
     console.log(err);
 }
 else {
     console.log("success")
 };
})}

function generateEngineerHTML(member) {
    const name = member.getName();
       const role = member.getRole();
       const id = member.getId();
       const email = member.getEmail();
       const github = member.getGithub();
       const engineerHtml =
       `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ name }</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${ role }</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ email }">${ email }</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/ ${ github }" target="_blank" rel="">${ github }</a></li>
        </ul>
    </div>
</div>`
       fs.appendFile("./dist/team.html", engineerHtml, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("success")
        };
       })
}

function generateInternHTML(member){
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    const school = member.getSchool();

  const internHtml = 
  `<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${ name }</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${ role }</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${ id }</li>
            <li class="list-group-item">Email: <a href="mailto:${ email }">${ email }</a></li>
            <li class="list-group-item">School: ${ school }</li>
        </ul>
    </div>
</div>`
  fs.appendFile("./dist/team.html", internHtml, function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("success")
    };
   })

}

function finishHTML(){
    const html1 = 
            ` </div>
            </div>
            </div>
        </body>
        </html>`;

    fs.appendFile("./dist/team.html", html1, function (err) {
        if (err) {
            console.log(err);
        };
    });
  
}

Init()
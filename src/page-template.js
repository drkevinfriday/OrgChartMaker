// create the Type of employee 
const generateManager = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-Title">Manager</h5>
      <h5 class="card-Name">Name: ${aboutText.name}</h5>
      <h6 class="card-role mb-2 text-muted">Role: ${aboutText.role}</h6>
      <h6 class="card-id mb-2 text-muted">Id: ${aboutText.id}</h6>
      <p class="card-officeNumber">Office Number: ${aboutText.officeNumber}</p>
      <a href="${aboutText.email}" class="card-email">Email:${aboutText.email}</a>
    </div>
  </div>
    `;
  };
const generateIntern = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-Title">Intern</h5>
      <h5 class="card-Name">Name: ${aboutText.name}</h5>
      <h6 class="card-role mb-2 text-muted">Role: ${aboutText.role}</h6>
      <h6 class="card-id mb-2 text-muted">Id: ${aboutText.id}</h6>
      <p class="card-officeNumber">School: ${aboutText.school}</p>
      <a href="${aboutText.email}" class="card-email">Email: ${aboutText.email}</a>

    </div>
  </div>
    `;
  };
const generateEngineer = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-Title">Engineer</h5>
      <h5 class="card-Name">Name: ${aboutText.name}</h5>
      <h6 class="card-role mb-2 text-muted">Role: ${aboutText.role}</h6>
      <h6 class="card-id mb-2 text-muted">Id: ${aboutText.id}</h6>
      <a href="${aboutText.email}" class="card-email">Email:${aboutText.email}</a>
      <a href="github/${aboutText.github}" class="card-link">Github: ${aboutText.github}</a>
    </div>
  </div>
    `;
  };
  

  
  
  module.exports = (templateData) => {
    console.log(templateData);
   
  
  
    let employeeInfo = ''
   for(let employee of templateData){
     if(employee.getRole()=== 'Manager'){
       
       employeeInfo += generateManager(employee)
     }
     if(employee.getRole()=== 'Engineer'){
      employeeInfo += generateEngineer(employee)
     }else if(employee.getRole()=== 'Intern') {
      employeeInfo += generateIntern(employee)
     }
     
   }
   console.log(employeeInfo)

  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">Org Chart</h1>
        </div>
      </header>
      <main class="container my-5">
      ${employeeInfo}
  
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Kevin J Friday</h3>
      </footer>
    </body>
    </html>
    `;
  };
  
  
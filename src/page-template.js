// create the Type of employee 
const generateManager = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-Title">Manager</h5>
      <h5 class="card-Name">${Name}</h5>
      <h6 class="card-role mb-2 text-muted">${role}</h6>
      <h6 class="card-id mb-2 text-muted">${id}</h6>
      <p class="card-officeNumber">${officeNumber}</p>
      <a href="${email}" class="card-email">Email:${email}</a>
      <a href="#" class="card-link">Another link</a>
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
      <h5 class="card-Name">${Name}</h5>
      <h6 class="card-role mb-2 text-muted">${role}</h6>
      <h6 class="card-id mb-2 text-muted">${id}</h6>
      <p class="card-officeNumber">${school}</p>
      <a href="${email}" class="card-email">Email:${email}</a>
      <a href="#" class="card-link">Another link</a>
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
      <h5 class="card-Name">${Name}</h5>
      <h6 class="card-role mb-2 text-muted">${role}</h6>
      <h6 class="card-id mb-2 text-muted">${id}</h6>
      <p class="card-officeNumber">${github}</p>
      <a href="${email}" class="card-email">Email:${email}</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
    `;
  };
  

  
  
  module.exports = (templateData) => {
    console.log(templateData);
    // this will create three variables based on data in templateData
  // deconstructing a object 
    const {projects, about, ...header}= templateData
  
    console.log(projects)
    console.log(about)
    console.log(header)
  
    return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
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
            ${generateAbout(about)}
            ${generateProjects(projects)}
  
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    </html>
    `;
  };
  
  
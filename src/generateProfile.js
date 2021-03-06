const generateManager = manager =>  {
  return `
  <div class="card col-3 bg-light shadow p-3 m-3">
      <div class="card-body">
          <div class="card-title bg-primary text-white">
              <h3>${manager.name}</h3>
              <h4>Manager</h4>
          </div>
          <div class="card">
              <p class="id">ID: ${manager.id}</p>
              <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p class="office">Office Number: ${manager.officeNumber}</p>
          </div>
      </div>
  </div>
  `;
};

const generateEngineer = engineer => {
  return `
  <div class="card col-3 bg-light shadow p-3 m-3">
      <div class="card-body">
          <div class="card-title bg-primary text-white">
              <h3>${engineer.name}</h3>
              <h4>Engineer</h4>
          </div>
          <div class="card">
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
      </div>
  </div>
  `
}

const generateIntern = intern => {
  return `
  <div class="card col-3 bg-light shadow p-3 m-3">
      <div class="card-body">
          <div class="card-title bg-primary text-white">
              <h3>${intern.name}</h3>
              <h4>Intern</h4>
          </div>
          <div class="card">
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>
          </div>
  </div>
</div>
  `
};

const generateProfile = data => {

  pageData = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 


      if (role === 'Manager') {
          const managerCard = generateManager(employee);

          pageData.push(managerCard);
      }

      if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);

          pageData.push(engineerCard);
      }

      if (role === 'Intern') {
          const internCard = generateIntern(employee);

          pageData.push(internCard);
      }
      
  }

  const employeeCards = pageData.join('')

  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;

}

const generateTeamPage = employeeCards => {   
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <header>
        <nav class="navbar bg-danger">
            <span class="navbar-brand w-100 h-100 text-center text-white">My Team</span>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row justify-content-center">
                <!--Team Cards-->
                ${employeeCards}
            </div>
        </div>
    </main>
    
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</html>
`;
}

module.exports = generateProfile; 
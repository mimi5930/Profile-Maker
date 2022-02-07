// test array
var teamArr = [
    {
        name: 'Bill',
        id: '1',
        email: 'bill@example.com',
        role: 'manager',
        officeNumber: '3'
    },
    {
        name: 'Jen',
        id: '2',
        email: 'jen@example.com',
        role: 'engineer',
        github: 'jen-codes'
    },
    {
        name: 'Jack',
        id: '3',
        email: 'jack@example.com',
        role: 'engineer',
        github: 'jack-codes'
    },
    {
        name: 'Lexi',
        id: '4',
        email: 'lexi@example.com',
        role: 'intern',
        school: 'school example'
    }
]

const teamOrganizer = teamArr => {
    let manager;
    let engineerArr = [];
    let internArr = [];

    for (i = 0; i < teamArr.length; i++) {
        let role = teamArr[i].role;
        if (role === 'manager') {
            manager = managerSection(teamArr[i]);
        }
        if (role === 'engineer') {
            let engineer = engineerSection(teamArr[i]);
            engineerArr.push(engineer);
        }
        if (role === 'intern') {
            let intern = internSection(teamArr[i]);
            internArr.push(intern);
        }
    }

    pageGenerator(manager, engineerArr, internArr);
}

const pageGenerator = (manager, engineerArr, internArr) => {

let engineerString = engineerArr.toString().replace(',', '\n');
let internString = internArr.toString().replace(',', '\n');

const page = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped&display=swap" rel="stylesheet">
</head>
<body>
    <header class="p-4 navbar bg-dark d-flex flex row">
        <h1 class="title-header justify-content-center">Team Profile Generator</h1>
    </header>

    ${manager}

    <section class="team-members container d-flex justify-content-around">
    ${engineerString}
    ${internString}
    </section>
</body>
`
return page;
}


const managerSection = obj => {
let {name, id, email, officeNumber} = obj;
let managerhtml = `
<section class="container manager-container">
    <div class="card mt-2">
        <div class="card-body">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-subtitle">Manager</h3>
            <ul class="list-group">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item"><a href="mailto: ${email}">Email</a></li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
        </div>
    </div>
</section>
`
return managerhtml;
}

const engineerSection = obj => {
    let { name, id, email, github } = obj;
    let engineerhtml = `
    <div class="card mt-2">
        <div class="card-body">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-subtitle">Engineer</h3>
            <ul class="list-group">
                <li class="list-group-item">Id: ${id}</li>
                <li class="list-group-item"><a href="mailto: ${email}">Email</a></li>
                <li class="list-group-item"><a href="https://github.com/${github}">Github</a></li>
            </ul>
        </div>
    </div>
    `
    return engineerhtml;
}

const internSection = obj => {
    let { name, id, email, school } = obj;
    let internhtml = `
    <div class="card mt-2">
        <div class="card-body">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-subtitle">Engineer</h3>
            <ul class="list-group">
                <li class="list-group-item">Id: ${id}</li>
                <li class="list-group-item"><a href="mailto: ${email}">Email</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>
    </div>
    `
    return internhtml;
}

// TODO: when email address is clicked, default email program opens and populates the TO field of the email with the address
// TODO: clicking on GitHub Username opens profile in new tab
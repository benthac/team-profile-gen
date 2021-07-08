function generateHTML(html) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <style>
            h1 {text-align: center;}
        </style>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Employees</title>
    </head>
    <body>
        <h1 class="display-1, p-3 mb-2 bg-success text-white">My Team</h1>
        ${generateCard(html)}
        <script src="./script.js"></script>
        </body>
        </html>
        `;
}

function checkData(data) {
    return `${generateCard(data)}`;
    console.log (data);
} 

function generateCard(card) {
    var cards = ''
    var element = ''
       for(let i = 0; i < card.length; i++) {
        if ( card[i].getJob().toLowerCase() === 'manager')
              element = `<p class="card-text">office number ${card[i].getOfficeNumber()}</p>`   
        if ( card[i].getJob().toLowerCase() === 'engineer')
              element = `<a href="https://github.com/${card[i].getGitHub()}" target="_blank">https://github.com/${card[i].getGitHub()}</a>`
        if ( card[i].getJob().toLowerCase() === 'intern')
              element = `<p class="card-text">Student at ${card[i].getSchool()}</p>`   
              
            
    cards += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${card[i].getJob()}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${card[i].getName()}</h6>
              <p class="card-text">employee number ${card[i].getId()}</p>
              <a href="mailto:${card[i].getEmail()}">${card[i].getEmail()}</a>
              ${element}
            </div>
          </div>`   
}
    return cards;
};
module.exports = {generateHTML};
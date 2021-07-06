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
        <h1 class="display-1, p-3 mb-2 bg-success text-white">My Team</h1>`;
}

function generateCard(card) {
    return  `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${job}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${name}</h6>
              <p class="card-text"></p>
              <a href="#" class="card-link">${email}</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
        
    
        <script src="./script.js"></script>
    </body>
    </html>`;
}

module.exports = {generateHTML};
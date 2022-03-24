// returns a string
//const generatePage = () => 'Name: Jane, Github: janehub';
// template literals embed JavaScript expressions into the string. Template literals are enclosed by backticks (`) instead of double or single quotes
// ${} adds in variables into strings without cutting up a string and manually
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// code above is equivalent to:
// const generatePage = (userName, githubName) => 'Name: ' + userName + ', Github: ' + githubName;
// you can also make multi-line text with one function:
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

module.exports = generatePage;
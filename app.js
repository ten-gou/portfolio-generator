const { Warning } = require("postcss");

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
// require basically links one file to another for js
const fs = require('fs');
const generatePage = require('./src/page-template.js');


fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });
  
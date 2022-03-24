var commandLineArgs = process.argv;
console.log(commandLineArgs);
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);;

const animalArray = ['dog', 'cat', 'pig'];

animalArray.push('cow');

const personObj = {
  name: 'Lernantino',
  age: 99
};

personObj.age = 100;
personObj.occupation = 'Developer';

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
      console.log(profileDataArr[i]);
    }
  
    console.log('================');
  
    // Is the same as this... but requires an array to work
    profileDataArr.forEach((profileItem) => {
      console.log(profileItem)
    });
  };
  
  printProfileData(profileDataArgs);
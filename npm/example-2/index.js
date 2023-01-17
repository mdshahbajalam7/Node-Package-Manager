import inquirer from 'inquirer';


console.log("*******************************");
console.log("Welcome to my App");
console.log("*******************************");


inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      Message: "Enter Your usrtname",
      name: "username",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log("answers are", answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

// var QRCode = require('qrcode')

// QRCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
//   console.log(url)
// })
const { Command } = require("commander");
const program = new Command();
// program
//   .option("-d, --debug", "output extra debugging")
//   .option("-s, --small", "small pizza size")
//   .option("-p, --pizza-type <type>", "flavour of pizza");

// program.parse(process.argv);

// const options = program.opts();
// if (options.debug) console.log(options);
// console.log("pizza details:");
// if (options.small) console.log("- small pizza size");
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);

program.arguments("<Username>","user Login details")
.arguments("[Password]","Password for user if needed","default")
.action((Username,Password)=>{
  console.log(Username);
  console.log(Password);
})

program.parse(process.argv)
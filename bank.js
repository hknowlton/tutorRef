let bankBalance = 100;
var actionType = process.argv[2];
var amount = parseInt(process.argv[3]);

switch(actionType) {
    case 'add':
        bankBalance = bankBalance + amount;
        console.log(bankBalance);
        break;
    case 'minus':
        bankBalance = bankBalance - amount;
        console.log(bankBalance);
        break;
    default:
        return 'please specify a transaction'
}



//==========================================================================




// // Load the fs package to read and write- no need to npm install (default package)
// var fs = require("fs");

// var actionType = process.argv[2];
// var amount = process.argv[3];

// // We will then create a switch-case statement (if-else would also work).
// // The switch-case will direct which function gets run.
// switch (actionType) {
// case "total":
//   total();
//   break;

// case "deposit":
//   deposit();
//   break;

// case "withdraw":
//   withdraw();
//   break;

// case "lotto":
//   lotto();
//   break;
// }

// function total() {
//   fs.readFile("bank.txt", "utf8", function(err, data) {
//     if (err) {
//         return console.log(err);
//       }
//     data = data.split(", ");
//     var result = 0;

//     // Loop through those numbers and add them together to get a sum.
//     for (var i = 0; i < data.length; i++) {
//       if (parseFloat(data[i])) {
//         result += parseFloat(data[i]);
//       }
//     }
//     // We will then print the final balance rounded to two decimal places.
//     console.log("You have a total of " + result.toFixed(2));
//   });
// }

// function deposit() {
//   fs.appendFile("bank.txt", ", " + amount, function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

//   // We will then print the amount that was added (but we wont print the total).
//   console.log("Deposited " + amount + ".");
// }

// // If the "Withdraw" function is called
// function withdraw() {

//   // We will add a negative amount to the bank file.
//   fs.appendFile("bank.txt", ", -" + amount, function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

//   // We will then print the amount that was subtracted (but we wont print the total).
//   console.log("Withdrew " + amount + ".");
// }


// // If the "Lotto" function is called
// function lotto() {

//   // We will subtract 25 cents
//   fs.appendFile("bank.txt", ", -.25", function(err) {
//     if (err) {
//       return console.log(err);
//     }
//   });

//   // Then grab a random number
//   var chance = Math.floor((Math.random() * 10) + 1);

//   // If the random number equals 1...
//   if (chance === 1) {

//     // We will then add $2 to the account.
//     fs.appendFile("bank.txt", ", 2", function(err) {
//       if (err) {
//         return console.log(err);
//       }
//     });

//     // And tell the user the amount was added.
//     console.log("Congrats you won the lottery!");

//   // Otherwise we will tell them they lost 25 cents.
//   }
//   else {
//     console.log("Sorry. You just lost 25 cents. Maybe you should get a job instead.");
//   }
// }

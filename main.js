#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 7428;
console.log("'Welcome to ATM Machine'");
console.log("Hint: Pin code is: 7428");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["widhdraw", "check balance"],
        },
    ]);
    console.log(operationAns.operation);
    if (operationAns.operation === "widhdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "your amount is: ",
                type: "number",
            },
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is : " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect pin code");
}

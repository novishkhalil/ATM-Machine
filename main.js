#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1212;
let myAccount = "current";
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code");
    console.log(`Current account balance is: ${myBalance}`);
    let accountType = await inquirer.prompt([
        {
            name: "account",
            message: "Select your account type",
            type: "list",
            choices: ["Current", "Saving"]
        }
    ]);
    if (accountType.account === myAccount) {
        console.log("successufully login");
    }
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "fast cash", "balance inquiry"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount to withdraw",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        // = -= +=
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "fast cash") {
        let fastMethod = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select the amount which you withdrawal",
                type: "list",
                choices: [1000, 2000, 5000, 10000]
            }
        ]);
        myBalance -= fastMethod.fastcash;
        console.log(`You have successfully withdrawal ${fastMethod.fastcash}\nyour remaining balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "balance inquiry") {
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}

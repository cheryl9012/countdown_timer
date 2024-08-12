#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const response = await inquirer.prompt([
    {
        name: "Input",
        type: "number",
        message: "please enter the amount of second",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter valid number";
            }
            else if (input > 60) {
                return "second must be in 60";
            }
            else {
                return true;
            }
        }
    }
]);
let input = response.Input;
function startTime(val) {
    const inTime = new Date().setSeconds(new Date().getSeconds() + val);
    setInterval((() => { }), 1000);
    const intervalTime = new Date(inTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("TImer has expired");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
startTime(input);

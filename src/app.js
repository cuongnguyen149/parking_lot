import { getArrayCommands, getCommandDetails } from "./service/processInput";

var myArgs = process.argv.slice(2);
console.log("myArgs: ", myArgs);
const arrayCommands = getArrayCommands(myArgs[0]);
for (let command of arrayCommands) {
	console.log(getCommandDetails(command));
}

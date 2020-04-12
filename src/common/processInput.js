import { readFileSync } from "fs";

export function getArrayCommands(filePath) {
	return readFileSync(filePath, { encoding: "utf-8" }).split(/\n+/);
}

export function getCommandDetails(commandLine) {
	return commandLine.trim().split(/\s+/);
}

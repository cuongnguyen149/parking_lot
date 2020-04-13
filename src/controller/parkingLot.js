import { getArrayCommands } from "../common/processInput";
import { isValidInput } from "../common/utils";
import { processParkingLot } from "../service/parkingService";
const fileInput = process.argv[2]; //File input is at position 3 of command
// console.log("fileInput: ", fileInput);
const arrayCommands = getArrayCommands(fileInput);

export function parkingLot() {
	if (!isValidInput(arrayCommands)) {
		return;
	}
	processParkingLot(arrayCommands);
}

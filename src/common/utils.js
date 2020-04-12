import { COMMAND_NAME, BASE_FEE, MESSAGE, REPLACE_PARAM } from "./constants";
import { getCommandDetails } from "./processInput";

export function isValidCommand(command) {
	return COMMAND_NAME[command.toUpperCase()];
}

export function isValidInput(arrayCommands) {
	for (let [index, command] of arrayCommands.entries()) {
		//Why [0]? Because position 0 is command and the others are information of command.
		if (!isValidCommand(getCommandDetails(command)[0])) {
			console.log(`invalid command at line ${index + 1}`);
			return false;
		}
	}
	return true;
}

export function isValidNumber(number) {
	return (
		Number.isInteger(Number.parseInt(number)) && Number.parseInt(number) > 0
	);
}

export function findNearestEntrySlot(parkingLot, start, end) {
	if (start > end) {
		return end + 1;
	}
	if (parkingLot[start].parkingSlotNumber - 1 != start) {
		return start;
	}

	const middle = Number.parseInt((start + end) / 2);
	if (
		parkingLot[middle] &&
		parkingLot[middle].parkingSlotNumber - 1 === middle
	) {
		return findNearestEntrySlot(parkingLot, middle + 1, end);
	}

	return findNearestEntrySlot(parkingLot, start, middle);
}

export function findIndexByVehicleInformation(parkingLot, vehicleInformation) {
	return parkingLot.findIndex(
		(slot) => slot.vehicleInformation === vehicleInformation
	);
}

export function calculateFee(hour) {
	return hour > 2 ? BASE_FEE * (hour - 2) + BASE_FEE : BASE_FEE;
}

export function getFullMessage() {
	return process.stdout.write(`${MESSAGE.FULL} \n`);
}

export function getParkingMessage(slotNumber) {
	return process.stdout.write(`${MESSAGE.PARK} ${slotNumber} \n`);
}

export function getLeavingMessage(vehicleInformation, slotNumber, fee) {
	const leavingMessage = MESSAGE.LEAVE.replace(
		REPLACE_PARAM.SLOT_NUMBER,
		slotNumber
	)
		.replace(REPLACE_PARAM.VEHICLE_INFORMATION, vehicleInformation)
		.replace(REPLACE_PARAM.FEE, fee);

	return process.stdout.write(`${leavingMessage} \n`);
}

export function getStatusMessage(parkingLot) {
	process.stdout.write(`${MESSAGE.SLOT_NO}    ${MESSAGE.REGISTRATION_NO} \n`);
	for (let slot of parkingLot) {
		process.stdout.write(
			`${slot.parkingSlotNumber}    ${slot.vehicleInformation} \n`
		);
	}
}

export function getNotFoundMessage(vehicleInformation) {
	const notFoundMessage = MESSAGE.NOT_FOUND.replace(
		REPLACE_PARAM.VEHICLE_INFORMATION,
		vehicleInformation
	);
	return process.stdout.write(`${notFoundMessage} \n`);
}

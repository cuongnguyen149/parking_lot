import { COMMAND_NAME } from "../common/constants";
import {
	isValidNumber,
	findNearestEntrySlot,
	findIndexByVehicleInformation,
	calculateFee,
	getFullMessage,
	getParkingMessage,
	getLeavingMessage,
	getStatusMessage,
	getNotFoundMessage,
} from "../common/utils";
import { getCommandDetails } from "../common/processInput";
let initialParkingLot = [];

function getParkingCapacity(createParkingLotCommand) {
	const parkingCapacity = getCommandDetails(createParkingLotCommand)[1]; //1 is position of parking capacity in create command.
	if (isValidNumber(parkingCapacity)) {
		return Number.parseInt(parkingCapacity);
	}
	console.log("Parking lot should be an integer and greater than 0.");
	return 0;
}

function processCommand(command, parkingCapacity) {
	const commandDetails = getCommandDetails(command);
	const commandName = commandDetails[0];
	const vehicleInformation = commandDetails[1];

	switch (commandName) {
		case COMMAND_NAME.PARK:
			if (!vehicleInformation) {
				console.log("Vehicle information should not empty!");
				return;
			}
			return processParkingCommand(
				initialParkingLot,
				parkingCapacity,
				vehicleInformation
			);
		case COMMAND_NAME.LEAVE:
			if (!vehicleInformation) {
				console.log("Vehicle information should not empty!");
				return;
			}
			const hours = commandDetails[2];
			return processLeavingCommand(
				initialParkingLot,
				vehicleInformation,
				hours
			);
		case COMMAND_NAME.STATUS:
			return processStatusCommand(initialParkingLot);
		default:
			break;
	}
}

function processParkingCommand(
	parkingLot,
	parkingCapacity,
	vehicleInformation
) {
	const parkingIndex = findIndexByVehicleInformation(
		parkingLot,
		vehicleInformation
	);
	if (parkingIndex !== -1) {
		console.log(
			`Registration number ${vehicleInformation} already had Slot Number ${
				parkingIndex + 1
			}`
		);
		return;
	}
	if (parkingLot.length === parkingCapacity) {
		return getFullMessage();
	} else {
		const parkingSlotNumber = findNearestEntrySlot(
			parkingLot,
			0,
			parkingLot.length - 1
		);
		const parkingSlot = {
			parkingSlotNumber: parkingSlotNumber + 1,
			vehicleInformation,
		};
		parkingLot.splice(parkingSlotNumber, 0, parkingSlot);
		return getParkingMessage(parkingSlotNumber + 1);
	}
}

function processLeavingCommand(parkingLot, vehicleInformation, hours) {
	const leavingIndex = findIndexByVehicleInformation(
		parkingLot,
		vehicleInformation
	);
	if (leavingIndex !== -1) {
		const { parkingSlotNumber } = parkingLot[leavingIndex];
		parkingLot.splice(leavingIndex, 1);
		const fee = calculateFee(hours);
		return getLeavingMessage(vehicleInformation, parkingSlotNumber, fee);
	} else {
		return getNotFoundMessage(vehicleInformation);
	}
}

function processStatusCommand(parkingLot) {
	return getStatusMessage(parkingLot);
}

export function processParkingLot(arrayCommands) {
	const parkingCapacity = getParkingCapacity(arrayCommands[0]);
	if (parkingCapacity > 0) {
		for (let i = 1; i < arrayCommands.length; i++) {
			processCommand(arrayCommands[i], parkingCapacity);
		}
	}
}

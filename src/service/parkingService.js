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
let parkingLotTEST = [];

function getParkingCapacity(createParkingLotCommand) {
	const parkingCapacity = getCommandDetails(createParkingLotCommand)[1]; //1 is position of parking capacity in create command.
	if (isValidNumber(parkingCapacity)) {
		return Number.parseInt(parkingCapacity);
	}
	console.log("Parking lot should negative");
	return;
}

function processCommand(command, parkingCapacity) {
	const commandDetails = getCommandDetails(command);
	const commandName = commandDetails[0];
	const vehicleInformation = commandDetails[1];

	switch (commandName) {
		case COMMAND_NAME.PARK:
			processParkingCommand(
				parkingLotTEST,
				parkingCapacity,
				vehicleInformation
			);
			break;
		case COMMAND_NAME.LEAVE:
			const hours = commandDetails[2];
			processLeavingCommand(parkingLotTEST, vehicleInformation, hours);
			break;
		case COMMAND_NAME.STATUS:
			processStatusCommand(parkingLotTEST);
			break;
		default:
			break;
	}
}

function processParkingCommand(
	parkingLot,
	parkingCapacity,
	vehicleInformation
) {
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
			status: COMMAND_NAME.PARK,
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
	console.log(parkingCapacity);
	for (let i = 1; i < arrayCommands.length; i++) {
		processCommand(arrayCommands[i], parkingCapacity);
	}
}

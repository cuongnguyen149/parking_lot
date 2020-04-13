import {
	isValidCommand,
	isValidInput,
	isValidNumber,
	findNearestEntrySlot,
	findIndexByVehicleInformation,
	calculateFee,
} from "./utils";
import {
	validCommand,
	inValidCommand,
	validArrayCommand,
	inValidArrayCommand,
	validNumbers,
	inValidNumbers,
	findNearestEntrySlotData,
	findIndexByVehicleInformationData,
	inputHours,
	expectedFee,
} from "./testData";
import { expect } from "chai";

describe("#utils", function () {
	describe("#isValidCommand", function () {
		for (let command of validCommand) {
			it(`should return ${command.toLowerCase()} when input command is: ${command}`, function () {
				expect(isValidCommand(command)).to.eq(command.toLowerCase());
			});
		}
		for (let command of inValidCommand) {
			it(`should return undefined when input command is: ${command}`, function () {
				expect(isValidCommand(command)).to.eq(undefined);
			});
		}
	});

	describe("#isValidInput", function () {
		it(`should return true when input arrayCommands valid`, function () {
			expect(isValidInput(validArrayCommand)).to.eq(true);
		});
		for (let arrayCommand of inValidArrayCommand) {
			it(`should return false when input arrayCommands is: ${arrayCommand}`, function () {
				expect(isValidInput(arrayCommand)).to.eq(false);
			});
		}
	});

	describe("#isValidNumber", function () {
		for (let number of validNumbers) {
			it(`should return true when input number is: ${number}`, function () {
				expect(isValidNumber(number)).to.eq(true);
			});
		}
		for (let number of inValidNumbers) {
			it(`should return false when input number is: ${number}`, function () {
				expect(isValidNumber(number)).to.eq(false);
			});
		}
	});

	describe("#findNearestEntrySlot", function () {
		const { inputParkingLot, expectedParkingSlot } = findNearestEntrySlotData;
		for (let i = 0; i < inputParkingLot.length; i++) {
			const input = inputParkingLot[i];
			it(`should return the index of nearest to entry slot when input parking lot is: ${input}`, function () {
				expect(findNearestEntrySlot(input, 0, input.length - 1)).to.eq(
					expectedParkingSlot[i]
				);
			});
		}
	});

	describe("#findIndexByVehicleInformation", function () {
		const { inputParam, expectedResult } = findIndexByVehicleInformationData;
		for (let i = 0; i < inputParam.length; i++) {
			const { vehicleInformation, parkingLot } = inputParam[i];
			it(`should return the index when vehicleInformation is: ${vehicleInformation}`, function () {
				expect(
					findIndexByVehicleInformation(parkingLot, vehicleInformation)
				).to.eq(expectedResult[i]);
			});
		}
	});
	describe("#calculateFee", function () {
		for (let i = 0; i < inputHours.length; i++) {
			const hour = inputHours[i];
			it(`should return fee relevant when hour input is: ${hour}`, function () {
				expect(calculateFee(hour)).to.eq(expectedFee[i]);
			});
		}
	});
});

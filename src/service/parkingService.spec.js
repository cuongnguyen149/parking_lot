import {
	validArrayCommand,
	validArrayCommandWithStatus,
} from "../common/testData";
import { processParkingLot } from "./parkingService";
import { expect } from "chai";
import * as sinon from "sinon";

describe("parkingService", function () {
	describe("#processParkingLot", function () {
		it(`Should call process.stdout ${validArrayCommandWithStatus.length} times`, function () {
			const spies = sinon.spy(process.stdout, "write");
			processParkingLot(validArrayCommandWithStatus);
			expect(spies.callCount).to.be.eq(validArrayCommandWithStatus.length);
			spies.restore();
		});
		it(`Should call process.stdout ${
			validArrayCommand.length - 1
		} times`, function () {
			const spies = sinon.spy(process.stdout, "write");
			processParkingLot(validArrayCommand);
			expect(spies.callCount).to.be.eq(validArrayCommand.length - 1);
			spies.restore();
		});
	});
});

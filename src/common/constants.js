export const REPLACE_PARAM = {
	VEHICLE_INFORMATION: "{vehicleInformation}",
	SLOT_NUMBER: "{slotNumber}",
	FEE: "{fee}",
};
export const COMMAND_NAME = {
	CREATE_PARKING_LOT: "create_parking_lot",
	PARK: "park",
	LEAVE: "leave",
	STATUS: "status",
};

export const BASE_FEE = 10;

export const MESSAGE = {
	FULL: "Sorry, parking lot is full",
	PARK: "Allocated slot number:",
	LEAVE: `Registration number ${REPLACE_PARAM.VEHICLE_INFORMATION} with Slot Number ${REPLACE_PARAM.SLOT_NUMBER} is free with Charge ${REPLACE_PARAM.FEE}`,
	SLOT_NO: "Slot No.",
	REGISTRATION_NO: "Registration No.",
	NOT_FOUND: `Registration number ${REPLACE_PARAM.VEHICLE_INFORMATION} not found`,
};

const commonValue = [undefined, null, "", {}, [], "  "];
export const baseParkingLot = [
	{ parkingSlotNumber: 1, vehicleInformation: "KA-01-HH-1234" },
];
export const validArrayCommand = [
	"create_parking_lot 6",
	"park KA-01-HH-1234",
	"park KA-01-HH-9999",
	"park KA-01-BB-0001",
	"park KA-01-HH-7777",
	"park KA-01-HH-2701",
	"park KA-01-HH-3141",
	"leave KA-01-HH-3141 4",
	"status",
	"park KA-01-P-333",
	"park DL-12-AA-9999",
	"leave KA-01-HH-1234 4",
	"leave KA-01-BB-0001 6",
	"leave DL-12-AA-9999 2",
	"park KA-09-HH-0987",
	"park CA-09-IO-1111",
	"park KA-09-HH-0123",
	"status",
];

export const inValidArrayCommand = [
	["park1"],
	[undefined],
	[null],
	[],
	[{}],
	[""],
	["    "],
	...commonValue,
];
export const validCommand = [
	"park",
	"leave",
	"status",
	"CREaTe_PaRkINg_lot",
	"cReatE_PArkING_LOT",
	"create_PARKIng_LoT",
	"creaTE_pARkInG_lot",
	"PArk",
	"pArk",
	"PArK",
	"paRk",
	"lEaVe",
	"LeAve",
	"Leave",
	"leavE",
	"STATUS",
	"stAtUS",
	"sTaTUs",
	"staTuS",
];

export const inValidCommand = [
	"park1",
	"lesave1",
	"stadtus1",
	"CREacTe_PaRkINg_lot1",
	"cReactE_PArkING_LOT1",
	"creacte_PARKIng_LoT1",
	"creaxTE_pARkInG_lot1",
	"PArkx1",
	"pArdk1",
	"PArfK1",
	"paRke1",
	"lEaVge1",
	"LeAvde1",
	...commonValue,
];

export const validNumbers = [
	"1.0000",
	1.0,
	"12",
	"333",
	"2312",
	1,
	3332323,
	2342344423,
];

export const inValidNumbers = [1.01, "12.1", ...commonValue];
export const findNearestEntrySlotData = {
	inputParkingLot: [
		[],
		[{ parkingSlotNumber: 1 }, { parkingSlotNumber: 2 }],
		[
			{ parkingSlotNumber: 1 },
			{ parkingSlotNumber: 2 },
			{ parkingSlotNumber: 4 },
		],
		[{ parkingSlotNumber: 1 }, { parkingSlotNumber: 3 }],
		[
			{ parkingSlotNumber: 1 },
			{ parkingSlotNumber: 2 },
			{ parkingSlotNumber: 5 },
		],
		[
			{ parkingSlotNumber: 1 },
			{ parkingSlotNumber: 3 },
			{ parkingSlotNumber: 4 },
			{ parkingSlotNumber: 5 },
		],
	],
	expectedParkingSlot: [0, 2, 2, 1, 2, 1],
};
export const findIndexByVehicleInformationData = {
	inputParam: [
		{
			parkingLot: [],
			vehicleInformation: "test",
		},
		{
			parkingLot: [{ vehicleInformation: "vehicleInformation" }],
			vehicleInformation: "vehicleInformation",
		},
	],
	expectedResult: [-1, 0],
};

export const inputHours = [1, 1.0001, 2, 2.0001, 3, 3.00001, 3.4, 3.9, 10];
export const expectedFee = [10, 10, 10, 20, 20, 30, 30, 30, 90];

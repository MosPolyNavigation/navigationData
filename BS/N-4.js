let planData = {
	planName: 'N-4',
	svgLink: '/BS/N-4.svg',
	campus: 'BS',
	corpus: 'N',
	floor: 4,
	entrances: [['n-4-stair-1', '5'], ['n-4-stair-2', '17'], ['n-4-stair-3', '27'], ['n-401', '25']],
	graph: [
		{
			"id": "n-4-stair-3",
			"x": 380,
			"y": 260,
			"type": "stair",
			"neighborData": [
				[
					"n-4_1",
					45
				],
				[
					"n-4_2",
					55
				]
			]
		},
		{
			"id": "n-4_1",
			"x": 380,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_29",
					104
				],
				[
					"n-4-stair-3",
					45
				]
			]
		},
		{
			"id": "n-4_2",
			"x": 380,
			"y": 205,
			"type": "hallway",
			"neighborData": [
				[
					"n-4-stair-3",
					55
				],
				[
					"n-402",
					50
				]
			]
		},
		{
			"id": "n-402",
			"x": 330,
			"y": 205,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_2",
					50
				]
			]
		},
		{
			"id": "n-4-wcw-1",
			"x": 1271,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_5",
					45
				]
			]
		},
		{
			"id": "n-4_5",
			"x": 1271,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_9",
					206
				],
				[
					"n-4-wcw-1",
					45
				],
				[
					"n-4-cowork-1",
					351
				]
			]
		},
		{
			"id": "n-4-cowork-1",
			"x": 920,
			"y": 305,
			"type": "crossingSpace",
			"neighborData": [
				[
					"n-4_5",
					351
				],
				[
					"n-4_29",
					436
				]
			]
		},
		{
			"id": "n-4_7",
			"x": 3011,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_21",
					76
				],
				[
					"n-4-lift-3",
					45
				]
			]
		},
		{
			"id": "n-4-wcm-1",
			"x": 1477,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_9",
					45
				]
			]
		},
		{
			"id": "n-4_9",
			"x": 1477,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_5",
					206
				],
				[
					"n-4_11",
					103
				],
				[
					"n-4-wcm-1",
					45
				]
			]
		},
		{
			"id": "n-4-stair-2",
			"x": 1580,
			"y": 260,
			"type": "stair",
			"neighborData": [
				[
					"n-4_11",
					45
				]
			]
		},
		{
			"id": "n-4_11",
			"x": 1580,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_9",
					103
				],
				[
					"n-4_27",
					357
				],
				[
					"n-4_35",
					208
				],
				[
					"n-4-stair-2",
					45
				]
			]
		},
		{
			"id": "n-410",
			"x": 2493,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_13",
					45
				]
			]
		},
		{
			"id": "n-4_13",
			"x": 2493,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_23",
					240
				],
				[
					"n-4_15",
					154
				],
				[
					"n-4-u-4",
					45
				],
				[
					"n-410",
					45
				]
			]
		},
		{
			"id": "n-411",
			"x": 2647,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_15",
					45
				]
			]
		},
		{
			"id": "n-4_15",
			"x": 2647,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_13",
					154
				],
				[
					"n-4_17",
					133
				],
				[
					"n-411",
					45
				]
			]
		},
		{
			"id": "n-4-stair-1",
			"x": 2780,
			"y": 260,
			"type": "stair",
			"neighborData": [
				[
					"n-4_17",
					45
				]
			]
		},
		{
			"id": "n-4_17",
			"x": 2780,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_15",
					133
				],
				[
					"n-4_19",
					79
				],
				[
					"n-4_49",
					297
				],
				[
					"n-4-stair-1",
					45
				]
			]
		},
		{
			"id": "n-4-lift-1",
			"x": 2859,
			"y": 260,
			"type": "lift",
			"neighborData": [
				[
					"n-4_19",
					45
				]
			]
		},
		{
			"id": "n-4_19",
			"x": 2859,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_17",
					79
				],
				[
					"n-4_21",
					76
				],
				[
					"n-4-lift-1",
					45
				]
			]
		},
		{
			"id": "n-4-lift-2",
			"x": 2935,
			"y": 260,
			"type": "lift",
			"neighborData": [
				[
					"n-4_21",
					45
				]
			]
		},
		{
			"id": "n-4_21",
			"x": 2935,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_19",
					76
				],
				[
					"n-4_7",
					76
				],
				[
					"n-4-lift-2",
					45
				]
			]
		},
		{
			"id": "n-4-lift-3",
			"x": 3011,
			"y": 260,
			"type": "lift",
			"neighborData": [
				[
					"n-4_7",
					45
				]
			]
		},
		{
			"id": "n-4_23",
			"x": 2253,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_25",
					196
				],
				[
					"n-4_13",
					240
				],
				[
					"n-419",
					45
				]
			]
		},
		{
			"id": "n-419",
			"x": 2253,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_23",
					45
				]
			]
		},
		{
			"id": "n-4_25",
			"x": 2057,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_27",
					120
				],
				[
					"n-4_23",
					196
				],
				[
					"n-418",
					45
				]
			]
		},
		{
			"id": "n-418",
			"x": 2057,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_25",
					45
				]
			]
		},
		{
			"id": "n-4_27",
			"x": 1937,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_11",
					357
				],
				[
					"n-4_25",
					120
				],
				[
					"n-4-u-5",
					45
				]
			]
		},
		{
			"id": "n-4-u-5",
			"x": 1937,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_27",
					45
				]
			]
		},
		{
			"id": "n-4_29",
			"x": 484,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_30",
					186
				],
				[
					"n-4_1",
					104
				],
				[
					"n-4-cowork-1",
					436
				]
			]
		},
		{
			"id": "n-4_30",
			"x": 484,
			"y": 491,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_29",
					186
				],
				[
					"n-401",
					81
				]
			]
		},
		{
			"id": "n-4_31",
			"x": 1580,
			"y": 933,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_43",
					156
				],
				[
					"n-4_41",
					5
				],
				[
					"n-407",
					50
				]
			]
		},
		{
			"id": "n-4_32",
			"x": 2780,
			"y": 933,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_39",
					126
				],
				[
					"n-4-u-2",
					40
				]
			]
		},
		{
			"id": "n-4-u-4",
			"x": 2493,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_13",
					45
				]
			]
		},
		{
			"id": "n-401",
			"x": 565,
			"y": 491,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_30",
					81
				]
			]
		},
		{
			"id": "n-4_35",
			"x": 1580,
			"y": 513,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_11",
					208
				],
				[
					"n-4_43",
					264
				],
				[
					"n-405",
					50
				],
				[
					"n-406",
					50
				]
			]
		},
		{
			"id": "n-406",
			"x": 1630,
			"y": 513,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_35",
					50
				]
			]
		},
		{
			"id": "n-405",
			"x": 1530,
			"y": 513,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_35",
					50
				]
			]
		},
		{
			"id": "n-4-u-3",
			"x": 2740,
			"y": 807,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_39",
					40
				]
			]
		},
		{
			"id": "n-4_39",
			"x": 2780,
			"y": 807,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_47",
					70
				],
				[
					"n-4_32",
					126
				],
				[
					"n-4-u-3",
					40
				]
			]
		},
		{
			"id": "n-407",
			"x": 1530,
			"y": 933,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_31",
					50
				]
			]
		},
		{
			"id": "n-4_41",
			"x": 1585,
			"y": 933,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_31",
					5
				],
				[
					"n-409",
					45
				],
				[
					"n-4-u-6",
					52
				]
			]
		},
		{
			"id": "n-4-u-6",
			"x": 1585,
			"y": 985,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_41",
					52
				]
			]
		},
		{
			"id": "n-4_43",
			"x": 1580,
			"y": 777,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_35",
					264
				],
				[
					"n-4_31",
					156
				],
				[
					"n-408",
					50
				]
			]
		},
		{
			"id": "n-408",
			"x": 1630,
			"y": 777,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_43",
					50
				]
			]
		},
		{
			"id": "n-409",
			"x": 1630,
			"y": 933,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_41",
					45
				]
			]
		},
		{
			"id": "n-4-u-2",
			"x": 2740,
			"y": 933,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_32",
					40
				]
			]
		},
		{
			"id": "n-4_47",
			"x": 2780,
			"y": 737,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_49",
					135
				],
				[
					"n-4_39",
					70
				],
				[
					"n-416",
					50
				]
			]
		},
		{
			"id": "n-416",
			"x": 2830,
			"y": 737,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_47",
					50
				]
			]
		},
		{
			"id": "n-4_49",
			"x": 2780,
			"y": 602,
			"type": "hallway",
			"neighborData": [
				[
					"n-4_17",
					297
				],
				[
					"n-4_47",
					135
				],
				[
					"n-415",
					50
				]
			]
		},
		{
			"id": "n-415",
			"x": 2830,
			"y": 602,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-4_49",
					50
				]
			]
		}
	],
	spaces: [],
}

export default planData
let planData = {
	planName: 'N-2',
	svgLink: '/BS/N-2.svg',
	campus: 'BS',
	corpus: 'N',
	floor: 2,
	entrances: [['n-2-stair-3', '34'], ['n-2-stair-2', '18'], ['n-2-stair-1', '5'],
	],
	graph: [
		{
			"id": "n-2-crossing-1",
			"x": 3050,
			"y": 302,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_25",
					39
				]
			]
		},
		{
			"id": "n-2-crossing-2",
			"x": 5,
			"y": 302,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_3",
					79
				]
			]
		},
		{
			"id": "n-201",
			"x": 84,
			"y": 259,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_3",
					43
				]
			]
		},
		{
			"id": "n-2_3",
			"x": 84,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_5",
					156
				],
				[
					"n-201",
					43
				],
				[
					"n-2-crossing-2",
					79
				]
			]
		},
		{
			"id": "n-202",
			"x": 240,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_5",
					42
				]
			]
		},
		{
			"id": "n-2_5",
			"x": 240,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_3",
					156
				],
				[
					"n-2_7",
					140
				],
				[
					"n-202",
					42
				]
			]
		},
		{
			"id": "n-2-stair-3",
			"x": 380,
			"y": 260,
			"type": "stair",
			"neighborData": [
				[
					"n-2_7",
					42
				]
			]
		},
		{
			"id": "n-2_7",
			"x": 380,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_5",
					140
				],
				[
					"n-2_37",
					313
				],
				[
					"n-2_55",
					111
				],
				[
					"n-2-stair-3",
					42
				]
			]
		},
		{
			"id": "n-2-wcw-1",
			"x": 1271,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_9",
					42
				]
			]
		},
		{
			"id": "n-2_9",
			"x": 1271,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_31",
					123
				],
				[
					"n-2_11",
					206
				],
				[
					"n-2-wcw-1",
					42
				]
			]
		},
		{
			"id": "n-2-wcm-1",
			"x": 1477,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_11",
					42
				]
			]
		},
		{
			"id": "n-2_11",
			"x": 1477,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_9",
					206
				],
				[
					"n-2_13",
					103
				],
				[
					"n-2-wcm-1",
					42
				]
			]
		},
		{
			"id": "n-2-stair-2",
			"x": 1580,
			"y": 260,
			"type": "stair",
			"neighborData": [
				[
					"n-2_13",
					42
				]
			]
		},
		{
			"id": "n-2_13",
			"x": 1580,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_11",
					103
				],
				[
					"n-2_29",
					311
				],
				[
					"n-2_52",
					102
				],
				[
					"n-2-stair-2",
					42
				]
			]
		},
		{
			"id": "n-215",
			"x": 2493,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_15",
					42
				]
			]
		},
		{
			"id": "n-2_15",
			"x": 2493,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_27",
					126
				],
				[
					"n-2_19",
					154
				],
				[
					"n-216a",
					48
				],
				[
					"n-215",
					42
				]
			]
		},
		{
			"id": "n-2-stair-1",
			"x": 2780,
			"y": 260,
			"type": "stair",
			"neighborData": [
				[
					"n-2_17",
					42
				]
			]
		},
		{
			"id": "n-2_17",
			"x": 2780,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_19",
					133
				],
				[
					"n-2_21",
					79
				],
				[
					"n-2_73",
					235
				],
				[
					"n-2-stair-1",
					42
				]
			]
		},
		{
			"id": "n-216",
			"x": 2647,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_19",
					42
				]
			]
		},
		{
			"id": "n-2_19",
			"x": 2647,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_15",
					154
				],
				[
					"n-2_17",
					133
				],
				[
					"n-216",
					42
				]
			]
		},
		{
			"id": "n-2-lift-1",
			"x": 2859,
			"y": 259,
			"type": "lift",
			"neighborData": [
				[
					"n-2_21",
					43
				]
			]
		},
		{
			"id": "n-2_21",
			"x": 2859,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_17",
					79
				],
				[
					"n-2_23",
					76
				],
				[
					"n-2-lift-1",
					43
				]
			]
		},
		{
			"id": "n-2-lift-2",
			"x": 2935,
			"y": 259,
			"type": "lift",
			"neighborData": [
				[
					"n-2_23",
					43
				]
			]
		},
		{
			"id": "n-2_23",
			"x": 2935,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_21",
					76
				],
				[
					"n-2_25",
					76
				],
				[
					"n-2-lift-2",
					43
				]
			]
		},
		{
			"id": "n-2-lift-3",
			"x": 3011,
			"y": 259,
			"type": "lift",
			"neighborData": [
				[
					"n-2_25",
					43
				]
			]
		},
		{
			"id": "n-2_25",
			"x": 3011,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_23",
					76
				],
				[
					"n-2-lift-3",
					43
				],
				[
					"n-2-crossing-1",
					39
				]
			]
		},
		{
			"id": "n-216a",
			"x": 2493,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_15",
					48
				]
			]
		},
		{
			"id": "n-2_27",
			"x": 2367,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_29",
					476
				],
				[
					"n-2_15",
					126
				],
				[
					"n-214",
					48
				]
			]
		},
		{
			"id": "n-214",
			"x": 2367,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_27",
					48
				]
			]
		},
		{
			"id": "n-2_29",
			"x": 1891,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_13",
					311
				],
				[
					"n-2_27",
					476
				],
				[
					"n-214a",
					48
				]
			]
		},
		{
			"id": "n-214a",
			"x": 1891,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_29",
					48
				]
			]
		},
		{
			"id": "n-2_31",
			"x": 1148,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_33",
					143
				],
				[
					"n-2_9",
					123
				],
				[
					"n-208a",
					48
				]
			]
		},
		{
			"id": "n-208a",
			"x": 1148,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_31",
					48
				]
			]
		},
		{
			"id": "n-2_33",
			"x": 1005,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_35",
					159
				],
				[
					"n-2_31",
					143
				],
				[
					"n-208",
					48
				]
			]
		},
		{
			"id": "n-208",
			"x": 1005,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_33",
					48
				]
			]
		},
		{
			"id": "n-2_35",
			"x": 846,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_37",
					153
				],
				[
					"n-2_33",
					159
				],
				[
					"n-207",
					48
				]
			]
		},
		{
			"id": "n-207",
			"x": 846,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_35",
					48
				]
			]
		},
		{
			"id": "n-2_37",
			"x": 693,
			"y": 302,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_7",
					313
				],
				[
					"n-2_35",
					153
				],
				[
					"n-207a",
					48
				]
			]
		},
		{
			"id": "n-207a",
			"x": 693,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_37",
					48
				]
			]
		},
		{
			"id": "n-2_39",
			"x": 1580,
			"y": 1007,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_41",
					94
				],
				[
					"n-211",
					50
				]
			]
		},
		{
			"id": "n-211",
			"x": 1530,
			"y": 1007,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_39",
					50
				]
			]
		},
		{
			"id": "n-2_41",
			"x": 1580,
			"y": 913,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_43",
					136
				],
				[
					"n-2_39",
					94
				],
				[
					"n-213",
					50
				]
			]
		},
		{
			"id": "n-213",
			"x": 1630,
			"y": 913,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_41",
					50
				]
			]
		},
		{
			"id": "n-2_43",
			"x": 1580,
			"y": 777,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_46",
					40
				],
				[
					"n-2_41",
					136
				],
				[
					"n-212",
					50
				]
			]
		},
		{
			"id": "n-212",
			"x": 1630,
			"y": 777,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_43",
					50
				]
			]
		},
		{
			"id": "n-211a",
			"x": 1530,
			"y": 737,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_46",
					50
				]
			]
		},
		{
			"id": "n-2_46",
			"x": 1580,
			"y": 737,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_48",
					143
				],
				[
					"n-2_43",
					40
				],
				[
					"n-211a",
					50
				]
			]
		},
		{
			"id": "n-209a",
			"x": 1530,
			"y": 594,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_48",
					50
				]
			]
		},
		{
			"id": "n-2_48",
			"x": 1580,
			"y": 594,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_49",
					10
				],
				[
					"n-2_46",
					143
				],
				[
					"n-209a",
					50
				]
			]
		},
		{
			"id": "n-2_49",
			"x": 1580,
			"y": 584,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_52",
					180
				],
				[
					"n-2_48",
					10
				],
				[
					"n-210",
					50
				]
			]
		},
		{
			"id": "n-210",
			"x": 1630,
			"y": 584,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_49",
					50
				]
			]
		},
		{
			"id": "n-209",
			"x": 1530,
			"y": 404,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_52",
					50
				]
			]
		},
		{
			"id": "n-2_52",
			"x": 1580,
			"y": 404,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_13",
					102
				],
				[
					"n-2_49",
					180
				],
				[
					"n-209",
					50
				]
			]
		},
		{
			"id": "n-2_53",
			"x": 2780,
			"y": 983,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_65",
					50
				],
				[
					"n-220",
					50
				]
			]
		},
		{
			"id": "n-205a",
			"x": 380,
			"y": 1020,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_62",
					112
				]
			]
		},
		{
			"id": "n-2_55",
			"x": 380,
			"y": 413,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_7",
					111
				],
				[
					"n-2_57",
					290
				],
				[
					"n-204",
					50
				]
			]
		},
		{
			"id": "n-204",
			"x": 430,
			"y": 413,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_55",
					50
				]
			]
		},
		{
			"id": "n-2_57",
			"x": 380,
			"y": 703,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_55",
					290
				],
				[
					"n-2_60",
					65
				],
				[
					"n-206",
					50
				]
			]
		},
		{
			"id": "n-206",
			"x": 430,
			"y": 703,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_57",
					50
				]
			]
		},
		{
			"id": "n-203",
			"x": 330,
			"y": 768,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_60",
					50
				]
			]
		},
		{
			"id": "n-2_60",
			"x": 380,
			"y": 768,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_57",
					65
				],
				[
					"n-2_62",
					140
				],
				[
					"n-203",
					50
				]
			]
		},
		{
			"id": "n-205",
			"x": 330,
			"y": 908,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_62",
					50
				]
			]
		},
		{
			"id": "n-2_62",
			"x": 380,
			"y": 908,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_60",
					140
				],
				[
					"n-205a",
					112
				],
				[
					"n-205",
					50
				]
			]
		},
		{
			"id": "n-220",
			"x": 2830,
			"y": 983,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_53",
					50
				]
			]
		},
		{
			"id": "n-221",
			"x": 2740,
			"y": 933,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_65",
					40
				]
			]
		},
		{
			"id": "n-2_65",
			"x": 2780,
			"y": 933,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_67",
					164
				],
				[
					"n-2_53",
					50
				],
				[
					"n-221",
					40
				]
			]
		},
		{
			"id": "n-219",
			"x": 2740,
			"y": 769,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_67",
					40
				]
			]
		},
		{
			"id": "n-2_67",
			"x": 2780,
			"y": 769,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_68",
					52
				],
				[
					"n-2_65",
					164
				],
				[
					"n-219",
					40
				]
			]
		},
		{
			"id": "n-2_68",
			"x": 2780,
			"y": 717,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_69",
					50
				],
				[
					"n-2_70",
					115
				],
				[
					"n-2_67",
					52
				]
			]
		},
		{
			"id": "n-2_69",
			"x": 2830,
			"y": 717,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_68",
					50
				]
			]
		},
		{
			"id": "n-2_70",
			"x": 2780,
			"y": 602,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_73",
					65
				],
				[
					"n-2_68",
					115
				],
				[
					"n-218",
					50
				]
			]
		},
		{
			"id": "n-218",
			"x": 2830,
			"y": 602,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_70",
					50
				]
			]
		},
		{
			"id": "n-217",
			"x": 2740,
			"y": 537,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-2_73",
					40
				]
			]
		},
		{
			"id": "n-2_73",
			"x": 2780,
			"y": 537,
			"type": "hallway",
			"neighborData": [
				[
					"n-2_17",
					235
				],
				[
					"n-2_70",
					65
				],
				[
					"n-217",
					40
				]
			]
		}
	],
	spaces: [],
}

export default planData
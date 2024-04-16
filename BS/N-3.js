let planData = {
	planName: 'N-3',
	svgLink: '/BS/N-3',
	campus: 'BS',
	corpus: 'N',
	floor: 3,
	entrances: [['n-3-stair-1','30'],['n-3-stair-2','5'],['n-3-stair-3','16'],
	],
	graph: [
		{
			"id": "n-302",
			"x": 240,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_1",
					45
				]
			]
		},
		{
			"id": "n-3_1",
			"x": 240,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_7",
					156
				],
				[
					"n-3_3",
					140
				],
				[
					"n-302",
					45
				]
			]
		},
		{
			"id": "n-3-stair-3",
			"x": 380,
			"y": 260,
			"type": "stair",
			"neighborData": [
				[
					"n-3_3",
					45
				]
			]
		},
		{
			"id": "n-3_3",
			"x": 380,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_1",
					140
				],
				[
					"n-3_34",
					313
				],
				[
					"n-3_59",
					178
				],
				[
					"n-3-stair-3",
					45
				]
			]
		},
		{
			"id": "n-3-wcw-1",
			"x": 1271,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_5",
					45
				]
			]
		},
		{
			"id": "n-3_5",
			"x": 1271,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_32",
					123
				],
				[
					"n-3_10",
					206
				],
				[
					"n-3-wcw-1",
					45
				]
			]
		},
		{
			"id": "n-3_6",
			"x": 3011,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_22",
					76
				],
				[
					"n-3-lift-3",
					45
				]
			]
		},
		{
			"id": "n-3_7",
			"x": 84,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_1",
					156
				],
				[
					"n-301",
					45
				]
			]
		},
		{
			"id": "n-301",
			"x": 84,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_7",
					45
				]
			]
		},
		{
			"id": "n-3-wcm-1",
			"x": 1477,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_10",
					45
				]
			]
		},
		{
			"id": "n-3_10",
			"x": 1477,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_5",
					206
				],
				[
					"n-3_12",
					103
				],
				[
					"n-3-wcm-1",
					45
				]
			]
		},
		{
			"id": "n-3-stair-2",
			"x": 1580,
			"y": 260,
			"type": "stair",
			"neighborData": [
				[
					"n-3_12",
					45
				]
			]
		},
		{
			"id": "n-3_12",
			"x": 1580,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_10",
					103
				],
				[
					"n-3_30",
					311
				],
				[
					"n-3_48",
					218
				],
				[
					"n-3-stair-2",
					45
				]
			]
		},
		{
			"id": "n-317",
			"x": 2493,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_14",
					45
				]
			]
		},
		{
			"id": "n-3_14",
			"x": 2493,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_24",
					126
				],
				[
					"n-3_16",
					154
				],
				[
					"n-327",
					45
				],
				[
					"n-317",
					45
				]
			]
		},
		{
			"id": "n-316",
			"x": 2647,
			"y": 260,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_16",
					45
				]
			]
		},
		{
			"id": "n-3_16",
			"x": 2647,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_14",
					154
				],
				[
					"n-3_18",
					133
				],
				[
					"n-316",
					45
				]
			]
		},
		{
			"id": "n-3-stair-1",
			"x": 2780,
			"y": 260,
			"type": "stair",
			"neighborData": [
				[
					"n-3_18",
					45
				]
			]
		},
		{
			"id": "n-3_18",
			"x": 2780,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_16",
					133
				],
				[
					"n-3_20",
					79
				],
				[
					"n-3_50",
					232
				],
				[
					"n-3-stair-1",
					45
				]
			]
		},
		{
			"id": "n-3-lift-1",
			"x": 2859,
			"y": 260,
			"type": "lift",
			"neighborData": [
				[
					"n-3_20",
					45
				]
			]
		},
		{
			"id": "n-3_20",
			"x": 2859,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_18",
					79
				],
				[
					"n-3_22",
					76
				],
				[
					"n-3-lift-1",
					45
				]
			]
		},
		{
			"id": "n-3-lift-2",
			"x": 2935,
			"y": 260,
			"type": "lift",
			"neighborData": [
				[
					"n-3_22",
					45
				]
			]
		},
		{
			"id": "n-3_22",
			"x": 2935,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_20",
					76
				],
				[
					"n-3_6",
					76
				],
				[
					"n-3-lift-2",
					45
				]
			]
		},
		{
			"id": "n-3-lift-3",
			"x": 3011,
			"y": 260,
			"type": "lift",
			"neighborData": [
				[
					"n-3_6",
					45
				]
			]
		},
		{
			"id": "n-3_24",
			"x": 2367,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_26",
					174
				],
				[
					"n-3_14",
					126
				],
				[
					"n-326",
					45
				]
			]
		},
		{
			"id": "n-326",
			"x": 2367,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_24",
					45
				]
			]
		},
		{
			"id": "n-3_26",
			"x": 2193,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_28",
					86
				],
				[
					"n-3_24",
					174
				],
				[
					"n-325",
					45
				]
			]
		},
		{
			"id": "n-325",
			"x": 2193,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_26",
					45
				]
			]
		},
		{
			"id": "n-3_28",
			"x": 2107,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_30",
					216
				],
				[
					"n-3_26",
					86
				],
				[
					"n-324",
					45
				]
			]
		},
		{
			"id": "n-324",
			"x": 2107,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_28",
					45
				]
			]
		},
		{
			"id": "n-3_30",
			"x": 1891,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_12",
					311
				],
				[
					"n-3_28",
					216
				],
				[
					"n-323",
					45
				]
			]
		},
		{
			"id": "n-323",
			"x": 1891,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_30",
					45
				]
			]
		},
		{
			"id": "n-3_32",
			"x": 1148,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_34",
					455
				],
				[
					"n-3_5",
					123
				],
				[
					"n-309",
					45
				]
			]
		},
		{
			"id": "n-309",
			"x": 1148,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_32",
					45
				]
			]
		},
		{
			"id": "n-3_34",
			"x": 693,
			"y": 305,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_3",
					313
				],
				[
					"n-3_32",
					455
				],
				[
					"n-308",
					45
				]
			]
		},
		{
			"id": "n-308",
			"x": 693,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_34",
					45
				]
			]
		},
		{
			"id": "n-3_36",
			"x": 380,
			"y": 1038,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_63",
					130
				],
				[
					"n-307",
					50
				]
			]
		},
		{
			"id": "n-3_37",
			"x": 1580,
			"y": 1007,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_54",
					74
				],
				[
					"n-314",
					50
				]
			]
		},
		{
			"id": "n-3_38",
			"x": 2780,
			"y": 983,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_65",
					50
				],
				[
					"n-322",
					50
				]
			]
		},
		{
			"id": "n-327",
			"x": 2493,
			"y": 350,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_14",
					45
				]
			]
		},
		{
			"id": "n-307",
			"x": 430,
			"y": 1038,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_36",
					50
				]
			]
		},
		{
			"id": "n-3_41",
			"x": 380,
			"y": 703,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_43",
					140
				],
				[
					"n-3_61",
					65
				],
				[
					"n-306",
					50
				]
			]
		},
		{
			"id": "n-306",
			"x": 430,
			"y": 703,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_41",
					50
				]
			]
		},
		{
			"id": "n-3_43",
			"x": 380,
			"y": 563,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_59",
					80
				],
				[
					"n-3_41",
					140
				],
				[
					"n-304",
					50
				]
			]
		},
		{
			"id": "n-304",
			"x": 430,
			"y": 563,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_43",
					50
				]
			]
		},
		{
			"id": "n-3_45",
			"x": 1580,
			"y": 584,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_48",
					61
				],
				[
					"n-3_52",
					153
				],
				[
					"n-310",
					50
				]
			]
		},
		{
			"id": "n-310",
			"x": 1630,
			"y": 584,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_45",
					50
				]
			]
		},
		{
			"id": "n-311",
			"x": 1530,
			"y": 523,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_48",
					50
				]
			]
		},
		{
			"id": "n-3_48",
			"x": 1580,
			"y": 523,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_12",
					218
				],
				[
					"n-3_45",
					61
				],
				[
					"n-311",
					50
				]
			]
		},
		{
			"id": "n-319",
			"x": 2740,
			"y": 537,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_50",
					40
				]
			]
		},
		{
			"id": "n-3_50",
			"x": 2780,
			"y": 537,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_18",
					232
				],
				[
					"n-3_69",
					65
				],
				[
					"n-319",
					40
				]
			]
		},
		{
			"id": "n-313",
			"x": 1530,
			"y": 737,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_52",
					50
				]
			]
		},
		{
			"id": "n-3_52",
			"x": 1580,
			"y": 737,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_45",
					153
				],
				[
					"n-3_55",
					40
				],
				[
					"n-313",
					50
				]
			]
		},
		{
			"id": "n-315",
			"x": 1530,
			"y": 933,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_54",
					50
				]
			]
		},
		{
			"id": "n-3_54",
			"x": 1580,
			"y": 933,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_55",
					156
				],
				[
					"n-3_37",
					74
				],
				[
					"n-315",
					50
				]
			]
		},
		{
			"id": "n-3_55",
			"x": 1580,
			"y": 777,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_52",
					40
				],
				[
					"n-3_54",
					156
				],
				[
					"n-312",
					50
				]
			]
		},
		{
			"id": "n-312",
			"x": 1630,
			"y": 777,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_55",
					50
				]
			]
		},
		{
			"id": "n-314",
			"x": 1630,
			"y": 1007,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_37",
					50
				]
			]
		},
		{
			"id": "n-303a",
			"x": 330,
			"y": 483,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_59",
					50
				]
			]
		},
		{
			"id": "n-3_59",
			"x": 380,
			"y": 483,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_3",
					178
				],
				[
					"n-3_43",
					80
				],
				[
					"n-303a",
					50
				]
			]
		},
		{
			"id": "n-303b",
			"x": 330,
			"y": 768,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_61",
					50
				]
			]
		},
		{
			"id": "n-3_61",
			"x": 380,
			"y": 768,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_41",
					65
				],
				[
					"n-3_63",
					140
				],
				[
					"n-303b",
					50
				]
			]
		},
		{
			"id": "n-305",
			"x": 330,
			"y": 908,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_63",
					50
				]
			]
		},
		{
			"id": "n-3_63",
			"x": 380,
			"y": 908,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_61",
					140
				],
				[
					"n-3_36",
					130
				],
				[
					"n-305",
					50
				]
			]
		},
		{
			"id": "n-321",
			"x": 2740,
			"y": 933,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_65",
					40
				]
			]
		},
		{
			"id": "n-3_65",
			"x": 2780,
			"y": 933,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_67",
					216
				],
				[
					"n-3_38",
					50
				],
				[
					"n-321",
					40
				]
			]
		},
		{
			"id": "n-322",
			"x": 2830,
			"y": 983,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_38",
					50
				]
			]
		},
		{
			"id": "n-3_67",
			"x": 2780,
			"y": 717,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_69",
					115
				],
				[
					"n-3_65",
					216
				],
				[
					"n-320",
					50
				]
			]
		},
		{
			"id": "n-320",
			"x": 2830,
			"y": 717,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_67",
					50
				]
			]
		},
		{
			"id": "n-3_69",
			"x": 2780,
			"y": 602,
			"type": "hallway",
			"neighborData": [
				[
					"n-3_50",
					65
				],
				[
					"n-3_67",
					115
				],
				[
					"n-318",
					50
				]
			]
		},
		{
			"id": "n-318",
			"x": 2830,
			"y": 602,
			"type": "entrancesToAu",
			"neighborData": [
				[
					"n-3_69",
					50
				]
			]
		}
	],
	spaces: [],
}

export default planData
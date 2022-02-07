const people2 = {
    "group_1": {
        "name": "A",
		"group_1_a": {
            "name": "B",
			"group_alpha": {  // group_1.group_1_a.group_alpha
                "name": "U",
                "user_list": [
                    {
                        "name": "Ann", 
                        "age": 19
                    },
                    {
                        "name": "Fred",
                        "age": 30
                    }
                ]
            },
			"group_betta": {  // group_1.group_1_a.group_betta
                "name": "P",
                "user_list": [
                    {
                        "name": "Tom",
                        "age": 20
                    }
                ]
            }
		},
		"group_1_b": {  // group_1.group_1_b
            "name": "O",
            "user_list": [
                {
                    "name": "Jim",
                    "age": 35
                }
            ]
        }
	},
	"group_1_b": {
        "name": "S",
		"group_alpha": {
			"group_a": {  // group_1_b.group_alpha.group_a
                "name": "I",
                "user_list": [
                    {
                        "name": "Kim",
                        "age": 32
                    },
                    {
                        "name": "Nick",
                        "age": 18
                    },
                    {
                        "name": "Helga",
                        "age": 29
                    }
                ]
            }
		}
	},
	"group_2": {  // group_2
        "name": "Y",
        "user_list1": [
            {
                "name": "Matt",
                "age": 40
            }
        ],
        "user_list2": [
            {
                "name": "Sasha",
                "age": 23
            }
        ]
    }
} 
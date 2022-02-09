const people2 = {
    "group_1": {
        "name": "A",
		"group_1_a": {
            "name": "B",
			"group_alpha": {  // group_1.group_1_a.group_alpha - 2
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

function findGroup(people, nameList) {
    var resultList = {};
	for (const [key, value] of Object.entries(people)) {
        if (value instanceof Object) {
            nameList.push(key);
            const userListKeys = Object.keys(value).filter(element => element.startsWith("user_list"));
            if (userListKeys.length != 0) {
                var usersAmount = 0;
                for (const userListKey of userListKeys) {
                    usersAmount += value[userListKey].length;
                }
                resultList[nameList.join('.')] = usersAmount;
            } else {
                var groupList = findGroup(value, nameList.slice());
                resultList = Object.assign(resultList, groupList);
            }
            nameList.pop();
        }
	}
    return resultList;
}

console.log(findGroup(people2, []));

// задание: 
// group_1: 4
// group_1.group_1_a: 3
// group_1.group_1_a.group_alpha: 2
// group_1.group_1_a.group_betta: 1
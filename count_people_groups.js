const people3 = {
    "group_1": {
        "name": "A",
		"group_1_a": {
            "name": "B",
			"group_alpha": {  // group_1.group_1_a.group_alpha: 2
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
        },
        "group_1_c": {
            "name": "111",
            "user_list": []
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
    },
    "group_3": {
        "name": "jjjj"  // проверить наличие user_list. Если его нет вернуть 0.
    }
}

function countPeopleOfGroup(people, nameList) {
    var resultList = {};
    var counter = 0;
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
                counter += usersAmount;
            } else {
                var groupList = countPeopleOfGroup(value, nameList.slice());
                resultList = Object.assign(resultList, groupList[0]);
                counter += groupList[1];
                resultList[nameList.join('.')] = counter;
            }
            nameList.pop();
            if (nameList.length == 0)
                counter = 0;
        }
	}
    return [resultList, counter];
}

// function countPeopleOfSubGroup(resultPeopleList) {
//     groupsUnique = new Set();
//     for (const key of Object.keys(resultPeopleList)) {
//         groups = key.split(".");
//         groups.forEach(item => groupsUnique.add(item));
//     }
//     console.log(groupsUnique);
// }

console.log(countPeopleOfGroup(people3, []));
// countPeopleOfSubGroup(resultPeopleList);

// задание: 
// group_1: 4
// group_1.group_1_a: 3
// group_1.group_1_a.group_alpha: 2
// group_1.group_1_a.group_betta: 1
// group_1.group_1_b: 1
// group_1_b: 3
// group_1_b.group_alpha: 3
// group_1_b.group_alpha.group_a: 3
// group_2: 2
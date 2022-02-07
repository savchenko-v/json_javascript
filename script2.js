const people1 = {
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

function findPeople(people) {
	var counter = 0;
    for (const [key, value] of Object.entries(people)) {
        if (key.startsWith("user_list")) {
            counter += value.length;
        } else if (value instanceof Object) {
			counter += findPeople(value);
        }
    }
	return counter;
}

function findGroup(people, nameList) {
    var resultList = [];
	for (const [key, value] of Object.entries(people)) {
        if (value instanceof Object) {
            nameList.push(key);
            const valuesKeysFilter = Object.keys(value).filter(element => element.startsWith("user_list"));
            if (valuesKeysFilter.length != 0) {
                resultList.push(nameList.join('.'));
            } else {
                var groupList = findGroup(value, nameList.slice());
                resultList = resultList.concat(groupList);
            }
            nameList.pop();
		}
	}
    return resultList;
}

console.log(findPeople(people1));
console.log(findGroup(people1, []));

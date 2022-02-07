const people = {
    "group_1": {
		"group_1_a": {
			"group_alpha": [
				{
					"name": "Ann",
					"age": 19
				},
				{
					"name": "Fred",
					"age": 30
				}
			],
			"group_betta": [
				{
					"name": "Tom",
					"age": 20
				}
			]
		},
		"group_1_b": [
			{
				"name": "Jim",
				"age": 35
			}
		]
	},
	"group_1_b": {
		"group_alpha": {
			"group_a": [
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
	},
	"group_2": [
		{
			"name": "Matt",
			"age": 40
		}
	]
}

// console.log(people.group_1.group_1_a.group_alpha);
// a = people['group_1']['group_1_a'];
// console.log(a);


function findPeople(people) {
	var counter = 0;
    for (const [key, value] of Object.entries(people)) {
        if (key == "name") {
            counter += 1;
        } else {
			// counter = counter + findPeople(value);
			counter += findPeople(value);
        }
    }
	return counter;
}

function findGroup(people) {
	var counter = 0;
	for (const value of Object.values(people)) {
		if (value instanceof Array) {
			counter += 1;
		} else {
			counter += findGroup(value);
		}
	}
	return counter;
}

console.log(findPeople(people));
console.log(findGroup(people));
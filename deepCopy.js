//递归实现
function deepCopy(obj ,result) {
	var result = result || {};
	for(var pro in obj) {
		if(typeof obj[pro] == 'object') {
			result[pro] = (obj[pro].constructor===Array)?[]:{};
			deepCopy(obj[pro],result[pro]);
		}else {
			result[pro] = obj[pro];
		}
	}
	return result;
}

function create() {
	return {
			'arr' : [1,1,2,3],
			'name' : 'hhh',
			'sex' : 'man',
			'score' : {
				'math' : 33,
				'chinese' : 44
		}
	}
};

var father = create();

var person = deepCopy(father,person);



// Polyfill Object.keys for older browsers
Object.keys = Object.keys || (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !{toString:null}.propertyIsEnumerable("toString"),
        DontEnums = [ 
            'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty',
            'isPrototypeOf', 'propertyIsEnumerable', 'constructor'
        ],
        DontEnumsLength = DontEnums.length;

    return function (o) {
        if (typeof o != "object" && typeof o != "function" || o === null)
            throw new TypeError("Object.keys called on a non-object");

        var result = [];
        for (var name in o) {
            if (hasOwnProperty.call(o, name))
                result.push(name);
        }

        if (hasDontEnumBug) {
            for (var i = 0; i < DontEnumsLength; i++) {
                if (hasOwnProperty.call(o, DontEnums[i]))
                    result.push(DontEnums[i]);
            }   
        }

        return result;
    };
})();

// Populate the Categories Dropdown based on the Categories we have
var getCategories = function() {
	var categoryObjs = [];
	for (var i = 0; i < gradebook.categories.length; i++) {
		var category = Object.keys(gradebook.categories[i]);
		categoryObjs.push(gradebook.categories[i][category]);
	}
	return categoryObjs;
};

var dynamicColumnTitles = ["Name", "ID", "Grade"];
var gradesArray;
var colTitles;

// Defines our partial templates
var def = {
	studentInfo: document.getElementById('students-tmpl').text,
	assignments: document.getElementById('assignments-tmpl').text,
	categories: document.getElementById('categories-tmpl').text
};

// renders our doT.js templates
// var pagefn = doT.template(document.getElementById('row-tmpl').text, undefined, def);
var headers = doT.template(document.getElementById('header-tmpl').text, undefined);
var newStudents = doT.template(document.getElementById('row-tmpl').text, undefined, def);
var categoryDropdown = doT.template(document.getElementById('category-dropdown-tmpl').text, undefined);

// Start the logic to create the table header
gradesArray = [];

for (var i = 0; i < gradebook.categories.length; i++) {

	// out categories
	var categoryArray = Object.keys(gradebook.categories[i])[0];
	// console.log(gradebook.categories[i][categoryArray].grades.length);


	for (var j = 0; j < gradebook.categories[i][categoryArray].grades.length; j++) {
		
		gradesArray.push(gradebook.categories[i][categoryArray].grades[j]);

		if(j === gradebook.categories[i][categoryArray].grades.length - 1) {
			gradesArray[gradesArray.length] = categoryArray;
		}

	}
}

colTitles = { "headers" : dynamicColumnTitles.concat(gradesArray) };

// add compiled markup to the dom
// document.getElementById('gradebook-data').innerHTML = pagefn(students);
document.getElementById('col-header').innerHTML = headers(colTitles);
document.getElementById('gradebook-data').innerHTML = newStudents(gradebook);
document.getElementById('category-dropdown').innerHTML = categoryDropdown(gradebook);

// Can also use jQuery to add to the DOM
// $('#gradebook-data').html(pagefn(students));

// basic toggling to show and hide the legend content
$('#legend').on('click', '.faux-link', function() {
	$('#legend-content').toggleClass('hidden');
});


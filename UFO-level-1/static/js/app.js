// from data.js
var tableData = data;

//Get a reference to the table body
var tbody = d3.select("tbody");

//Console.log the weather data from data.js
console.log(tableData)

//Loop through data and console.log each ufo report object
// tableData.forEach(function(ufoReport) {
// 	console.log(ufoReport);
// });

//Use d3 to append one table row 'tr' for each ufo report object
// tableData.forEach(function(ufoReport) {
// 	console.log(ufoReport);
// 	var row = tbody.append("tr");
// });

//Use Object.entries to console.log each ufo report value
// tableData.forEach(function(ufoReport) {
// 	console.log(ufoReport);
// 	var row = tbody.append("tr");

// 	Object.entries(ufoReport).forEach(function([key, value]) {
// 	 console.log(key, value);
// 	});
// });

//Use d3 to append 1 cell per ufo report value
// tableData.forEach(function(ufoReport) {
// 	console.log(ufoReport);
// 	var row = tbody.append("tr");
// 	Object.entries(ufoReport).forEach(function([key, value]) {
// 	 console.log(key, value);
// 	 var cell = row.append("td");
// 	});
// });

//Use d3 to update each cell's text with ufo report values

tableData.forEach(function(ufoReport) {
	console.log(ufoReport);
	var row = tbody.append("tr");
	Object.entries(ufoReport).forEach(function([key,value]) {
		console.log(key,value);
		var cell = row.append("td");
		cell.text(value);
	});
});

// YOUR CODE HERE!

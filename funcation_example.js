function getAverage (assignment1,assignment2,assignment3){
    const total = assignment1+assignment2+assignment3;
    var average = total / 3;
    return average;
}

var assignment1Marks= 60;
var assignment2Marks=58;
var assignment3Marks= 45;

var result = getAverage(assignment1Marks,assignment2Marks,assignment3Marks)

console.log(result);
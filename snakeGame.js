console.log("Hello from the web page");

console.log("This is the first instruction of our game program!");

var firstName = "Matt";
console.log("Hello, " + firstName + " , Welcome to the snake game");

var gameRow = [0, 0, 0, 0, 0, 1, 0, 0, 0];
for (var index = 0; index < gameRow.length; index++) {
  if (gameRow[index] == 0) {
    console.log("No fruit at position " + index);
  } else {
    console.log("Fruit found at position " + index + "!");
  }
}

function CheckRowForFruit(rowData) {
  for (var index = 0; index < rowData.length; index++) {
    if (rowData[index] == 0) {
      console.log("No fruit at position " + index);
    } else {
      console.log("Fruit found at position " + index + "!!!");
    }
  }
}

var row1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var row2 = [0, 0, 0, 0, 0, 0, 0, 1, 0];
var row3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log("Checking row 1 for fruit");
CheckRowForFruit(row1);
console.log("Checking row 2 for fruit");
CheckRowForFruit(row2);
console.log("Checking row 3 for fruit");
CheckRowForFruit(row3);


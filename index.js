const string = (text) => text;

//Create a function that takes a number as a parameter and returns "Bingo" if the number is greater than 5. 
const bingo = (num) => {
    let result = "";
    num > 5 ? result = "Bingo" : result = "Better luck next time";
    return result;
}

string("Shristi");
console.log(string("Shristi"));

bingo(9);
bingo(2);
console.log(bingo(9));
console.log(bingo(2));
//Math.floor(Math.random() * 10) + 1;
//(rounds down),    ^         ^    ^
//generates decimal ^         ^    ^
//                 sets range ^    ^
//                  adjusts bounds ^

var charLimit;
var lowAlph = "abcdefghijklmnopqrstuvwxyz"; //26
var upAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
var specialChar = "!#$%&()*+,-./:;<=>?@^_~"; //23
var numberList = "0123456789"; // 10
var selectList = [lowAlph, upAlph, specialChar, numberList];

var alNum = 26;
var scNum = 23;
var nLNUM = 10;

charLimit = prompt("How many characters would you like your password to contain? (beteen 8 and 128)", "15");

while (charLimit < 8 || charLimit > 28) {
    charLimit = prompt("Sorry that input was invalid, please enter a number between 8 and 28");
}

var yesUp = confirm("Do you want to include Uppercase Letters?");
var yesSpecial = confirm("Do you want to include Special Characters?");
var yesNumbers = confirm("Do you want to include Numbers?");

var genPass = new Array(charLimit);

for (var i = 0; i < charLimit; i++) {
    var curChar = false;
    while (curChar === false) {
        var typeSel = Math.floor(Math.random() * 4);
        if (typeSel == 0){
            // lowercase letters
            var tmpChar = Math.floor(Math.random() * alNum);
            genPass[i] = lowAlph[tmpChar];
            curChar = true;
        } else if (typeSel == 1){
            // uppercase letters
            var tmpChar = Math.floor(Math.random() * alNum);
            genPass[i] = upAlph[tmpChar];
            curChar = true;
        } else if (typeSel == 2){
            // special characters
            var tmpChar = Math.floor(Math.random() * scNum);
            genPass[i] = specialChar[tmpChar];
            curChar = true;
        } else if (typeSel == 3){
            // numbers
            var tmpChar = Math.floor(Math.random() * nLNUM);
            genPass[i] = numberList[tmpChar];
        } else {
            // error message defaults to lowercase alphabet
            var tmpChar = Math.floor(Math.random() * alNum);
            genPass[i] = lowAlph[tmpChar];
            console.log("Error at " + i + " and " + typeSel + ", type defaults to lowercase alphabet");
            curChar = true;
        }

    }

}

//output below the for loop.

var output = genPass.join('');

alert("Your password is: " + output);
// function explanation, remove after coding done.
//Math.floor(Math.random() * 10) + 1;
//(rounds down),    ^         ^    ^
//generates decimal ^         ^    ^
//                 sets range ^    ^
//                  adjusts bounds ^

// pseudo-constants/
var lowAlph = "abcdefghijklmnopqrstuvwxyz"; //26
var upAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //26
var specialChar = "!#$%&()*+,-./:;<=>?@^_~"; //23
var numberList = "0123456789"; // 10
var selectList = [lowAlph, upAlph, specialChar, numberList];

var alNum = 26;
var scNum = 23;
var nLNUM = 10;
var lowerBound = 8
var upperBound = 128;

// generation function
function generatePassword() {

    var charLimit;

    charLimit = prompt("How many characters would you like your password to contain? (between 8 and 128)", "15");

    while (charLimit < lowerBound || charLimit > upperBound) {
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
            if (typeSel == 0) {
                // lowercase letters (F@)
                var tmpChar = Math.floor(Math.random() * alNum);
                genPass[i] = lowAlph[tmpChar];
                curChar = true;
            } else if (typeSel == 1) {
                // uppercase letters (F@)
                var tmpChar = Math.floor(Math.random() * alNum);
                genPass[i] = upAlph[tmpChar];
                curChar = true;
            } else if (typeSel == 2) {
                // special characters (F@)
                var tmpChar = Math.floor(Math.random() * scNum);
                genPass[i] = specialChar[tmpChar];
                curChar = true;
            } else if (typeSel == 3) {
                // numbers (F@)
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

    return genPass.join('');

}

//Document attatchment declarations
var passwordContent = document.querySelector("#genPassword");
var passwordButton = document.querySelector("#create-button");
var copyButton = document.querySelector("#copy-button");

passwordButton.addEventListener("click", function (event) {
    event.preventDefault();

    passwordContent.textContent = generatePassword();
    console.log("Generated Password");

});



copyButton.addEventListener("click", function (event) {
    event.preventDefault();

    console.log("Copied Password");

});
specialChar = ["0", "00"];
operationChar = ['.', "DEL", "*", "-", "+", "=","/"];

$(document).ready(function () {
   var opScreen = $("#display p");
    var resScreen = $("#results p");

    $("#numbers .button").click(function () {
        keyVal = $(this).children("p").text(); // Gets the key value
        currentValue = opScreen.text();

        if (currentValue === "0") {
            if (!specialChar.includes(keyVal) && !operationChar.includes(keyVal)) {
                opScreen.text(keyVal);
            }
        } else {
            if (currentValue.length <= 10) {
                if (keyVal === "." && currentValue.includes(".")) {
                    opScreen.text(currentValue);
                } else {
                    opScreen.text(currentValue + keyVal);
                }
            }
        }
    });

    $("#operators .button").click(function () {
        currentValue = opScreen.text();
        keyVal = $(this).children("p").text();

        if (keyVal === "=") {
            resScreen.text(eval(currentValue));
        } else if (keyVal === "DEL") {
            resScreen.text("0");
            opScreen.text("0");
        } else {
            if (currentValue.length <= 9) {
                var lastDigit = currentValue.substring(currentValue.length - 1);
                if (!operationChar.includes(lastDigit)) {
                    opScreen.text(currentValue + keyVal);
                } else {
                    opScreen.text(currentValue);
                }
            }
        }
    });
});

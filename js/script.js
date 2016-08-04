specialChar = ["0", "00"];
operationChar = ['.', "DEL", "*", "-", "+", "="];

$(document).ready(function() {
  opScreen = $("#display p");
  resScreen = $("#results p");
  
  $("#numbers .button").click(function() {
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

  $("#operators .button").click(function() {
    currentValue = opScreen.text();
    keyVal = $(this).children("p").text();

    if (keyVal === "=") {
      resScreen.text(eval(currentValue));
    } else if (keyVal === "DEL") {
      resScreen.text("");
      opScreen.text("0");
    } else {
      if (currentValue.length <= 9) {
        if (currentValue[currentValue.length - 1] !== keyVal) {
          opScreen.text(currentValue + keyVal);
        } else {
          opScreen.text(currentValue);
        }
      }
    }
  });
});

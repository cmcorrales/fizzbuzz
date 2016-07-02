/* Evaluate number from form and alert number, fizz, buzz or fizzBuzz accordingly */
function fizzBuzz(form) {
  var number = form.inputbox.value;
    if (number % 3 == 0 && number % 5 == 0) {
      alert("fizzBuzz" + "\r");
    }
    else if (number % 3 == 0) {
      alert("fizz" + "\r");
    }
    else if (number % 5 == 0) {
      alert("buzz" + "\r");
    }
    else {
      alert(number + "\r");
    }
  };

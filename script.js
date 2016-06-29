function fizzBuzz(){
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.write("fizzBuzz" + "\r");
    }
    else if (i % 3 == 0) {
      document.write("fizz" + "\r");
    }
    else if (i % 5 == 0) {
      document.write("buzz" + "\r");
    }
    else {
      document.write(i + "\r");
    }
  }
};

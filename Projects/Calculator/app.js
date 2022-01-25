const input = document.getElementById("input");
const table = document.querySelector("table");

table.addEventListener("click", function (e) {
  var count = 0;
  var y = e.target.innerText;
  if (y === "X") {
    input.value += "*";
  } else if (e.target.innerText === "C") {
    input.value = "";
  } else if (e.target.innerText === "=") {
    count++;
    try {
      input.value = eval(input.value);
    } catch (error) {
      console.log(error.message);
      input.value = "Invalid Operation";
    }
  } else {
    if (count === 0) {
      input.value += y;
    } else {
      input.value = y;
    }
  }
});

document.addEventListener('keydown', function (e) {
    e.preventDefault();
    screen=input.value;
    if (e.key === 'Enter') {
        try {
            // if expression is not evaluated then catch block will be executed
            screen = eval(screen);
        }
        catch (error) {
            console.log(error.message);
            screen = 'Invalid Operation';
        }
       
    }
})
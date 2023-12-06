const output = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
console.log("buttons", buttons);
console.log("output", output);
let str = "";
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log("entered value", e.target.textContent.trim());
    try {
      switch (e.target.textContent.trim()) {
        case "AC":
          str = "";
          output.value = str;
          break;
        case "=":
          if (str) {
            str = eval(str);
            output.value = str;
            break;
          } else {
            alert("please enter values to calculate");
          }
        case "DEL":
          str = str.substring(0, str.length - 1);
          output.value = str;
          break;
        default:
          str += e.target.textContent.trim();
          output.value = str;
          break;
      }
    } catch (error) {
      alert("please insert correct syntax");
    }
  });
});

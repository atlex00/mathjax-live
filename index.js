var input = document.getElementById("content");
var rendered = document.getElementById("render");
input.addEventListener("input", updateValue);

function updateValue(e) {
  console.log(e.target.value)
  rendered.textContent = e.target.value;
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, "render"]);
}

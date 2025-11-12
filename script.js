const colors = [
  {name: "Dark Blue", code: "#1e3a8a"},
  {name: "Dark Teal", code: "#0d9488"},
  {name: "Dark Red", code: "#b91c1c"},
  {name: "Dark Brown", code: "#78350f"},
  {name: "Dark Green", code: "#14532d"}
];

document.getElementById("colorBtn").addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const selectedColor = colors[randomIndex];

  document.body.style.backgroundColor = selectedColor.code;
  document.getElementById("colorName").textContent = "Current Color: " + selectedColor.name;
});

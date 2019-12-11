function render() {
  document.querySelector("#root").innerHTML = `
    ${Nav()}
    ${Header()}
    ${Main()}
    ${Footer()}
  `;
}

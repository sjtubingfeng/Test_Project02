function addToDom(text) {
  let h3 = document.createElement('h3');
  h3.innerText = text;
  document.body.prepend(h3);
}

addToDom('Hello');

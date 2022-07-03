console.log(document.forms.test.text.value);

const formText = document.forms.test.text;
formText.onchange = (e) => {
  console.log(e.target.value);
};

document.forms.test.onsubmit = (e) => {
  e.preventDefault();
  const tempElem = document.createElement("div");
  tempElem.innerHTML = formText.value;
  document.body.append(tempElem);
};

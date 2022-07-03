const wheelElem = document.getElementById("onwheel");
wheelElem.onwheel = function (e) {
  //   console.log(e);
  wheelElem.innerHTML =
    e.deltaY > 0
      ? parseInt(wheelElem.innerHTML) + 1
      : parseInt(wheelElem.innerHTML) - 1;
  e.target.value = wheelElem.innerHTML;
};

wheelElem.onload = () => {
  console.log("wheel ready");
};

document.getElementById("number-input").onchange = (e) => {
  console.log(e.target.value);
};

const dataElem = document.getElementById("data");
console.log(dataElem.dataset.time);
setTimeout(() => {
  dataElem.dataset["time"] = parseInt(dataElem.dataset["time"]) + 1;
  console.log(dataElem.dataset["time"]);
}, 1000);

const interval = setInterval(() => {
  dataElem.dataset["time"] = parseInt(dataElem.dataset["time"]) + 1;
  console.log(dataElem.dataset["time"]);
  if (parseInt(dataElem.dataset["time"]) > 10) {
    clearInterval(interval);
  }
}, 2000);

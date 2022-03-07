const myBtn = document.querySelector(".btn");
const myArrow = document.querySelector(".arrow");
const myCircle = document.querySelector(".circles-container");
const myPrizas = document.querySelectorAll(".myPrizas");
const myPrizasToArray = Object.values(myPrizas);
let modalIntervalId = null;
const showPrizeModal = (prizeValue) => {
  document.getElementById("modal").style.opacity = "1";
  document.getElementById("prizeValue").innerHTML = ` $${prizeValue}`;
  if(prizeValue===0){
      document.getElementById("modal-title").innerHTML = `<i class="fa-solid fa-face-sad-tear"></i> Sorry`
  }
  else if(prizeValue<50 && prizeValue>0){
      document.getElementById("modal-title").innerHTML = `<i class="fa-solid fa-face-frown"></i>`
  }
  else if(prizeValue>=50 && prizeValue<1000){
      document.getElementById("modal-title").innerHTML = `<i class="fa-solid fa-face-smile"></i>`
  }
  else{
      document.getElementById("modal-title").innerHTML = `<i class="fa-solid fa-face-grin-hearts"></i> Winner`
  }
};
const getPrize = () => {
  let rectY = [];
  myPrizasToArray.map((p) => console.log(p, p.getBoundingClientRect()));
  myPrizasToArray.map((p) => rectY.push(p.getBoundingClientRect().y));
  rectY.sort((a, b) => {
    return a - b;
  });
  const selectedPrize = myPrizasToArray.filter(
    (p) => p.getBoundingClientRect().y === rectY[0]
  );
  const prizeValue = selectedPrize[0].innerHTML;
  modalIntervalId = setInterval(() => {
    showPrizeModal(parseInt(prizeValue));
  }, 600);
};
const closeModal = () => {
  document.getElementById("modal").style.opacity = "0";
  clearInterval(modalIntervalId);
  myBtn.removeAttribute("disabled");
};

const myMove = () => {
  myBtn.setAttribute("disabled", "disabled");
  let rotateDegree = Math.ceil(Math.random() * (2500 - 1500) + 1500);
  let id = null;
  let pos = 0;
  let incrementer = 0.01;
  clearInterval(id);
  id = setInterval(rotation, 1);
  function rotation() {
    incrementer += 0.0035;
    if (pos > rotateDegree) {
      clearInterval(id);
      myArrow.classList.remove("arrowAnim");
      myArrow.style.transform = null;
      getPrize();
    } else {
      pos += 1 / incrementer + 0.3;
      myCircle.style.transform = `rotate(${pos}deg)`;
      myArrow.style.transform = `rotateY(${pos}deg)  `;
      myArrow.classList.add("arrowAnim");
    }
  }
};

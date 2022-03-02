const myBtn = document.querySelector(".btn");
const myArrow = document.querySelector(".arrow");
const myCircle = document.querySelector(".circles-container");
const myText = document.querySelectorAll("p");
const myTextToArray = Object.values(myText);
const getPrize = () => {
  let rectY = [];
  myTextToArray.map((p) => rectY.push(p.getBoundingClientRect().y));
  rectY.sort((a, b) => {
    return a - b;
  });
  const selectedPrize = myTextToArray.filter(
    (p) => p.getBoundingClientRect().y === rectY[0]
  );
  const prizeValue = selectedPrize[0].innerHTML
  console.log(prizeValue);

};

const myMove = () => {
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

const myBtn = document.querySelector(".btn")
const myArrow = document.querySelector(".arrow")
const myCircle = document.querySelector(".circles-container")
const myMove=()=>{
    let rotateDegree = Math.ceil(Math.random()*(2500-1500)+1500)
    let id = null
    let pos = 0;
    let incrementer = .01;
    clearInterval(id)
    id = setInterval(rotation, 1);
    function rotation(){
        incrementer +=.0035
        if(pos>rotateDegree){
            clearInterval(id)
            myArrow.classList.remove("arrowAnim")
            myArrow.style.transform = null
        }
        else{
            pos+=(1/incrementer +.3)
            myCircle.style.transform= `rotate(${pos}deg)`
            myArrow.style.transform = `rotateY(${pos}deg)  `
            myArrow.classList.add("arrowAnim")
        }
    }
}
const myBtn = document.querySelector(".btn")
const myCircle = document.querySelector(".circles-container")
const myMove=()=>{
    let rotateDegree = Math.ceil(Math.random()*(2500-1500)+1500)
    let id = null
    let pos = 0;
    let incrementer = .01;
    clearInterval(id)
    id = setInterval(rotation, 1);
    function rotation(){
        console.log(rotateDegree,pos);
        incrementer +=.0035
        if(pos>rotateDegree){
            clearInterval(id)
        }
        else{
            pos+=(1/incrementer +.3)
            document.querySelector(".circles-container").style.transform= `rotate(${pos}deg)`
        }
    }
}
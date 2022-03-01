const myBtn = document.querySelector(".btn")
const myCircle = document.querySelector(".circles-container")
const myMove=()=>{
    let rotateDegree = Math.ceil(Math.random()*(2000-1000)+1000)
    let id = null
    let pos = 0;
    clearInterval(id)
    id = setInterval(rotation, 1);
    function rotation(){
        console.log(rotateDegree);
        if(pos==rotateDegree){
            clearInterval(id)
        }
        else{
            pos++
            document.querySelector(".circles-container").style.transform= `rotate(${pos}deg)`
        }
    }
}
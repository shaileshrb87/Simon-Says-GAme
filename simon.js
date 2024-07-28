let gameSeq = []
let userSeq=[]

let started = false
let level = 0
let h2 = document.querySelector("h2")
let h1 = document.querySelector("h1")
let h4= document.querySelector("h4")
let btns=["red","yellow","green","blue"]
let HighScore=0

document.addEventListener("keypress",function(){
    
    if (started==false){
        console.log("game started")
        started = true
        levelup()

    }
})

function btnFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function() {
        btn.classList.remove("flash")
    },250)
}

function userFlash(btn) {
        btn.classList.add("userFlash")
        setTimeout(function() {
            btn.classList.remove("userFlash")
        },250)
    }

function levelup() {
    level++
    h2.innerText = `level ${level}`

    
    let randombtn= Math.floor(Math.random() * 4)
    let rancol=btns[randombtn]
    let btnchan = document.querySelector(`.${rancol}`)
    
    btnFlash(btnchan)
    gameSeq.push(rancol)
    console.log(gameSeq)
    // h4.innerText=gameSeq
    userSeq=[]
    
    
}

let allbtn = document.querySelectorAll(".btn")
for (let btn of allbtn){
    btn.addEventListener("click",btnclick)
}

function checkAns(idx){
    
    if (gameSeq[idx]===userSeq[idx]){
       if (userSeq.length == gameSeq.length){
        setTimeout(levelup,1000)
       }

    }
    else{
        HighScore=level
        h2.innerText = `Game Over Press Any key to restart Score is ${level}`
        h1.innerText = `Simon Says Highest Score is ${HighScore}`
        document.querySelector("body").style.backgroundColor="red"
        
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150)
        reset()
    }
}
function btnclick(event) {
    let btn = event.target
    
    userFlash(btn)
    let userCol = btn.getAttribute("id")
    userSeq.push(userCol)
    --
    checkAns(userSeq.length-1)
    
    
}

function reset() {
    started=false
    gameSeq=[]
    userSeq=[]
    level = 0
}


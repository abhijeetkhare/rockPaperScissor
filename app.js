let btns=document.querySelectorAll(".btn");
let user;
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const strings = ["rock", "paper", "scissor"];
const com=document.querySelector(".com");
const win=document.getElementById("win")
let comp=0,use=0;

btns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        console.log(score2);
        if(btn==btns[0])
        user="rock";
        if(btn==btns[1])
           user="paper";
        if(btn==btns[2])
            user="scissor";
        check(user);
        score1.innerHTML = `<h3 id="score2">${use}</h3>`;
        score2.innerHTML=`<h3 id="score2">${comp}</h3>`
        
                        
    })
});
const check=(user)=>{
    let computer = strings[Math.floor(Math.random() * strings.length)];
    com.innerHTML=`
        <img src="https://abhijeetkhare.github.io/rockPaperScissor/img/${computer}.jpg" alt="default" >
         <h3>Choose Something</h3>
         `
    
    if(user=="rock"){
        if(computer=="rock"){
            console.log("Tie")
        }
        if(computer=="paper"){
            console.log("Computer wins")
            comp++;
            win.innerHTML=`<h3 id="Win" style="justify-content: center;display: flex; Color:red ;">COMPUTER WINS</h3>`
        }
        if(computer=="scissor"){
            console.log("User Wins")
            use++;
            win.innerHTML=`<h3 id="Win" style="justify-content: center;display: flex; Color:green ;">YOU WIN</h3>`
        }
    }
    if(user=="paper"){
        if(computer=="rock"){
            console.log("user wins")
            use++;
            win.innerHTML=`<h3 id="Win" style="justify-content: center;display: flex;Color:green ;">YOU WIN</h3>`
        }
        if(computer=="paper"){
            console.log("Tie")
        }
        if(computer=="scissor"){
            console.log("Computer Wins")
            comp++;
             win.innerHTML=`<h3 id="Win" style="justify-content: center;display: flex; Color:red ;">COMPUTER WINS</h3>`
        }
    }
    if(user=="scissor"){
        if(computer=="rock"){
            console.log("Computer Wins")
            comp++;
             win.innerHTML=`<h3 id="Win" style="justify-content: center;display: flex;Color:red ;">COMPUTER WINS</h3>`
        }
        if(computer=="paper"){
            console.log("User wins")
            use++;
             win.innerHTML=`<h3 id="Win" style="justify-content: center;display: flex; Color:green ;">YOU WIN</h3>`
        }
        if(computer=="scissor"){
            console.log("Tie")
        }
    }
};

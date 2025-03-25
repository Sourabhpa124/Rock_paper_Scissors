let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#computerscore");
//for computer choice
const gencompchoice=() => {
const options=["stone", "paper", "scissors"];
const rndmidx=Math.floor(Math.random()*3);//random number generte
return options[rndmidx];
}
const showWinner=(userwin,userchoice,comchoice) => {
if (userwin){
    userscore++;
    userscorepara.innerText=userscore
    msg.innerText = 'You win😎😎😎  Your ${userchoice} beats ${comchoice}'; 
    msg.style.backgroundColor="green";
}
else{
    compscore++;
    compscorepara.innerText=compscore;
    console.log("u losses"); 
    msg.innerText = 'You looses💩💩💩 Computer ${comchoice} beats ${userchoice}';   
    msg.style.backgroundColor="red";
}
}
//draw game
const drawgame=() => {
    console.log("draw game");
    msg.innerText="Game was draw💁💁💁"
    msg.style.backgroundColor="blue";
}
//for user choice
const playgame=(userchoice) =>{
console.log("user choice=",userchoice);

const comchoice=gencompchoice();
console.log("computerchoice=",comchoice);

//draw game
if(comchoice==userchoice) {
     drawgame();}
//winning conditions
     else{
        let userwin=true;
        if(userchoice==="stone"){
            userwin=comchoice==="papers"?false:true;
        }else if(userchoice==="papers"){
            userwin=comchoice==="scissors"?false:true;
        }
        else {
            userwin=comchoice==="scissors"?false:true;
        }
        showWinner(userwin,userchoice,comchoice);
     }
};
choices.forEach(choice => {
    choice.addEventListener("click", () =>{
playgame(choice.id);
    });
});
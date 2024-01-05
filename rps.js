let userchoice=0;
let computerchoice=0;

let choice=document.querySelectorAll(".choice");
let message=document.querySelector("#messege");
let userscore=document.querySelector("#userscore");
let compscore=document.querySelector("#compscore");

function comchoice(){
    let computchoice=["rock","paper","scissors"]
 let option=  Math.floor( Math.random()*3);
return computchoice[option];
}
function draw(){
    // console.log("Game is draw")
    message.innerHTML="Draw"
    message.style.backgroundColor="black"
}

function showwin(userwin){
    if(userwin===true){
        // console.log("you win!")
        message.innerHTML="You Win!!!"
        message.style.backgroundColor="green";
       userscore.innerHTML= ++userchoice;
       
    }
    else{
        // console.log("you lose")
        message.innerHTML="You Lose"
        message.style.backgroundColor="red";
        compscore.innerHTML= ++computerchoice;
      
    }
}
function playgame( userid){
    console.log("this is user", userid)
    //computer choice
    let com=comchoice();
    console.log("this is computer",com)

    //conditions
    if(userid===com){
    draw();
    
    }
    else{
        let userwin= true;
        if(userid==="rock"){
            userwin=com==="scissors"? true:false;

        }
        else if(userid==="paper"){
            userwin= com==="rock"? true:false;

        }
        else{
            userwin= com==="paper"? true:false;

        }
        showwin(userwin);

    }



};


choice.forEach(function(val){
    console.log(val);
    val.addEventListener("click",function(){
        let userid=val.getAttribute("id")
        playgame(userid);
    });
});


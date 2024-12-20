let boxes=document.querySelectorAll(".box");
console.log(boxes);

let resetBtn=document.querySelector(".resetButton");

let turn=true; 

let arr=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==1){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });

});

let checkWinner=()=>{
    arr.forEach((val)=>{
        let val1=boxes[val[0]].innerText;
        let val2=boxes[val[1]].innerText;
        let val3=boxes[val[2]].innerText;
        if(val1!="" && val2!="" && val3!=""){
            if(val1==val2&& val2==val3){
                winnerDeclare(val1);
            }
        }
    })
};
let w=document.querySelector(".winnerPara");
let a=document.querySelector(".announcement");
let winnerDeclare=(val)=>{
    w.innerText=`Congrats!!! the winner is ${val}`;
    a.classList.remove("announcement");
}

let reset=()=>{
    boxes.forEach((val)=>{
        val.innerText="";
        val.disabled=false;
    })
}

let nGame=document.querySelector(".newGame");

nGame.addEventListener("click",()=>{
    reset();
    a.classList.add("announcement");
    
})

let rstGame=document.querySelector(".resetButton");

rstGame.addEventListener("click",()=>{
    reset();
    a.classList.add("announcement");
    
})

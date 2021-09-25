const dateofBirth=document.querySelector("#dob");
const luckyNumber=document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check-button");
const output=document.querySelector("#final-output");

checkButton.addEventListener("click",clickHandler)

function clickHandler() {
    const dob=dateofBirth.value;
    const sum=calculateSum(dob)
    compareValue(sum,luckyNumber)     
}

function calculateSum(dob){
    dob=dob.replaceAll("-","")
    let sum=0;
    for(let i=0; i<dob.length; i++){
         sum=sum + Number(dob.charAt(i));
         ;
    }
    return sum
}

function compareValue(sum,luckyNumber){
    if(sum%luckyNumber.value===0){
        output.innerText="**You are Lucky**";
    } else{
        output.innerText="**We make our own Luck!**";
    }
}
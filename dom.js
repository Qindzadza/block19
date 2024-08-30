// let result=document.querySelector(".update");
// // const one=document.querySelector(".price1").innerHTML;
// // const two=document.querySelector(".price2").innerHTML;
// // const three=document.querySelector(".price3").innerHTML;


// let avg=(Number(one)+Number(two)+Number(three))/3;
// console.log(avg)
// result.innerHTML=avg;

const names=["Alice","Bob","Carol","John","Nick","Melisa"];
const occupation=["Writer", "Teacher","Programmer","Designer","Photographer","Painter"];
const price=[30,50,70,90,110,159];
const array=[30,50,70];

// const randomName = names[Math.floor(Math.random() * names.length)]
const addNewFrelancer=setInterval(movement,3000)


let update=document.getElementById("update");

function average(){
   
   const avarray= array.reduce((avsum,current)=>avsum+current

   )
   return avarray/array.length;
   
}
function changeAverage(){
    const update=document.getElementById("update");
    update.innerHTML=Math.round(average());
}

function newFreelancer(){
    const randomName=names[Math.floor(Math.random()*names.length)];
    const occupationRandom=occupation[Math.floor(Math.random()*occupation.length)];
    const priceRandom=price[Math.floor(Math.random()*price.length)]
    array.push(priceRandom);
    const table=document.getElementById('addRow');
    const row=table.insertRow();
    const first=row.insertCell(0);
    const second=row.insertCell(1);
    const third=row.insertCell(2);
    first.innerHTML=randomName;
    second.innerHTML=occupationRandom;
    third.innerHTML="$"+priceRandom ;
    
}
console.log(average())

function movement(){
    newFreelancer();
    changeAverage();
}





var AgeNum,weight,heights;
console.log("suraj")
 

function calulate(){
    AgeNum=document.getElementById("Age").value;
 weight=document.getElementById("weight").value;
 heights=document.getElementById("height").value/100;


   var w=parseInt(weight);
  var  h=parseFloat(heights);
    var BMI= w/h**2;
    var result=`${BMI}`;
    document.getElementById("result").innerHTML=`Your BMI = ${result}`;
radiomale=document.getElementById("male");
radiofemale=document.getElementById("female");


   var r= document.getElementById("range");
   if(radiomale.checked){
    if((result>0) && (result<18)){
      r.innerHTML=" You Are UNDERWIGHT";
     }
     else if((result>18) && (result<24) ){
      r.innerHTML="You Are Normal"
     }
     else if (result>25){
      r.innerHTML="You Are Overweight"
     }
   }


   if(radiofemale.checked){
    if((result>0) && (result<12)){
      r.innerHTML=" You Are UNDERWIGHT";
     }
     else if((result>12) && (result<18) ){
      r.innerHTML="You Are Normal"
     }
     else if (result>18){
      r.innerHTML="You Are Overweight"
     }
   }
  
}

//--------------------------CALCULATOR--------------------------
var price = document.getElementById("price");
var time = document.getElementById("time");
var priceValue = document.getElementById("priceValue");
var timeValue = document.getElementById("timeValue");
var priceResult = document.getElementById("priceResult");
var eachMonth = document.getElementById("eachMonth");
var yearPercent = document.getElementById("yearPercent");
var monthCount=time.value;
var mySelect = document.getElementById("mySelect");
var myP = document.getElementById("myP");
var optionValue = mySelect.options[mySelect.selectedIndex].value;

function priceFunc(){
        if(optionValue == "month"){
    myP.innerHTML = "Hər ay ödənilən faiz";
    if(monthCount == 12){
    priceResult.innerHTML = price.value*0.11 + ".00";
    eachMonth.innerHTML = ((price.value*0.11)/12).toFixed(2);
    }else if(monthCount == 24){
    priceResult.innerHTML = (price.value*0.12)*2 + ".00";
    eachMonth.innerHTML = (price.value*0.12)/12;
    }else{
    priceResult.innerHTML = (price.value*0.12)*3 + ".00";
    eachMonth.innerHTML = (price.value*0.12)/12 ;
    }
    }   else{
    myP.innerHTML = "Hər il ödənilən faiz";
    if(monthCount == 12){
    priceResult.innerHTML = price.value*0.12 + ".00";
    eachMonth.innerHTML =  price.value*0.12 ;
    }else if(monthCount == 24){
    priceResult.innerHTML = (price.value*0.13)*2 + ".00";
    eachMonth.innerHTML = price.value*0.13 ;
    }else{
    priceResult.innerHTML = (price.value*0.13)*3 + ".00";
    eachMonth.innerHTML = price.value*0.13 ;
    }
    }
    priceValue.innerHTML = price.value;
};

function timeFunc(){
        timeValue.innerHTML = time.value;
    if(optionValue == "month"){
    if(time.value == 24 || time.value == 36){
        yearPercent.innerHTML = "12";
    }else{
        yearPercent.innerHTML = "11";
    }
    }else{
        if(time.value == 24 || time.value == 36){
        yearPercent.innerHTML = "13";
    }else{
        yearPercent.innerHTML = "12";
    }
    }
        monthCount=time.value;
};
mySelect.addEventListener("change",function(){
    optionValue = mySelect.options[mySelect.selectedIndex].value;
},false);

price.addEventListener("input",priceFunc,false);
time.addEventListener("input",timeFunc,false);
time.addEventListener("input",priceFunc,false);
mySelect.addEventListener("change",priceFunc,false);
mySelect.addEventListener("change",timeFunc,false);
//------------------------FIXED MENU------------------------
var fixed = document.getElementById("fixedMenu");

document.addEventListener("scroll",function(){
    topValue = document.querySelector(".depozit_content").offsetTop;
    if(document.body.scrollTop > topValue){
     fixed.style.position = "fixed";
     fixed.style.top = 0 + "px";
    }else if(document.body.scrollTop < topValue){
        fixed.style.position = "";
        fixed.style.top = "";
    }
});
//-----------------------------MENU HOVER------------------------
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var link4 = document.getElementById("link4");
function resetBg(){
    link1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    link2.style.backgroundColor = "rgba(255, 255, 255, 0)";
    link3.style.backgroundColor = "rgba(255, 255, 255, 0)";
    link4.style.backgroundColor = "rgba(255, 255, 255, 0)";
}
document.addEventListener("scroll",function(){
     if(document.body.scrollTop > 650 && document.body.scrollTop < 1000){
        resetBg();
        link1.style.backgroundColor = "rgba(255, 255, 255, .15)";
     }else if(document.body.scrollTop >= 1000 && document.body.scrollTop < 1326){
        resetBg();
        link2.style.backgroundColor = "rgba(255, 255, 255, .15)";
     }else if(document.body.scrollTop >= 1326 && document.body.scrollTop < 1826){
        resetBg();
        link3.style.backgroundColor = "rgba(255, 255, 255, .15)";
     }else if(document.body.scrollTop >= 1826){
        resetBg();
        link4.style.backgroundColor = "rgba(255, 255, 255, .15)";
     }else{
        resetBg();
     }
});
//-------------------GO UP BUTTON-------------------
var upLink = document.getElementById("upLink");

document.addEventListener("scroll",function(){
   if(document.body.scrollTop < 335){
       upLink.style.display = "none";
   }else
       upLink.style.display = "block";
});



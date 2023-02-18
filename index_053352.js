
const wrapperEl = document.querySelectorAll('.wrapper');
const prevEl = document.querySelector(".btn-prev");
const nextEl = document.querySelector(".btn-next");
const wrapperListEl = [wrapperEl];


var effect = new Audio("effect.mp3"); 

  
var divs = document.querySelectorAll(".wrapper").length;
const x = Math.floor(divs);

addIdToWrapper();

function addIdToWrapper(){  
  for (let i = 0; x ; i++ ){
    if (i < x) {
      wrapperEl[i].setAttribute("id", i+1);

    } else{
      break;  
    };
  };
};

var element = document.getElementById(1);
        element.classList.add("up"); 





const popupContainerEl =document.querySelector(".popup-container");
const popupBtnEL =document.querySelector(".popup-btn");
const slideContainerEL =document.querySelector(".slide-container");
const infoBtnEl = document.querySelector(".info-btn");
const tipsBtnEL = document.querySelector(".tips-btn");
const aboutUsContainerEl = document.querySelector(".aboutUs-container");
const tipsContainerEl = document.querySelector(".tips-container");
const closeAboutUSEl = document.querySelector(".close-aboutUS");
const closeTipsEl = document.querySelector(".close-tips");


popupBtnEL.addEventListener("click", ()=>{
          //popupContainerEl.remove(); //remove div forever
          popupContainerEl.classList.add("active"); // hide div with effect
          slideContainerEL.classList.remove("active");
          
});

infoBtnEl.addEventListener("click", ()=>{
             aboutUsContainerEl.classList.remove("active");
} );

tipsBtnEL.addEventListener("click", ()=>{
          tipsContainerEl.classList.remove("active");
} );


closeAboutUSEl.addEventListener("click", ()=>{
          aboutUsContainerEl.classList.add("active");
});

closeTipsEl.addEventListener("click", ()=>{
          tipsContainerEl.classList.add("active");
});
        





var y = 1;
  
  
nextEl.addEventListener("click", nextItem);
prevEl.addEventListener("click",prevItem);

 
function prevItem(){
  
  
  console.log("first y after change:",y );
  var element = document.getElementById(y);
  
  if(y > 1){
    effect.play();
    effect.playbackRate=1.7;  
    effect.volume= 0.3;
    element.classList.remove("up"); 
    y = y -1;
    var element = document.getElementById(y);
        element.classList.add("up"); 
  
  console.log("this is the first y:",y );
  }else{
     y =  1 ;
     
  };
};

function nextItem(){
  
  console.log( "second y after change:",y);
      var element = document.getElementById(y);
      if (  y < x){
        effect.play(); 
        effect.playbackRate=1.7;
        effect.volume= 0.3;
        element.classList.remove("up"); 

        y = y +1;

      var element = document.getElementById(y);
    element.classList.add("up"); 
    console.log("this is the second y:",y);
  }else{
    y = x;
  };

};



































//var slideIndex = 1 ;
//showDivs(slideIndex);

//function plusDivs(n){
   // showDivs(slideIndex += n);
//}

//function showDivs(n){
  //  var i = 1;
    //var x = document.getElementsByClassName("mySliders");
    //if (n > x.length) {slideIndex = 1 }
    //if (n<1) {slideIndex = x.length}
    //for (i=0; i < x.length; i++){
    //    x[i].getElementsByClassName.display ="none"
    //}
    //x[slideIndex-1].getElementsByClassName.display = "block";
//}
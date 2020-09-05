leftEvent = ()=>{

  if(leftKey.classList.contains('active')){
    let transformValue = 'translate3d('+(-1*(currSlide+1)*100)+'vw,0,0)'
    slide.style.transform = transformValue;
    currSlide += 1;
    viewChange();
  }
}

rightEvent = ()=>{
  if(rightKey.classList.contains('active')){
    let transformValue = 'translate3d('+(-1*(currSlide-1)*100)+'vw,0,0)'
    slide.style.transform = transformValue;
    currSlide -= 1;
    viewChange();
  }
}

function arrowKeyEvent(event){
  key = event.key;
  if(key=='ArrowLeft')
    leftEvent();
  else if(key=='ArrowRight')
    rightEvent();
}



leftKey.addEventListener('click',leftEvent);
rightKey.addEventListener('click',rightEvent);
document.addEventListener('keyup',arrowKeyEvent);





function viewChange(){
  activeControls();
}


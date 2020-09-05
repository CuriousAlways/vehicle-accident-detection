/*slides*/
let slide = document.getElementById('wrapper');
let slideCount = slide.children.length;
let currSlide = 0

/*control*/
let leftKey = document.getElementById('control-left');
let rightKey = document.getElementById('control-right');
let topKey = document.getElementById('control-top');
let bottomKey = document.getElementById('control-bottom');

function activeControls(){
  //left key
  if(currSlide < slideCount-1){
    leftKey.style.borderRightColor = 'rgba(200, 100, 255, 0.8)';
    leftKey.classList.add('active');
  }else{
    leftKey.style.borderRightColor = 'rgba(200, 100, 255, 0.3)';
    leftKey.classList.remove('active');
  }

  //right key
  if(currSlide > 0){
    rightKey.style.borderLeftColor = 'rgba(200, 100, 255, 0.8)';
    rightKey.classList.add('active');
  }else{
    rightKey.style.borderLeftColor = 'rgba(200, 100, 255, 0.3)';
    rightKey.classList.remove('active');
  }

  innerSlide = slide.children[currSlide].querySelector('.innerSlide');
  innerSlideCount = innerSlide==null?0:innerSlide.children.length;
  
  currInnerSlide = 0;

  //top key
  if(currInnerSlide>0){
    topKey.style.borderBottomColor = 'rgba(200, 100, 255, 0.8)';
    topKey.classList.add('active');
  }else{
    topKey.style.borderBottomColor = 'rgba(200, 100, 255, 0.3)';
    topKey.classList.remove('active');
  }

  //bottom key
  if(currInnerSlide<innerSlideCount-1){
    bottomKey.style.borderTopColor = 'rgba(200, 100, 255, 0.8)';
    bottomKey.classList.add('active');
  }else{
    bottomKey.style.borderTopColor = 'rgba(200, 100, 255, 0.3)';
    bottomKey.classList.remove('active');
  }
   
}

activeControls()
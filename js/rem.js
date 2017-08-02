
// 初始化数据
var oHtml = document.documentElement;//获取html元素
var screenWidth = oHtml.offsetWidth;//获取屏幕的宽度
var UIWidth = 750;
var fonts = 40;
var ratio = UIWidth/fonts;
getSize();
window.addEventListener('resize', getSize);
function getSize(){
  screenWidth = oHtml.offsetWidth;
  if(screenWidth <= 320 ){
    oHtml.style.fontSize = 320/ratio + "px";
  }else if(screenWidth >= UIWidth){
    oHtml.style.fontSize = UIWidth/ratio + "px"; 
  }else{
    oHtml.style.fontSize = screenWidth/ratio + "px";
  }
}

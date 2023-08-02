var ImgBox = document.querySelector(".img-box");
var ImgWrap = document.querySelector(".img-wrap");
var OriginalImg = document.getElementById("originalImg")
var line = document.getElementById('line');

OriginalImg.style.width = ImgBox.offsetwidth + "px";

var leftSpace = ImgBox.offsetLeft

ImgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
} 
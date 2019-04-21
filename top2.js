$("#button").css("{top":$("#input").offset().top-$("#span2").offset().top+$("#input").height,position:"absolute"});Calendar.prototype.getAbsPoint = function (e){
  var x = e.offsetLeft;
  var y = e.offsetTop;
  while(e = e.offsetParent){
    x += e.offsetLeft;
    y += e.offsetTop;
  }
  return {"x": x, "y": y};
}

 var xy = this.getAbsPoint(popControl);
   this.panel.style.left = xy.x  + "px";
  this.panel.style.top = (xy.y + dateObj.offsetHeight) + "px"; 
 


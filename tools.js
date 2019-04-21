
//尝试创建一个可以执行简单动画的函数 
 /*
 obj= 要执行动画的对象
 attr: 要执行动画的样式,比如：left top width height
 target:执行动画的目标位置
 speed:移动速度(正数向右移动,负数向左移动)
 callback:回调函数，这个函数将会在动画执行完毕以后执行
 */
function move (obj,attr,target,speed,callback){
    //关闭上一个定时器
    clearInterval(obj.timer);
//获取元素目前的位置 
var current = parseInt (getStyle(obj,attr));

//判断速度的正负值
//如果从0 向800移动，则speed是正 
//如果从800向0移动，则speed是负
if(current>target){
    //此时速度为负值
    speed = -speed;
}

       //开启一个定时器，用来执行动画效果 
      //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
      obj.timer=  setInterval(function(){
       //获取box1原来的left值 
          var oldValue = parseInt (getStyle(obj,attr));
          //在旧值的基础上增加

          var newValue = oldValue + speed;
          //判断newValue是否大于等于800
          //从800向0移动
          //当向左移动时，需要判断newValue是否小于target
          //向右移动时，需要判断newValue 是否大于target
if((speed< 0 && newValue<target)|| (speed > 0 && newValue > target)){
              newValue = target;
          }
          
          //将新值设置给box1 
          obj.style[attr] = newValue +"px";
           //当元素移动到800像素时，使其停止动画 
           if(newValue == target){
               //到达目标，关闭定时器 
               clearInterval(obj.timer);
               //动画执行完毕，调用回调函数
               callback&&callback();
           }
      },30);
}
function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else{
        return obj.currentStyle[name];
    }
}
//定义一个函数，用来向一个元素中添加指定的class属性值
/*
参数：
obj 要添加class属性的元素
cn 要添加的class值
*/
function addClass(obj,cn){
    //检查obj中是否含有cn
    if(!hasClass(obj,cn)){
        obj.className+=" "+cn;
    }
   
}
/*
 判断一个元素中是否含有指定的class属性值
如果有该class，则返回true，没有则返回false


 参数：
*/
function hasClass(obj,cn){
// 判断obj中有没有cn class
//创建一个正则表达式
// var reg = /\bb2\b/;
var reg =new RegExp("\\b"+cn+"\\b");
 
return reg.test(obj.className);


}
/*
删除一个元素中的指定的calss属性
*/
function removeClass(obj,cn){
// 创建一个正则表达式
var reg = new RegExp("\\b"+cn+"\\b")
// 删除class
obj.className = obj.className.replace(reg," ");


}
/*
我最喜欢的方式
toggleClass可以用来切换一个类
如果元素中具有该类，则删除
如果元素中没有该类，则添加
*/
function toggleClass(obj,cn){
// 判断obj中是否含有cn
if(hasClass(obj,cn)){
    // 有，则删除
    removeClass(obj,cn);
}else{
    // 没有，则添加
    addClass(obj,cn);
}
}



// 导航条
var navTop= document.querySelector('#nav');
var nav = document.querySelector('.navbar-default');
var toSection = document.querySelectorAll('.navbar-nav li');
// console.log(toSection);

// 窗口监听事件
window.onscroll = function(){
  // 导航条置顶事件
  var _navTop = navTop.offsetTop - window.scrollY; 
  if(_navTop<0){
    nav.style.position = "fixed";
    nav.style.width = "100%";
    nav.style.top = 0;
  }else{
    nav.style.position = "";
  }

// 窗口滚动到我的技能页开始绘制canvas
  var skillsTop = skills.offsetTop - window.scrollY;
    if(skillsTop<=50 && state){
      for(var i=0;i<arr.length;i++){
        drawScore(arr[i],cvs[i],num[i]);
      }
      return state = false;
    }
}
//  锚点定位+平滑过渡
$(function(){
    $(".goto").on('click',function(){
    	for(var i=0;i<toSection.length;i++){
    		console.log(toSection[i]);
    		toSection[i].className = "";
    	}
    	$(this).parent().addClass('active');
    $('html,body').animate({
      scrollTop:$($.attr(this,'href')).offset().top},500);
      return false;
  })
})

// 画圆圈圈
  var cvs = document.querySelectorAll(".canvas canvas");
  var num = document.querySelectorAll(".canvas h2");
  var arr = [80,80,85,70,85,90,90];
  var state = true;
  var skills = document.querySelector("#myskills");

// canvas绘画函数
    function drawScore(nums,cvs,h){
      var ctx = cvs.getContext("2d");
      var _num = nums / 100 * 360;
      var index = 0;
      // 圈圈内聚
      ctx.lineWidth = 12;
      ctx.strokeStyle = "red";
      var sid = setInterval(function(){
        if(_num <= index){
          clearInterval(sid);
        }else{
          // 圈圈平滑度
          ctx.clearRect(0,0,210,210);
          ctx.beginPath();
          ctx.arc(106,106,70,Math.PI / 180 * -91,Math.PI / 180 * (index - 90),false);
          ctx.stroke();
          index+=3;
          h.textContent = ~~(index / 360*100)+'%';
        }
      },1000/60);
    }






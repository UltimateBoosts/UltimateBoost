(function() {
  var t = 0;
  var xInner;
  var yInner;
  var x;
  var y;
  var xOuter;
  var yOuter;
  var circles = [];
  var numberOfCircles = 12;
  for(var i = 1; i <= numberOfCircles; ++i){
    circles.push(Math.PI * 2 * i / numberOfCircles);
  }
  var currentircle;
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  function draw (){
    ctx.clearRect(0, 0, 500, 500);
    for(currentCircle = 0; currentCircle < circles.length; ++currentCircle) {
      xInner = Math.cos(Math.PI-t-circles[currentCircle]) * 50 + 200;
      yInner = Math.sin(Math.PI-t-circles[currentCircle]) * 50 + 200;
      x = Math.cos(t+circles[currentCircle]) * 100 + 200;
      y = Math.sin(t+circles[currentCircle]) * 100 + 200;
      xOuter = Math.cos(Math.PI-t-circles[currentCircle]) * 150 + 200;
      yOuter = Math.sin(Math.PI-t-circles[currentCircle]) * 150 + 200;
      ctx.beginPath();
      ctx.strokeStyle = "#FF241B";
      ctx.arc(xInner, yInner, 10, 0, Math.PI * 2);
      //ctx.stroke();
      //ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      //ctx.stroke();
      //ctx.beginPath();
      ctx.arc(xOuter, yOuter, 10, 0, Math.PI * 2);
      ctx.stroke();      
    }
    if(t >= Math.PI * 2) {
      t = 0;
    }
    t += 0.005;
    window.requestAnimationFrame(draw);
  }
  
  window.requestAnimationFrame(draw);
})();
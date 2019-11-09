// 1.随机封装整数
var fandom = function(n, m) {
  return Math.floor(Math.random() * (m + n - 1) + n);
};

// 2.封装随机颜色
function randomInt(n, m) {
  return Math.floor(Math.random() * (M - n + 1) + n);
}
function randomColor() {
  // 生成3个随机整数
  var r = randomInt(0, 255);
  var g = randomInt(0, 255);
  var b = randomInt(0, 255);
  // 把三个随机整数拼接到rgb格式里面
  var color = "rgb(" + r + "," + g + "," + b + ")";
  return color;
}
// 3.生成随机16进制颜色
function randomHexColor1(){
  var color =['#'];
  for(var i=0;i<6;i++){
    var r=Math.floor(Math.random()*16).toString(16);
    color.push(r)
  }
  return color.join('')
}
console.log( randomHexColor1());


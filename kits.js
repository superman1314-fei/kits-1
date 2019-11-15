var kits = {};
// 随机 0-n的整数
  kits.randomInt = function(n){
    return Math.floor(Math.random() * (n+1));
  }
// 随机 n~m 的整数
kits.randomIntN = function(n,m){
  return Math.floor(Math.random() * (m - n + 1) + n);
}

// 随机封装整数
var fandom = function(n, m) {
  return Math.floor(Math.random() * (m + n - 1) + n);
};

// 封装随机颜色
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
// 生成随机16进制颜色
function randomHexColor1(){
  var color =['#'];
  for(var i=0;i<6;i++){
    var r=Math.floor(Math.random()*16).toString(16);
    color.push(r)
  }
  return color.join('')
}
console.log( randomHexColor1());

// 数组去重
kits.unique = function(arr){
  return arr.filter(function(item,index,array){
      return array.indexOf(item) === index;
  });
};
// 判断字符出现次数最多的符号和次数
kits.charMore = function (item){
  var arr = [];
  for(var i = 0; i < item.length; i++){
     if( arr[item[i]] ){
      arr[item[i]]++;
     }else{
      arr[item[i]] = 1;
     }
 }

  var max = 0;
  var index = '';
  for(var key in arr){
      if(arr[key] > max){
          max = arr[key];
          index = key;
      }
  }
  return console.log('出现次数最多的字符是'+ index + ',出现了' + max + '次');
}


//  找出最大值
kits.findMax = function(item){
  var max = item[0];
  for(var i = 1; i < item.length; i++){
      if( max < item[i]){
          max = item[i]
      }
  }
  return max;
}

// 找出最小值
kits.findMin = function(item){
  var min = item[0];
  for(var i = 1; i < item.length; i++){
      if( min > item[i]){
          min = item[i]
      }
  }
  return min;
}

// 格式化时间
kits.formatDate = function(){
  var data = new Date();
  return console.log(data);
}
//时间封装
function formatDate(){
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  var h = now.getHours();
  var mm = now.getMinutes();
  var s = now.getSeconds();
  return y + '-' + patchZero(m) + '-' + patchZero(d) + ' ' + patchZero(h) + ":" + patchZero(mm) + ':' + patchZero(s);
}

function patchZero(v){
  return v < 10 ? '0' + v : v;
}


//查找某个字符串在数组中的所有的索引
kits.findIndex = function(n){
  for(var i = 0; i < arguments.length; i++){
      if(arguments[i].indexOf(n) != -1){
          console.log(i+1)
      }
  }
}
  // 定时器验证码封装
  this.timer = function(btn) {
    let time = 60;
    btn.value = time;
    setInterval(function() {
      time--;
      btn.value = time;
    }, 1000);
  };


  // 本地存储与json数据转换的封装
  //arr 是要存储的数组，key是存入本地存储自定义的键，一定要字符串格式
  this.storage = function(arr, key) {
    let json = JSON.stringify(arr);
    return localStorage.setItem(key, json);
  };

  // 从本地缓存中取出来
  //arr 是拿出来的数组，key本地存储中自定义的键，一定要字符串格式
  this.storage = function(key) {
    let data = localStorage.getItem(key);
    let arr = !data ? [] : JSON.parse(data);
    return arr;
  };
    //冒泡排序
    this.Bubbling = function(arr) {
      for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
          if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }
      return temp;
    };
     //阶乘
  this.Factorial = function(n) {
    var jiec = 1;
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      jiec = jiec * i;
      sum = sum + jiec;
    }
    return "阶乘是：" + jiec + "阶乘和是：" + sum;
  };
   //素数
   this.su = function(num) {
    var pd;
    if (num === 2) {
      pd = num + "是素数";
    } else {
      for (var i = 2; i < num; i++) {
        if (num % i === 0) {
          pd = num + "不是素数";
          break;
        } else {
          pd = num + "是素数";
        }
      }
    }
    return pd;
  };
  

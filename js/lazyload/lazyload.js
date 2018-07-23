/*
  author hll
  date 2018-5-4
  */


//服务于任何图片元素,  img 幕后,再将origin_src 设置过去
var LazyLoadImage = (function() {
    //变量的冒泡查找
    // const a = 1;
  return {
    setSrc: function(ele){
        // console.log(ele);
    // console.log('开始下载图片了');
    const url = 
    ele.getAttribute('origin_src')?
    ele.getAttribute('origin_src'):'';
    if(!url)return;
    const oImg = document.createElement('img');
    //不会影响页面, none 会离开文档流
    oImg.style.display = 'none';

    document.body.appendChild(oImg);
    //注册事件
    // addEventListener 新的
    // 旧的写法
    //当设置了图片的src后,就会启动http请求,
    //图片下载完成后,onload 注册的事件回调
    //函数就会被执行
    // 异步 同步
    oImg.onload = function(){
    // 不会立即执行
    // 后执行
    // console.log('图片下载完成了');
    ele.src = url;
    // 洋葱
    document.body.removeChild(this);
    //this=oImg
    //ele.parentNode
    }
    //先执行
    oImg.src = url;
    }
  }
})();
// LazyLoadImage.setSrc();

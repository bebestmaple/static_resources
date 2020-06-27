$('#enterQQ').on('click',function() {
    let arr = ['1689083613'];
    let random = Math.floor(Math.random()*arr.length);
    //获取缓存
    let qqNum = localStorage.getItem('qqNum') || arr[random];
    window.open('tencent://message/?uin=' + qqNum + '&Site=QQ交谈&Menu=yes','_self');
    localStorage.setItem('qqNum',qqNum);
})
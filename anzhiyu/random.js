var posts=["2025/08/01/有道点读笔miniapp的安装/","2025/03/21/有道点读笔的密码修改/","2025/08/21/江中论坛/","2024/05/21/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
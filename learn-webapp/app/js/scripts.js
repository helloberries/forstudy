

//   // 点击按钮滑入侧边栏
//   var sidenavBtn = document.getElementsByClassName('sidenav-btn')[0];
//   var sidenav =
//   sidenavBtn.addEventListener('touchend',function () {
//     sidenavBtn.style.opacity = '1';
//   }, false);
// };

// 点击任务分类进入任务列表
// function touch(e) {
//   e = event || window.event;
//   views[0].className = 'view';
//   document.getElementById('todo1').className = 'view current';
//   console.log('hi');
// }

  // 点击任务分类进入任务列表
  $('#sidenav-btn').tap(function () {
    console.log('hi');
  });

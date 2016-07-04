window.onload = function () {
  var todoCategories = document.getElementsByClassName('todo-category');
  var views = document.getElementsByClassName('view');
  for (var i = 0; i<todoCategories.length; i++) {
    todoCategories[i].addEventListener('click',function () {
      views[0].className = 'view';
      document.getElementById('todo1').className = 'view current';
      console.log('hi');
    }, false);
  }
};

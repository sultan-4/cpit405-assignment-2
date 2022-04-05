var liItem = document.querySelectorAll('ul li');
var imgItem = document.querySelectorAll('.image img');

liItem.forEach(li => {
  li.onclick = function () {
    liItem.forEach(li => {
      li.className = "";
    })
    li.className = "all";
    var value = li.textContent;
    document.cookie = 'liselect=' + value 
    
    showImage(imgItem,value)
  }
});

window.onload = function () {
  if (document.cookie != undefined) {
      showImage(imgItem,document.cookie.split("=")[1])
      console.log(document.cookie)
  }
}
function showImage (imgItem ,value){
  imgItem.forEach(img => {
    img.style.display = 'none';
    if (img.getAttribute('data-filter') == value || value == "All") {
      img.style.display = '';
    }
    
  })
}


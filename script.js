const liItem = document.querySelectorAll('ul li');
const imgItem = document.querySelectorAll('.image img');

liItem.forEach(li => {
   li.onclick = function() {
   
    liItem.forEach(li => {
        li.className = "";
    })
    li.className = "all";

   
    const value = li.textContent;
    console.log(value)
    imgItem.forEach(img => {
        img.style.display = 'none';
        if (img.getAttribute('data-filter') == value || value == "All") {
            img.style.display = '';

        }
    })
   }
});


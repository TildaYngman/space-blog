let cursor = document.getElementById('custom-cursor');
const onMouseMove = (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

function rotate() {
      cursor.classList.add('rotate'); //adds class of open and then the css styles the hamburgerbar
        setTimeout(function(){ 
            cursor.classList.remove('rotate');}
            , 1000);
  };
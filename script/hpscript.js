let cursor = document.getElementById('custom-cursor');
const onMouseMove = (e) =>{
    cursor.style.left = e.pageX + 'px'; //e.pageX & Y generates a number of where the cursor is on the screen
    cursor.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

function rotate() {
    cursor.classList.add('rotate'); //adds class of rotate wich is acitvating the animiation.
      setTimeout(function(){  // sets a timer to 1sec before removing the class of rotate, this make it possible to only run the animation in one click.
            cursor.classList.remove('rotate');}
            , 1000);
  }; 

document.onclick = userClicked;
function userClicked(e) {
    setTimeout(function() {
    var x = e.pageX;
    var y = e.pageY;
    var blob = document.getElementById("blobAppear");
    blobAppear.style.display = '';
    blobAppear.style.position = 'absolute';
    blobAppear.style.left = x + 'px';
    blobAppear.style.top = y + 'px';
    }, 400);
}
let cursor = document.getElementById('custom-cursor');
const onMouseMove = (e) =>{
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);

// let cursorRotate = false;

// function rotate(){ 
//  if (cursorRotate === false) {
//         cursor.style.transform = "rotate(-120deg)";
//         cursor.style.transition = "all 1s";
//         cursorRotate = true;  
// }else {
//         cursor.style.transform = "none";
//         cursorRotate = false;
//     }
// }
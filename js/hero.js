{/* <script> */}
const slider = document.querySelector('.slider-hero');

function activate(e) {
const items = document.querySelectorAll('.item-hero');
e.target.matches('.next-hero') && slider.append(items[0])
e.target.matches('.prev-hero') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);
{/* </script> */}
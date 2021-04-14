
const dots = document.querySelectorAll('.dots');
for (const dot of dots) {
    dot.addEventListener('click', function (event) {
        showHide(event);
  });  
}


const less = document.querySelectorAll('.less');
for (const thing of less) {
    thing.addEventListener('click', function (event) {
        showHide(event);
    })
}

function showHide(event) {
    console.log(event.target.closest('div').id)
    const num =event.target.closest('div').id
    const dots = document.getElementById(num+"-dots");
    const less = document.getElementById(num + "-less");
    const more = document.getElementById(num + "-more");
    if (dots.style.display !== 'none') {
        dots.style.display = 'none';
        more.style.display = 'inline';
        less.style.display = 'inline';
    } else {
        dots.style.display = 'inline';
        more.style.display = 'none';
        less.style.display = 'none';
    }
}

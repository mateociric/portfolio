
const nav = document.getElementById('nav');
const aTagWithoutLink = document.querySelectorAll('a[href=""');
let aTagSelectedNumber = 0;

Array.from(aTagWithoutLink).forEach((el) => {
    el.addEventListener('click', (event) => {
        event.preventDefault();
    })
});

function changeContent(element) {
    let aTagSelected = event.target;

    if (aTagSelected.tagName === 'A') {
        Array.from(nav.children).forEach((el, index) => {
            if (el.textContent === aTagSelected.textContent) {
                aTagSelectedNumber = index;
                nav.children[index].classList.add('anchorSelected');
                element.children[index].style.display = 'block';
            } else {
                nav.children[index].classList.remove('anchorSelected');
                element.children[index].style.display = 'none';
            }
        });
    } else {
        nav.children[aTagSelectedNumber].classList.add('anchorSelected');
        element.children[aTagSelectedNumber].style.display = 'block';
    }
}

nav.addEventListener('mouseover', (event) => {
    changeContent(document.getElementById('article'));
});
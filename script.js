// Button
const buttons = document.querySelectorAll('.btn')

for(let i = 0; i < buttons.length; i++ ) {
    buttons[i].addEventListener('click', e => {
        console.log(e.target.textContent)
    }) 
}
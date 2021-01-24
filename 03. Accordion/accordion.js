function toggle() {
    let button = document.querySelector('.button');
    let divExtra = document.querySelector('#extra');

    divExtra.style.display = (divExtra.style.display !== 'block' ? 'block' :'none' ; //ako si ravno na none ili prazen string togava stani block
    button.textContent = button.textContent == 'More' ? 'Less' : 'More';

}
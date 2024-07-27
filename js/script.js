const details = document.querySelector('.details-arrow');
const btnTest = document.querySelector('.btn-test');
const menuCover = document.querySelector('.menu');
const menuBurger = document.querySelector('.sandwich');
const menuMainBtn = document.querySelector('.menu-list__item_main');
const menuTestItem = document.querySelector('.menu-list__item_test');
const exiteBtn = document.querySelector('.exite-btn');
const testBtn = document.querySelector('.btn-test');
// const contentHidden = document.querySelector('.main-page__content');

//details.addEventListener('click',showHideDetails);
menuBurger = document.addEventListener('click', showHideMenu);
exiteBtn = document.addEventListener('click', showHideMenu);
testBtn.forEach(btn => (
    btn.addEventListener('click', function () {
        window.location.href = `https://takethisworld.github.io/IQ-Test/question/question.html`
    })
));
menuMainBtn.addEventListener('click', function () {
    window.location.href = `https://takethisworld.github.io/IQ-Test/index.html`;
});
menuTestItem.addEventListener('click', function () {
    window.location.href = `https://takethisworld.github.io/IQ-Test/quesions/question.html`
});

function showHideDetails() {
    contentHidden.classList.toogle('hidden');
    if (contentHidden.classList.contains('hidden')) {
        details.classList.add('arrow-up');
    } else {
        details.classList.remove('arrow-up');
    }
}

function showHideMenu() {
    menuCover.classList.toggle('show-menu');
    // if (contentHidden.classList.conteins('hidden')) {
    //     contentHidden.classList.add('hidden');
    // } else {
    //     contentHidden.classList.remove('arrow-up')
    // }
}
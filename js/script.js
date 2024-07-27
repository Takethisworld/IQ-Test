const details = document.querySelector('.details_arrow');
const btnTest = document.querySelector('.btn-test');
// const contentHidden = document.querySelector('.main-page__content');
const menuCover = document.querySelector('.menu');
const menuBtn = document.querySelector('.sandwich');
const menuMainBtn = document.querySelector('.menu-list__item_main');
const menuTestBtn = document.querySelector('.menu-list__item_test');
const exitBtn = document.querySelector('.menu_exit-btn');
const testBtn = document.querySelectorAll('.btn-test');

// details.addEventListener('click', showHideDetails);
menuBtn.addEventListener('click', showHideMenu);
exitBtn.addEventListener('click', showHideMenu);
testBtn.forEach(btn => (
    btn.addEventListener('click', function () {
        window.location.href = `https://takethisworld.github.io/IQ-Test/questions/question.html`;
    })
))
menuMainBtn.addEventListener('click', function () {
    window.location.href = `https://takethisworld.github.io/IQ-Test/index.html`;
})
menuTestBtn.addEventListener('click', function () {
    window.location.href = `https://takethisworld.github.io/IQ-Test/questions/question.html`;
})

// function showHideDetails() {
//     contentHidden.classList.toggle('hidden')
//     if (!contentHidden.classList.contains('hidden')) {
//         details.classList.add('arrow-up')
//     } else details.classList.remove('arrow-up')
// }

function showHideMenu() {
    menuCover.classList.toggle('show-menu');
    // if (!contentHidden.classList.contains('hidden')) {
    //     contentHidden.classList.add('hidden')
    //     details.classList.remove('arrow-up')
    // }
}


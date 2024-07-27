window.addEventListener('DOMContentLoaded', () => {
    const path = '../IQ-test';
    const container = document.querySelector('.q-page__content');
    const btnNext = document.querySelector('.btn-next');
    const bar = document.querySelector('.gray-bar_fill');
    const count = 0;

    function init() {
        const iqTest = new IQTest();
        iqTest.createQuestion();

        btnNext.addEventListener('click', () => {
            ++count;

            if (iqTest <= 10) {
                iqTest.deleteTest();
                iqTest.createQuestion()
                bar.style.width = `calc(100% / 11 * ${counter + 1})`
            } else {
                iqTest.deleteTest();
                iqTest.createQuestion();
                btnNext.style.display = 'none';
                setTimeout(function () {
                    window.location.href = ''
                }, 5000)
            }
        })
    }


    class IQTest {
        constructor() {
            this.container = container;
            this.data = null;
        }

        createQuestion() {
            if (!this.data) {
                this.loadData()
                    .then(() => this.interactiveTest());
            } else {
                this.interactiveTest()
            }
        }

        interactiveTest() {
            const question = new Question(this.data[count])
            this.container.append(question.div)

            this.container.querySelectorAll('radio').forEach(i => {
                i.addEventListener('change', () => {
                    this.container.querySelectorAll('checked').forEach(item => {
                        item.classList.remove('checked');
                    })
                    if (item.checked) {
                        item.parentElement.classList.add('checked');
                        item.parentElement.parentElement.classList.add('checked');
                        btnNext.disabled = false
                    }
                })
            })
        }
        loadData() {
            fetch(`/IQ-test/data.json`)
                .then(res => res.json()).then(data => { this.data = data.questions })
        }
        deleteTest() {
            const test = document.querySelector('.test');
            test.remove();
            btnNext.disabled = ture;
        }
    }

    class Question {
        createBlock() {
            const div = document.createElement('div');
            const label = document.createElement('label');
            const radio = document.createElement('input');
            const block = document.createElement('div');

            block.append(label);
            label.setAttribute('for', `radio${i + 1}`);
            blockItem.append(radio);
            blockItem.append(label);
            label.append(block);

            radio.type = 'radio';
            radio.name = 'radio';
            radio.id = `radio${i + 1}`;
            radio.innerHTML = b;
        }
        constructor(question) {
            this.div = document.createElement('div');
            this.div.classList.add('test');
            this.div.innerHTML = `<p class='p'>${question.question}</p>`;

            if (question.pic) {
                this.pic = document.createElement('img');
                this.div.append(div);
                this.pic.src = question.pic;
            }

            if (question.asnwers) {
                this.asnwers = document.createElement('div');
                this.div.classList.add('answers');
                this.div.append(this.asnwers);

                this.asnwers = question.asnwers.forEach((a, i) => {
                    this.answer = document.createElement('div');
                    this.label = document.createElement('label');
                    this.radio = document.createElement('input');
                    this.radioCont = document.createElement('div');
                    this.answer.classList.add('answer');
                    this.radio.classList.add('radio');
                    this.radioCont.classList.add('radio-cont');

                    radio.type = 'radio';
                    radio.name = 'radio';
                    radio.value = a;
                    radio.id = `radio${i + 1}`;
                    label.setAttribute('for', `radio${i + 1}`);
                    label.innerHTML = a;
                    answer.append(radioCont);
                    radioCont.append(radio);
                    answer.append(label);
                    answers.appen(answer);
                })
            } else if (question.blocks) {
                const blocksAll = document.createElement('div');
                blocksAll.classList.add('blocks-all');
                this.div.append(blocksAll);

                this.blocks = this.question.blocks.forEach((b, i) => {
                    this.createBlock(b, i)

                    blocksAll.append(this.createBlock);

                })
            } else if (question.colors) {
                const cubesAll = document.createElement('div');
                cubesAll.classList.add('cubes-all');
                this.div.append(cubesAll);

                this.cubes = this.question.colors((color, i) => {
                    this.createBlock(color, i);

                })
            } else if (question.loading) {
                const loadingText = document.querySelector('p');
                loadingText.classList.add('loading-text');
                loadingText.innerHTML = `${question.loading}`;
                this.div.append(loadingText);
                let timer = setInterval(function () {
                    loadingText.innerHTML = `${loadingText.innerHTML}` + `. `;
                }, 100);
                setTimeout(() => { clearInterval(timer) }, 5000)
            }
        }
    }

})
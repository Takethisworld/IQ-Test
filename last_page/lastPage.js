window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.content-luke');
    const exite = document.querySelector('.exite-btn');

    function startTimer(duration, display) {
        let timer = duration, minutes, seconds;

        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = minutes + ':' + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000)
    }

    async function drawLuke() {
        let res = await fetch('https://swapi.dev/api/people/1/');
        let luke = await res.json();

        document.querySelector('.content_call-me').addEventListener('click', () => {
            container.classList.add('show_luke');
            const searchBio = document.querySelector('.bio');

            if (!searchBio) {
                const bio = document.createElement('div');
                bio.classList.add('bio');
                container.append(bio);
                bio.innerHTML = `
<div class='name'>
            Character's name: ${luke.name}
            </div>
            <div class='gender'>
            Character's gender: ${luke.gender}
            </div>
            <div class='eye-color'>
            Character's eye color: ${luke.eye_color}
            </div>
            <div class='height'>
            Character's height: ${luke.height}
            </div>
            <div class='mass'>
            Character's weight: ${luke.mass}
            </div>
`
            }
        })
    }
})
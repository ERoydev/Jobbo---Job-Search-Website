
// This is the logic for steps moving indicator in signup form => NEED IMPROVEMENT
const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");

    const next1 = document.getElementById('next1');
    const next2 = document.getElementById('next2');
    const next3 = document.getElementById('next3');

    const back1 = document.getElementById('back1');
    const back2 = document.getElementById('back2');

    const progress = document.getElementById('progress');
    const INITIAL_PROGRESS_VALUE = progress.clientWidth;
    const box = document.querySelector('.auth-container');

    const BOXWIDTH = box.clientWidth;

    console.log(BOXWIDTH)
    next1.addEventListener('click', () => {
        if (BOXWIDTH > 450) {
            form2.style.left = "40px";
        } else {
            form2.style.left = "0";
        }
        form1.style.left = "-600px";
        progress.style.width = `${INITIAL_PROGRESS_VALUE * 2}px`;
    })

    back1.addEventListener('click', () => {
        if (BOXWIDTH > 450) {
            form1.style.left = "40px";
        } else {
            form1.style.left = "0";
        }
        form2.style.left = "600px";
        progress.style.width = `${progress.clientWidth / 2}px`;
    })

    next2.addEventListener('click', () => {
        if (BOXWIDTH > 450) {
            form3.style.left = "40px";
        } else {
            form3.style.left = "0";
        }
        
        form2.style.left = "-600px";
        progress.style.width = `${progress.clientWidth + INITIAL_PROGRESS_VALUE}px`;
    })

    back2.addEventListener('click', () => {
        if (BOXWIDTH > 450) {
            form2.style.left = "40px";
        } else {
            form2.style.left = "0";
        }

        form3.style.left = "600px";
        progress.style.width = `${progress.clientWidth - INITIAL_PROGRESS_VALUE}px`;
    })
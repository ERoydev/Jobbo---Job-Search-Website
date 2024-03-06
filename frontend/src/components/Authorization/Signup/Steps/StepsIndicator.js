
// This is the logic for steps moving indicator in signup form
export const stepsIndicator = (container) => {
    console.log(container)
    const form1 = container.getElementById("form1");
    const form2 = container.getElementById("form2");
    const form3 = container.getElementById("form3");
    
    const next1 = container.getElementById('next1');
    const next2 = container.getElementById('next2');
    const next3 = container.getElementById('next3');
    
    const back1 = container.getElementById('back1');
    const back2 = container.getElementById('back2');
    
    const progress = container.getElementById('progress');
    const INITIAL_PROGRESS_VALUE = container.clientWidth;
    const box = container.querySelector('.auth-container');
    const BOXWIDTH = box.clientWidth;
}

export const nextOne = (e) => {
    e.preventDefault();
    stepsIndicator(e.target.parentNode);

    if (BOXWIDTH > 450) {
        form2.style.left = "40px";
    } else {
        form2.style.left = "0";
    }
    form1.style.left = "-600px";
    progress.style.width = `${INITIAL_PROGRESS_VALUE * 2}px`;
}

export const backOne = (e) => {
    e.preventDefault();
    if (BOXWIDTH > 450) {
        form1.style.left = "40px";
    } else {
        form1.style.left = "0";
    }
    form2.style.left = "600px";
    progress.style.width = `${progress.clientWidth / 2}px`;
}

export const nextTwo = (e) => {
    if (BOXWIDTH > 450) {
        form3.style.left = "40px";
    } else {
        form3.style.left = "0";
    }
    
    form2.style.left = "-600px";
    progress.style.width = `${progress.clientWidth + INITIAL_PROGRESS_VALUE}px`;
}

export const backTwo = (e) => {
    if (BOXWIDTH > 450) {
        form2.style.left = "40px";
    } else {
        form2.style.left = "0";
    }
    
    form3.style.left = "600px";
    progress.style.width = `${progress.clientWidth - INITIAL_PROGRESS_VALUE}px`;
}
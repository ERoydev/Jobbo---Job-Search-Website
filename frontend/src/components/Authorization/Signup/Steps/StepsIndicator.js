
// This is the logic for steps moving indicator in signup form
let form1;
let form2;
let form3;

export const nextOne = (e, formRefs) => {
    e.preventDefault();

    form1 = formRefs.current.form1;
    form2 = formRefs.current.form2;
    const container = formRefs.current.container;
    const progress = formRefs.current.progress;

    const BOXWIDTH = container.clientWidth;
    const INITIAL_PROGRESS_VALUE = BOXWIDTH / 3;

    if (BOXWIDTH > 450) {
        form2.style.left = "40px";
    } else {
        form2.style.left = "0";
    }

    form1.style.left = "-600px";
    progress.style.width = `${INITIAL_PROGRESS_VALUE * 2}px`;
}

export const backOne = (e, formRefs) => {
    e.preventDefault();
    const container = formRefs.current.container;
    const progress = formRefs.current.progress;

    const BOXWIDTH = container.clientWidth;

    if (BOXWIDTH > 450) {
        form1.style.left = "40px";
    } else {
        form1.style.left = "0";
    }

    form2.style.left = "600px";
    progress.style.width = `${progress.clientWidth / 2}px`;
}

export const nextTwo = (e, formRefs) => {
    form3 = formRefs.current.form3;

    const container = formRefs.current.container;
    const progress = formRefs.current.progress;

    const BOXWIDTH = container.clientWidth;
    const INITIAL_PROGRESS_VALUE = BOXWIDTH / 3;

    if (BOXWIDTH > 450) {
        form3.style.left = "40px";
    } else {
        form3.style.left = "0";
    }
    
    form2.style.left = "-600px";
    progress.style.width = `${progress.clientWidth + INITIAL_PROGRESS_VALUE}px`;
}

export const backTwo = (e, formRefs) => {
    const container = formRefs.current.container;
    const progress = formRefs.current.progress;

    const BOXWIDTH = container.clientWidth;
    const INITIAL_PROGRESS_VALUE = BOXWIDTH / 3;

    if (BOXWIDTH > 450) {
        form2.style.left = "40px";
    } else {
        form2.style.left = "0";
    }
    
    form3.style.left = "600px";
    progress.style.width = `${progress.clientWidth - INITIAL_PROGRESS_VALUE}px`;
}
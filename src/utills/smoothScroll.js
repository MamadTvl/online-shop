export const SmoothVerticalScrolling = (e, time, where) => {
    const eTop = e.getBoundingClientRect().top;
    console.log(e.getBoundingClientRect())
    const eAmt = eTop / 100;
    let curTime = 0;
    while (curTime <= 275) {
        window.setTimeout(SVS_B, curTime, eAmt, where);
        curTime += 275 / 100;
    }
}

const SVS_B = (eAmt, where) => {
    if (where === "top")
        window.scrollBy(0, eAmt);
}
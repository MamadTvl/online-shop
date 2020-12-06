
// todo : function separate 3 digits


const isNumber = (str) => {
    return /^\d+$/.test(str)
}


const toFaDigit = (text) => {
    let ret = '';
    for (let i = 0; i < text.length; i++) {
        if(isNumber(text[i]))
            ret += String.fromCharCode(text.charCodeAt(i) + 1728);
        else
            ret += text[i]
    }

    return ret;
}

export default toFaDigit
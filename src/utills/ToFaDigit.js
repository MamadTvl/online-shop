const isNumber = (str) => {
    return /^\d+$/.test(str)
}

const isPersianNumber = (charCode) => {
    return (charCode >= 1776 && charCode <= 1785)
}
export const toEnDigit = (text) => {
    let ret = '';
    for (let i = 0; i < text.length; i++) {
        if (isPersianNumber(text.charCodeAt(i)))
            ret += String.fromCharCode(text.charCodeAt(i) - 1728);
        else
            ret += text[i]
    }

    return ret;
}

export const toFaDigit = (text) => {
    let ret = '';
    for (let i = 0; i < text.length; i++) {
        if (isNumber(text[i]))
            ret += String.fromCharCode(text.charCodeAt(i) + 1728);
        else
            ret += text[i]
    }

    return ret;
}

function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}

export const separateDigit = (number) => {
    let count = 0
    number = toFaDigit(number.toString())
    let separatedNum = ''
    for (let i = number.length - 1; i >= 0; i--) {
        if (count < 3) {
            separatedNum += number[i]
            count++
        }
        if (count === 3) {
            separatedNum += '٫'
            count = 0
        }
    }
    separatedNum = reverseString(separatedNum)
    return separatedNum.indexOf('٫') === 0 ? separatedNum.substring(1) : separatedNum
}
export const posFloatValidator = input => {
    if (input === '') return true
    let isValid = false
    if (!isNaN(input) && parseFloat(input) >= 0) isValid = true
    return isValid
}

export const posPercentageValidator = input => {
    if (input === '') return true
    let isValid = false
    let parsed = parseFloat(input)
    if (!isNaN(input) && (parsed >= 0 && parsed <= 100)) isValid = true
    return isValid
}
import { AnswersType } from './types'
import i2m from './imperialToMetric'

const calculate = (answers : AnswersType) => {
    let bmr = 0
    let convertedAnswers = i2m(answers)
    let bodyFatProvided = false
    if (convertedAnswers.bodyFat === '') {
        if (convertedAnswers.gender === 'M') {
            bmr = 10 * convertedAnswers.weight + 6.25 * convertedAnswers.height - 5 * convertedAnswers.age + 5
        } else if (convertedAnswers.gender === 'F') {
            bmr = 10 * convertedAnswers.weight + 6.25 * convertedAnswers.height - 5 * convertedAnswers.age - 161
        } else {
            throw new Error('Unknown gender.');
        }
    }
    else {
        bodyFatProvided = true
        bmr = 370 + 21.6 * (1 - parseFloat(convertedAnswers.bodyFat) / 100) * convertedAnswers.weight
    }

    let tdee = bmr * convertedAnswers.pa + convertedAnswers.sport
    return [bodyFatProvided, Math.round(bmr), Math.round(tdee)]
}

export default calculate
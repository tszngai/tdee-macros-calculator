import { AnswersType } from './types'

const i2m = (answers : AnswersType) => {
    answers = {
        ...answers,
        age: parseFloat(answers.age),
        weight: parseFloat(answers.weight),
        heightCm: parseFloat(answers.heightCm),
        heightFt: parseFloat(answers.heightFt),
        heightInch: parseFloat(answers.heightInch),
        pa: parseFloat(answers.pa),
        sport: parseFloat(answers.sport),
        goal: parseFloat(answers.goal),
    }
    if (answers.unit == 'metric') {
        return {
            ...answers,
            height: answers.heightCm
    }
        }
    if (answers.unit == 'imperial') {
        return {
            ...answers,
            weight: answers.weight * 0.453592,
            height: answers.heightFt * 30.48 + answers.heightInch * 2.54
        }
    }
    throw new Error('Unknown unit system.');
}

export default i2m
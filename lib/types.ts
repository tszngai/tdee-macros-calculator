export type TextFieldTypes = 
    'languageName'|
    'homeName'|
    'title'|
    'description'|
    'toggleLight'|
    'toggleDark'|
    'genderWarning'|
    'ageWarning'|
    'weightWarning'|
    'heightWarning'|
    'paWarning'|
    'sportWarning'|
    'gender'|
    'male'|
    'female'|
    'age'|
    'weight'|
    'height'|
    'pa'|
    'sport'|
    'bodyFat'|
    'goal'|
    'calculate'|
    'metric'|
    'imperial'|
    'bodyFatExplained'|
    'paPlaceholder'|
    'pa1.2'|
    'pa1.375'|
    'pa1.55'|
    'pa1.725'|
    'pa1.9'|
    'sportPlaceholder'|
    'bodyFatPlaceholder'|
    'goalExplained'|
    'goal-0.2'|
    'goal-0.1'|
    'goal0'|
    'goal0.1'|
    'goal0.2'|
    'tdeeBoxTitle'|
    'tdeeExplainedHolder'|
    'tdeeExplainedWithFat'|
    'tdeeExplainedNoFat'|
    'paTitle'|
    'sedentary'|
    'lightlyActive'|
    'moderatelyActive'|
    'veryActive'|
    'extremelyActive'|
    'bmrResult'|
    'bmrExplained'|
    'calAndMacrosIntake'|
    'calIntakeResult'|
    'dailyIntakeGoal'|
    'proteinIntakeExplained'|
    'proteinPercentTitle'|
    'macros'|
    'gram'|
    'calories'|
    'percentageInCalories'|
    'protein'|
    'fat'|
    'carbs'|
    'fatCarbsRatio'|
    'fatCarbsRatioExplained'|
    'paTips'|
    'sportTipsTitle'|
    'sportTips'|
    'feedbackTypes'|
    'postSubmitButtonMsg'|
    'submitButtonMsg'|
    'website'|
    'shareMsg'|
    'shareTag'|
    'tumblrTags'
export type LocaleTypes = 'zh'|'zh-hk'|'zh-cn'|'en'
export type AnswersType = {
    unit: string|number,
    gender: string|number,
    age: string|number,
    weight: string|number,
    height ?: string|number,
    heightCm: string|number,
    heightFt: string|number,
    heightInch: string|number,
    pa: string|number,
    sport: string|number,
    bodyFat: string|number,
    goal: number
}
export type paTypes = '1.2'|'1.375'|'1.55'|'1.725'|'1.9'
import styles from '../styles/Calculator.module.css'
import {
    Box,
    Tabs,
    TabList,
    Tab
} from '@chakra-ui/react'
import Form from './Form'
import translate from '../lib/translate'

const Calculator = props => {
    const changeTabHandler = index => {
        const unitMap = {0: 'metric', 1: 'imperial'}
        props.setAnswers({
            ...props.answers,
            unit: unitMap[index],
            weight: '',
            heightCm: '',
            heightFt: '',
            heightInch: '',
        })
    }
    return (
        <Box className={styles.Calculator} w="100%" borderRadius="lg">
            <Tabs id='unitSystem' variant="soft-rounded" colorScheme='teal' onChange={changeTabHandler}>
                <TabList marginLeft='1rem'>
                    <Tab id={'1'}>{translate('metric', props.locale)}</Tab>
                    <Tab id={'2'}>{translate('imperial', props.locale)}</Tab>
                </TabList>
            </Tabs>
            <Form
                resultsRef={props.resultsRef}
                locale={props.locale}
                answers={props.answers} setAnswers={props.setAnswers}
                setSavedAnswers={props.setSavedAnswers}
                bmr={props.bmr} setBmr={props.setBmr}
                tdee={props.tdee} setTdee={props.setTdee}
                setBodyFatProvided={props.setBodyFatProvided}
            />
        </Box>
    )
}

export default Calculator
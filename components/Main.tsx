import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Main.module.css'
import { Box, Container, Divider, useColorModeValue } from '@chakra-ui/react'
import Calculator from './Calculator'
import Results from './Results'
import translate from '../lib/translate'

const GetFeedback = dynamic(
    () => import('./GetFeedback'),
    { ssr: false }
);

const Main = props => {
    const [answers, setAnswers] = useState({
        unit: 'metric',
        gender: '',
        age: '',
        weight: '',
        heightCm: '',
        heightFt: '',
        heightInch: '',
        pa: '',
        sport: '',
        bodyFat: '',
        goal: 0
    })
    const [savedAnswers, setSavedAnswers] = useState({...answers, gender: 'M'})
    const [bmr, setBmr] = useState(0)
    const [tdee, setTdee] = useState(0)
    const [bodyFatProvided, setBodyFatProvided] = useState(false)
    const mainBgColor = useColorModeValue({backgroundColor: "beige"}, {})
    const contentBgColor = useColorModeValue({backgroundColor: "white"}, {backgroundColor: "rgba(71, 67, 67, 0.383)"})
    const resultsRef = useRef(null)

    return (
        <main className={styles.main} style={mainBgColor}>
            <Box className={styles.Content} style={contentBgColor}>
                <h1 className={styles.title}>
                    <Box>{translate('title', props.locale)}</Box>
                </h1>

                <Container className={styles.description} w='100%' marginX='0' maxW='95%'>
                    {translate('description', props.locale)}
                </Container>

                <Calculator
                    resultsRef={resultsRef}
                    locale={props.locale}
                    answers={answers} setAnswers={setAnswers}
                    setSavedAnswers={setSavedAnswers}
                    bmr={bmr} setBmr={setBmr}
                    tdee={tdee} setTdee={setTdee}
                    setBodyFatProvided={setBodyFatProvided}
                />

                <Divider ref={resultsRef} />

                {/* { tdee !== 0 ? <Results locale={props.locale} answers={answers} savedAnswers={savedAnswers} bodyFatProvided={bodyFatProvided} bmr={bmr} tdee={tdee} /> : null } */}
                { true ? <Results locale={props.locale} answers={answers} savedAnswers={savedAnswers} bodyFatProvided={bodyFatProvided} bmr={bmr} tdee={tdee} /> : null }
                <GetFeedback locale={props.locale} />
            </Box>
        </main>
    )
}

export default Main
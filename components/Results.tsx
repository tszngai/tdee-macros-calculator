import { useState, useEffect } from 'react';
import styles from '../styles/Results.module.css'
import {
    Flex,
    Box,
    Center,
    Container,
    Grid,
    GridItem,
    Spacer,
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    VStack,
    Wrap,
    WrapItem,
    useColorModeValue,
    Divider,
} from '@chakra-ui/react'
import { paTypes } from '../lib/types'
import calculate from '../lib/calculate'
import translate from '../lib/translate'

const Results = props => {
    const [calIntake, setCalIntake] = useState(0)
    const [calculatedCalIntake, setCalculatedCalIntake] = useState(0)
    const [proteinPercent, setProteinPercent] = useState(30)
    const [proteinCal, setProteinCal] = useState(0)
    const [fatCarbsRatio, setFatCarbsRatio] = useState(40)
    const [fatCal, setFatCal] = useState(0)
    const [carbsCal, setCarbsCal] = useState(0)

    useEffect(() => {
        let intake = Math.round(props.tdee * (1 + parseFloat(props.savedAnswers.goal)))
        setCalIntake(intake)
        setCalculatedCalIntake(intake)
    }, [props.savedAnswers])

    useEffect(() => {
        setProteinCal(calIntake * proteinPercent / 100)
    }, [calIntake, proteinPercent])

    useEffect(() => {
        setFatCal(calIntake * (1 - proteinPercent / 100) * (fatCarbsRatio / 100))
        setCarbsCal(calIntake * (1 - proteinPercent / 100) * (1 - fatCarbsRatio / 100))
    }, [calIntake, proteinPercent, fatCarbsRatio])

    const tdeeBoxColor = useColorModeValue('#d77b6a', 'papayawhip')
    const tdeeColor = useColorModeValue('white', '#7c1c0a')

    const TDEEExplained = () => {
        if (props.bodyFatProvided) return (
            translate('tdeeExplainedWithFat', props.locale, {tdee: props.tdee.toLocaleString()})
        )
        if (!props.bodyFatProvided) return (
            translate('tdeeExplainedNoFat', props.locale, {tdee: props.tdee.toLocaleString()})
        )
    }

    const calculateTdee = (pa : paTypes) => {
        const paMap = {
            '1.2': translate('sedentary', props.locale),
            '1.375': translate('lightlyActive', props.locale),
            '1.55': translate('moderatelyActive', props.locale),
            '1.725': translate('veryActive', props.locale),
            '1.9': translate('extremelyActive', props.locale)
        }
        let answers = props.savedAnswers
        if (answers.pa === pa) return (
            <Tr fontWeight='bold'>
                <Td fontSize='lg'>{paMap[pa]}</Td>
                <Td isNumeric fontSize='lg'>{props.tdee.toLocaleString()}</Td>
            </Tr>
        )
        let [_, __, tdee] = calculate({...answers, 'pa': pa})
        return (
            <Tr>
                <Td>{paMap[pa]}</Td>
                <Td isNumeric>{tdee.toLocaleString()}</Td>
            </Tr>
        )
    }

    return (
        <Box className={styles.Container} w="100%">
            <Wrap marginTop='1rem'>
                <WrapItem paddingX='1rem'>
                    <Grid
                        h="16rem"
                        w='14rem'
                        templateRows="repeat(5, 1fr)"
                        templateColumns="repeat(1, 1fr)"
                        gap={2}
                    >
                        <GridItem rowSpan={1} colSpan={1}>
                            {translate('tdeeBoxTitle', props.locale)}
                        </GridItem>
                        <GridItem rowSpan={4} colSpan={1} bg={tdeeBoxColor} borderRadius='lg'>
                            <Center color={tdeeColor} h='100%' fontSize='3rem' fontWeight='bold'>{props.tdee.toLocaleString()}</Center>
                        </GridItem>
                    </Grid>
                </WrapItem>
                <WrapItem paddingY='1rem' maxW='50%' minW='16rem'>
                    <VStack spacing='1rem'>
                        {
                            props.tdee !== 0 ?
                                <Container>{TDEEExplained()}</Container> :
                                <Container>{translate('tdeeExplainedHolder', props.locale)}</Container>
                        }
                        <Table variant='striped' size='sm' w='90%'>
                            <Thead>
                                <Tr>
                                    <Th>{translate('paTitle', props.locale)}</Th>
                                    <Th isNumeric>TDEE</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {calculateTdee('1.2')}
                                {calculateTdee('1.375')}
                                {calculateTdee('1.55')}
                                {calculateTdee('1.725')}
                                {calculateTdee('1.9')}
                            </Tbody>
                        </Table>
                    </VStack>
                </WrapItem>
            </Wrap>
            <Box w='100%' padding='1rem'>
                {translate('bmrResult', props.locale, {bmr: props.bmr.toLocaleString()})}
                <br />
                {translate('bmrExplained', props.locale)}
            </Box>
            <Divider />
            <Box w='100%' padding='1rem'>
                <span style={{fontWeight: 'bold', fontSize: 'xx-large'}}>{translate('calAndMacrosIntake', props.locale)}</span>
                <br />
                {translate('calIntakeResult', props.locale, {calIntake: calculatedCalIntake.toLocaleString()})}
                <FormControl id="calIntake" w='100%' paddingTop='1rem'>
                    <FormLabel>{translate('dailyIntakeGoal', props.locale)}</FormLabel>
                    <NumberInput
                        w='100%'
                        max={999999} min={0}
                        value={calIntake}
                        onChange={val => {setCalIntake(parseFloat(val))}}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <br /><br />
                {translate('proteinIntakeExplained', props.locale)}
            </Box>
            <FormControl id="proteinPercent" w='100%' padding='1rem' paddingTop='0'>
                <FormLabel>{translate('proteinPercentTitle', props.locale)}</FormLabel>
                <NumberInput
                    w='40%'
                    max={99} min={1}
                    value={proteinPercent}
                    onChange={val => {setProteinPercent(parseFloat(val))}}
                >
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </FormControl>
            <Box w='100%' className={styles.MacrosTable}>
                <Table size='sm' colorScheme='gray' maxW='90%'>
                    <Thead>
                        <Tr>
                            <Th>{translate('macros', props.locale)}</Th>
                            <Th isNumeric>{translate('gram', props.locale)}</Th>
                            <Th isNumeric>{translate('calories', props.locale)}</Th>
                            <Th isNumeric>{translate('percentageInCalories', props.locale)}</Th>
                        </Tr>
                    </Thead>
                    <Tbody fontWeight='bold'>
                        <Tr>
                            <Td fontSize='lg' className={styles.MacrosName}>{translate('protein', props.locale)}</Td>
                            <Td isNumeric fontSize='lg'>{Math.round(proteinCal / 4).toLocaleString()} g</Td>
                            <Td isNumeric fontSize='lg'>{Math.round(proteinCal).toLocaleString()}</Td>
                            <Td isNumeric fontSize='lg'>{proteinPercent}%</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize='lg' className={styles.MacrosName}>{translate('fat', props.locale)}</Td>
                            <Td isNumeric fontSize='lg'>{Math.round(fatCal / 9).toLocaleString()} g</Td>
                            <Td isNumeric fontSize='lg'>{Math.round(fatCal).toLocaleString()}</Td>
                            <Td isNumeric fontSize='lg'>{(100 - proteinPercent) * fatCarbsRatio / 100}%</Td>
                        </Tr>
                        <Tr>
                            <Td fontSize='lg' className={styles.MacrosName}>{translate('carbs', props.locale)}</Td>
                            <Td isNumeric fontSize='lg'>{Math.round(carbsCal / 4).toLocaleString()} g</Td>
                            <Td isNumeric fontSize='lg'>{Math.round(carbsCal).toLocaleString()}</Td>
                            <Td isNumeric fontSize='lg'>{(100 - proteinPercent) * (100 - fatCarbsRatio) / 100}%</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
            <Box w='100%' padding='1rem'>
                <Flex fontSize='large'>
                    <Box>{translate('fat', props.locale)}</Box>
                    <Spacer />
                    <Box>{translate('carbs', props.locale)}</Box>
                </Flex>
                <Slider
                    id='fatCarbsRatioSlider'
                    aria-label="fat-carbs-ratio"
                    colorScheme='yellow'
                    value={fatCarbsRatio}
                    onChange={val => {setFatCarbsRatio(val)}}
                >
                    <SliderTrack bg='teal'>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <Center fontSize='x-large'>{translate('fatCarbsRatio', props.locale)} - {fatCarbsRatio} : {100 - fatCarbsRatio}</Center>
            </Box>
            <Box w='100%' padding='1rem'>
                {translate('fatCarbsRatioExplained', props.locale)}
            </Box>
        </Box>
    )
}

export default Results
import styles from '../styles/Form.module.css'
import { InfoIcon } from '@chakra-ui/icons'
import {
    Flex,
    Box,
    Spacer,
    Button,
    Divider,
    FormControl,
    FormLabel,
    HStack,
    VStack,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    Input,
    InputGroup,
    InputRightElement,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Radio,
    RadioGroup,
    Select,
    useToast,
} from '@chakra-ui/react'
import * as validators from '../lib/inputValidators'
import calculate from '../lib/calculate'
import translate from '../lib/translate'

const weightUnit = (unitSystem : string) => {
    if (unitSystem === 'metric') return 'kg'
    if (unitSystem === 'imperial') return 'lbs'
    throw new Error('Unknown unit system.');
}

const Form = props => {
    const toast = useToast()

    const handleChange = (ansName : string, isEvent=false, validator ? : Function) => {
        let ansHandler = (ans : string) => {
            if (!validator) props.setAnswers({...props.answers, [ansName]: ans})
            else if (validator(ans)) props.setAnswers({...props.answers, [ansName]: ans})
        }
        if (!isEvent) {
            return ans => {
                ansHandler(ans)
            }
        }
        if (isEvent) {
            return e => {
                let ans = e.target.value
                ansHandler(ans)
            }
        }
    }

    const CalculateButtonHandler = async () => {
        let answers = props.answers
        if (answers.gender === '') {
            toast({
                title: translate('genderWarning', props.locale),
                status: 'error',
                position: 'top'
            })
            return
        }
        if (answers.age === '') {
            toast({
                title: translate('ageWarning', props.locale),
                status: 'error',
                position: 'top'
            })
            return
        }
        if (answers.weight === '') {
            toast({
                title: translate('weightWarning', props.locale),
                status: 'error',
                position: 'top'
            })
            return
        }
        if (answers.heightCm === '' && (answers.heightFt === '' || answers.heightInch === '')) {
            toast({
                title: translate('heightWarning', props.locale),
                status: 'error',
                position: 'top'
            })
            return
        }
        if (answers.pa === '') {
            toast({
                title: translate('paWarning', props.locale),
                status: 'error',
                position: 'top'
            })
            return
        }
        if (answers.sport === '') {
            toast({
                title: translate('sportWarning', props.locale),
                status: 'error',
                position: 'top'
            })
            return
        }
        props.setSavedAnswers(answers)

        let [bodyFatProvided, bmr, tdee] = calculate(answers)
        props.setBodyFatProvided(bodyFatProvided)
        props.setBmr(bmr)
        props.setTdee(tdee)
        setTimeout(() => {
            props.resultsRef.current.scrollIntoView()
        }, 100);
    }

    const heightForm = (unitSystem : string) => {
        if (unitSystem === 'metric') return (
            <InputGroup>
                <Input value={props.answers.heightCm} onChange={handleChange('heightCm', true, validators.posFloatValidator)} />
                <InputRightElement children='cm' />
            </InputGroup>
        )
        if (unitSystem === 'imperial') return (
            <HStack>
                <InputGroup>
                    <Input value={props.answers.heightFt} onChange={handleChange('heightFt', true, validators.posFloatValidator)} />
                    <InputRightElement children='ft' />
                </InputGroup>
                <InputGroup>
                    <Input value={props.answers.heightInch} onChange={handleChange('heightInch', true, validators.posFloatValidator)} />
                    <InputRightElement children='inch' />
                </InputGroup>
            </HStack>
        )
        throw new Error('Unknown unit system.');
    }

    return (
        <Box className={styles.Content}>
            <Divider />
            <VStack spacing={4} marginTop={'1rem'}>
                <FormControl id='gender'>
                    <FormLabel>{translate('gender', props.locale)}</FormLabel>
                    <RadioGroup value={props.answers.gender} onChange={handleChange('gender')}>
                        <HStack spacing="24px">
                            <Radio id='M' name='M' value="M">{translate('male', props.locale)}</Radio>
                            <Radio id='F' name='M' value="F">{translate('female', props.locale)}</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>

                <FormControl id="age">
                    <FormLabel>{translate('age', props.locale)}</FormLabel>
                    <NumberInput max={99} min={10} value={props.answers.age} onChange={handleChange('age')}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <FormControl id="weight">
                    <FormLabel>{translate('weight', props.locale)}</FormLabel>
                    <InputGroup>
                        <Input value={props.answers.weight} onChange={handleChange('weight', true, validators.posFloatValidator)} />
                        <InputRightElement children={weightUnit(props.answers.unit)} />
                    </InputGroup>
                </FormControl>

                <FormControl id="height">
                    <FormLabel>{translate('height', props.locale)}</FormLabel>
                    {heightForm(props.answers.unit)}
                </FormControl>

                <FormControl id="pa">
                    <FormLabel>
                        {translate('pa', props.locale)}{' '}
                        <Popover id='paPopover'>
                            <PopoverTrigger>
                                <InfoIcon cursor='pointer' />
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader fontWeight='bold' fontSize='lg'>{translate('paTitle', props.locale)}</PopoverHeader>
                                {translate('paTips', props.locale)}
                            </PopoverContent>
                        </Popover>
                    </FormLabel>
                    <Select placeholder={translate('paPlaceholder', props.locale)} value={props.answers.pa} onChange={handleChange('pa', true)}>
                        <option value={'1.2'}>{translate('pa1.2', props.locale)}</option>
                        <option value={'1.375'}>{translate('pa1.375', props.locale)}</option>
                        <option value={'1.55'}>{translate('pa1.55', props.locale)}</option>
                        <option value={'1.725'}>{translate('pa1.725', props.locale)}</option>
                        <option value={'1.9'}>{translate('pa1.9', props.locale)}</option>
                    </Select>
                </FormControl>

                <FormControl id="sport">
                    <FormLabel>
                        {translate('sport', props.locale)}{' '}
                        <Popover id='sportPopover'>
                            <PopoverTrigger>
                                <InfoIcon cursor='pointer' />
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader fontWeight='bold' fontSize='lg'>{translate('sportTipsTitle', props.locale)}</PopoverHeader>
                                {translate('sportTips', props.locale)}
                            </PopoverContent>
                        </Popover>
                    </FormLabel>
                    <NumberInput max={9999} min={0} value={props.answers.sport} onChange={handleChange('sport')}>
                        <NumberInputField placeholder={translate('sportPlaceholder', props.locale)} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>

                <FormControl id="bodyFat">
                    <FormLabel>{translate('bodyFat', props.locale)}<span style={{color: 'darkgrey'}}>{translate('bodyFatExplained', props.locale)}</span></FormLabel>
                    <InputGroup>
                        <Input placeholder={translate('bodyFatPlaceholder', props.locale)} value={props.answers.bodyFat} onChange={handleChange('bodyFat', true, validators.posPercentageValidator)} />
                        <InputRightElement children='%' />
                    </InputGroup>
                </FormControl>

                <FormControl id="goal">
                    <FormLabel>{translate('goal', props.locale)}<span style={{color: 'darkgrey'}}>{translate('goalExplained', props.locale)}</span></FormLabel>
                    <Select value={props.answers.goal} onChange={handleChange('goal', true)}>
                        <option value={-0.2}>{translate('goal-0.2', props.locale)}</option>
                        <option value={-0.1}>{translate('goal-0.1', props.locale)}</option>
                        <option value={0}>{translate('goal0', props.locale)}</option>
                        <option value={0.1}>{translate('goal0.1', props.locale)}</option>
                        <option value={0.2}>{translate('goal0.2', props.locale)}</option>
                    </Select>
                </FormControl>
            </VStack>

            <Flex className={styles.CalculateButtonContainer}>
                <Spacer />
                <Button colorScheme='teal' padding='1rem 4rem' size="lg" onClick={CalculateButtonHandler}>{translate('calculate', props.locale)}</Button>
            </Flex>
        </Box>
    )
}

export default Form
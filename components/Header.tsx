import { useRouter } from "next/router";
import styles from '../styles/Header.module.css'
import { Flex, Box, Spacer, HStack, Heading, Select, IconButton, Tooltip, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import translate from '../lib/translate'

const Header = props => {
    const { toggleColorMode } = useColorMode()
    const tips = useColorModeValue(translate('toggleDark', props.locale), translate('toggleLight', props.locale))
    const variant = useColorModeValue("solid", "outline")
    const icon = useColorModeValue(<SunIcon />, <MoonIcon />)
    const bgColor = useColorModeValue('#fdfdf9', '#212838')

    const router = useRouter()
    const pageMap = {
        'en': '/',
        'zh': '/zh-tw',
        'zh-hk': '/zh-hk',
        'zh-cn': '/zh-cn'
    }
    const changeLanguageHandler = e => {
        router.push(pageMap[e.target.value])
    }

    return (
        <Box className={styles.Container} backgroundColor={bgColor} zIndex='99'>
            <Flex className={styles.Header}>
                <Box p="2">
                    <a className={styles.Home} onClick={() => router.reload()}>
                        <Heading size='md' id={styles.homeName}>{translate('homeName', props.locale)}</Heading>
                    </a>
                </Box>
                <Spacer />
                <HStack>
                    <Box>
                        <Tooltip label={tips}>
                            <IconButton
                                aria-label="toggle color theme"
                                icon={icon}
                                variant={variant}
                                onClick={toggleColorMode}
                            ></IconButton>
                        </Tooltip>
                    </Box>
                    <Select
                        w={'16vmin'}
                        maxH='40px'
                        value={props.locale}
                        onChange={changeLanguageHandler}
                    >
                        <option value='en'>English</option>
                        <option value='zh'>中文（台灣）</option>
                        <option value='zh-hk'>中文（香港）</option>
                        <option value='zh-cn'>中文（简体）</option>
                    </Select>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Header
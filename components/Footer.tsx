import styles from '../styles/Footer.module.css'
import { Flex, Spacer, Container, Link } from '@chakra-ui/react'

const Footer = props => {
    return (
        <footer className={styles.footer}>
            <Flex>
                <Container>
                    © 2021 Powered by
                    <span className={styles.logo} style={{fontSize: 'x-large', fontWeight: 'bold'}}>
                        AWS
                    </span> | S3
                </Container>
                <Spacer />
                <Link href='https://www.freeprivacypolicy.com/live/4213453c-fe11-4306-be9c-4c97dfcbb7a3'>Privacy</Link>
            </Flex>
        </footer>
    )
}

export default Footer
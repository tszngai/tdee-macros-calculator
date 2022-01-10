import styles from '../styles/Footer.module.css'
import { Center, HStack, Container, Link, Text, Wrap } from '@chakra-ui/react'
import translate from '../lib/translate'
import {
    FacebookShareButton,
    FacebookIcon,
    LineShareButton,
    LineIcon,
    PinterestShareButton,
    PinterestIcon,
    RedditShareButton,
    RedditIcon,
    TelegramShareButton,
    TelegramIcon,
    TumblrShareButton,
    TumblrIcon,
    TwitterShareButton,
    TwitterIcon,
    WeiboShareButton,
    WeiboIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
} from 'next-share';

const Footer = props => {
    return (
        <footer className={styles.footer}>
            <Container w='100%' paddingX={'1rem'}>
                <Center>
                    <Wrap className={styles.shareIcons}>
                        <FacebookShareButton
                            url={translate('website', props.locale)}
                            quote={translate('shareMsg', props.locale)}
                            hashtag={translate('shareTag', props.locale)}
                        >
                            <FacebookIcon size={32} round />
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={translate('website', props.locale)}
                            title={translate('shareMsg', props.locale)}
                        >
                            <TwitterIcon size={32} round />
                        </TwitterShareButton>
                        <PinterestShareButton
                            url={translate('website', props.locale)}
                            media={translate('shareMsg', props.locale)}
                        >
                            <PinterestIcon size={32} round />
                        </PinterestShareButton>
                        <TumblrShareButton
                            url={translate('website', props.locale)}
                            tags={translate('tumblrTags', props.locale)}
                            caption={translate('shareMsg', props.locale)}
                        >
                            <TumblrIcon size={32} round />
                        </TumblrShareButton>
                        <RedditShareButton
                            url={translate('website', props.locale)}
                            title={translate('shareMsg', props.locale)}
                        >
                            <RedditIcon size={32} round />
                        </RedditShareButton>
                        <LinkedinShareButton
                            url={translate('website', props.locale)}
                            summary={translate('shareMsg', props.locale)}
                        >
                            <LinkedinIcon size={32} round />
                        </LinkedinShareButton>
                        <WhatsappShareButton
                            url={translate('website', props.locale)}
                            title={translate('shareMsg', props.locale)}
                            separator=" - "
                        >
                            <WhatsappIcon size={32} round />
                        </WhatsappShareButton>
                        <TelegramShareButton
                            url={translate('website', props.locale)}
                            title={translate('shareMsg', props.locale)}
                        >
                            <TelegramIcon size={32} round />
                        </TelegramShareButton>
                        <LineShareButton
                            url={translate('website', props.locale)}
                            title={translate('shareMsg', props.locale)}
                        >
                            <LineIcon size={32} round />
                        </LineShareButton>
                        <WeiboShareButton
                            url={translate('website', props.locale)}
                            title={translate('shareMsg', props.locale)}
                        >
                            <WeiboIcon size={32} round />
                        </WeiboShareButton>
                    </Wrap>
                </Center>
                <Text align={'center'} className={styles.footerText}>
                    <Link display={'inline-block'} fontSize={'large'} fontWeight={'bold'} textDecoration={'underline'} href='https://www.freeprivacypolicy.com/live/4213453c-fe11-4306-be9c-4c97dfcbb7a3'>Privacy</Link>{' '}
                    © 2022 Powered by
                    <span className={styles.logo} style={{fontSize: 'x-large', fontWeight: 'bold'}}>
                        AWS
                    </span> | S3
                </Text>
            </Container>
        </footer>
    )
}

export default Footer
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main';
import Fonts from '../components/fonts';
import theme from '../lib/theme';
import { appWithTranslation } from 'next-i18next';
import '../i18n';
import { AnimatePresence } from 'framer-motion';

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}>
                <AnimatePresence mode='wait' initial={true}>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default appWithTranslation(Website)
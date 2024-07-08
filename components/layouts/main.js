import React from 'react'
import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Main = ({ children, router }) => {
    const { t } = useTranslation('common')

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{t('tab-title')}</title>
            </Head>

            <Navbar path={router.asPath}/>
        
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
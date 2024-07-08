import NextLink from 'next/link'
import { Container, Box, Heading, Text, Divider, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const NotFound = () => {
    const { t } = useTranslation('common')

    return (
        <Container>
            <Heading as="h1">
                {t('not-found')}
            </Heading>
            <Text>
                {t('not-found-desc')}
            </Text>

            <Divider my={6} />

            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button as="a" colorScheme="teal">
                        {t('back-home')}
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default NotFound
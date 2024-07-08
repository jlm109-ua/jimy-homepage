import NextLink from 'next/link'
import { Container, Box, Heading, Text, Divider, Button } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

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
                <NextLink href="/">
                    <Button colorScheme='#008080'>
                        {t('back-home')}
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}
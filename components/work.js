import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useHasMounted from './useHasMounted'

export const Title = ({ children }) => {
    const { t } = useTranslation('common')
    const hasMounted = useHasMounted()

    if (!hasMounted) {
        return null
    } 

    return (
        <Box>
            <NextLink href="/works" passHref>
                <Link>{t('works')}</Link>
            </NextLink>

            <span>
                &nbsp;<ChevronRightIcon/>&nbsp;
            </span>

            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    )
}

export const WorkImage = ({ src, alt }) => (
    <Image
        borderRadius="lg"
        w="full"
        src={src}
        alt={alt}
        mb={4}
    />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});
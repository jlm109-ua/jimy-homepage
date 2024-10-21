import { Container, Heading, SimpleGrid, Box, Badge } from '@chakra-ui/react'
import Section from '../components/section'
import useHasMounted from '../components/useHasMounted'
import { WorkGridItem } from '../components/grid-item'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../components/layouts/article'
import homepage from '../public/images/homepage.jpg'
import tfg from '../public/images/tfg.jpg'
import duskiesWebpage from '../public/images/duskies.jpg'
import todojimy from '../public/images/todojimy.png'
//import alex from '../public/images/alex.png'
import hangman from '../public/images/hangman.png'
import memojimy from '../public/images/missingImage.png'

const Works = () => {
    const hasMounted = useHasMounted()
    const { t } = useTranslation('common')

    if (!hasMounted) {
        return null
    }

    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    {t('works')}
                </Heading>
                <SimpleGrid columns={[1, 1, 1]}>
                    <Section>
                        <WorkGridItem id="memojimy" title={t('homepage-item-7-title')} thumbnail={memojimy}>
                            {t('homepage-item-7-desc')}
                            <Box mt={2}>
                                <Badge colorScheme="teal">{t('finished')}</Badge>
                            </Box>
                        </WorkGridItem>
                        <WorkGridItem id="hangman" title={t('homepage-item-6-title')} thumbnail={hangman}>
                            {t('homepage-item-6-desc')}
                            <Box mt={2}>
                                <Badge colorScheme="teal">{t('finished')}</Badge>
                            </Box>
                        </WorkGridItem>
                        {/*
                        <WorkGridItem id="a-lex" title={t('homepage-item-5-title')} thumbnail={alex}>
                            {t('homepage-item-5-desc')}
                            <Box mt={2}>
                                <Badge colorScheme="red">{t('in-progress')}</Badge>
                            </Box>
                        </WorkGridItem>
                        */}
                        <WorkGridItem id="todojimy" title={t('homepage-item-4-title')} thumbnail={todojimy}>
                            {t('homepage-item-4-desc')}
                            <Box mt={2}>
                                <Badge colorScheme="teal">{t('finished')}</Badge>
                            </Box>
                        </WorkGridItem>
                        <WorkGridItem
                            id="duskies-webpage"
                            title={t('homepage-item-3')}
                            thumbnail={duskiesWebpage}
                        >
                            {t('homepage-item-3-desc')}
                            <Box mt={2}>
                                <Badge colorScheme="red">{t('in-progress')}</Badge>
                            </Box>
                        </WorkGridItem>
                        <WorkGridItem id="tfg" title={t('homepage-item-2')} thumbnail={tfg}>
                            {t('homepage-item-2-desc')}
                            <Box mt={2}>
                                <Badge colorScheme="teal">{t('finished')}</Badge>
                            </Box>
                        </WorkGridItem>
                        <WorkGridItem id="homepage" title={t('homepage-item-1')} thumbnail={homepage}>
                            {t('homepage-item-1-desc')}
                            <Box mt={2}>
                                <Badge colorScheme="teal">{t('finished')}</Badge>
                            </Box>
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
})

export default Works
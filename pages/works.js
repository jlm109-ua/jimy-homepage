import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import useHasMounted from '../components/useHasMounted'
import { WorkGridItem } from '../components/grid-item'
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../components/layouts/article';
import homepage from '../public/images/homepage.jpg'
import tfg from '../public/images/tfg.jpg'

const Works = () => {
    const hasMounted = useHasMounted();
    const { t } = useTranslation('common');

    if(!hasMounted) {
        return null
    }

    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    {t('works')}
                </Heading>
                <SimpleGrid
                    columns={[1, 1, 1]}
                >
                    <Section>
                        <WorkGridItem
                            id="homepage"
                            title={t('homepage-item-1')}
                            thumbnail={homepage}
                        >
                            {t('homepage-item-1-desc')}
                        </WorkGridItem>
                        <WorkGridItem
                            id="otroProyecto"
                            title={t('homepage-item-2')}
                            thumbnail={tfg}
                        >
                            {t('homepage-item-2-desc')}
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
});

export default Works
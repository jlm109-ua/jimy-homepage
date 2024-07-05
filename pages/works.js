import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import useHasMounted from '../components/useHasMounted'
import { WorkGridItem } from '../components/grid-item'
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import missingImage from '../public/images/missingImage.png'

const Works = () => {
    const hasMounted = useHasMounted();
    const { t } = useTranslation('common');

    if(!hasMounted) {
        return null
    } else {
        return (
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    {t('works')}
                </Heading>
                <SimpleGrid
                    columns={[1, 1, 2]}
                    gap={6}
                >
                    <Section>
                        <WorkGridItem
                            id="homepage"
                            title={t('homepage-item-1')}
                            thumbnail={missingImage}
                        >
                            {t('homepage-item-1-desc')}
                        </WorkGridItem>
                        <WorkGridItem
                            id="otroProyecto"
                            title={t('homepage-item-2')}
                            thumbnail={missingImage}
                        >
                            {t('homepage-item-2-desc')}
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        )
    }
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Works
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import useHasMounted from '../components/useHasMounted'
import { WorkGridItem } from '../components/grid-item'
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import missingImage from '../public/images/missingImage.png'
import Layout from '../components/layouts/article';
import { useEffect } from 'react';

const Works = () => {
    const hasMounted = useHasMounted();
    const { t } = useTranslation('common');
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        const fetchPreview = async () => {  
            try {
                const res = await fetch(`/api/generatePreview?url=https://www.jimy-homepage.vercel.app`);
                
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                } else {
                    const blob = await res.blob();
                    const url = URL.createObjectURL(blob);
                    setPreviewUrl(url);
                }
            } catch (error) {
                console.error('Error fetching preview: ', error);
            }
        };

        fetchPreview();
    }, []);

    if(!hasMounted) {
        return null
    } else {
        return (
            <Layout>
                <Container>
                    <Heading as="h3" fontSize={20} mb={4}>
                        {t('works')}
                    </Heading>
                    <SimpleGrid
                        columns={[1, 1, 1]}
                        gap={6}
                    >
                        <Section>
                            <WorkGridItem
                                id="homepage"
                                title={t('homepage-item-1')}
                                thumbnail={previewUrl || missingImage}
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
            </Layout>
        )
    }
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Works
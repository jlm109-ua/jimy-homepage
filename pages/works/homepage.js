import { Container, Badge } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useHasMounted  from '../../components/useHasMounted'

const Work = () => {
    const { t } = useTranslation('common')
    const hasMounted = useHasMounted()

    if (!hasMounted) {
        return null
    }
    
    return (
        <Layout title="Homepage">
            <Container>
                <Title>
                    {t('homepage-item-1')}
                    <Badge ml={1}>2024</Badge>
                </Title>
                <P>
                    {t('homepage-item-1-desc')}
                </P>
            </Container>
        </Layout>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Work
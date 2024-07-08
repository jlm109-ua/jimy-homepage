import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useTranslation } from 'react-i18next'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    const { t } = useTransaltion('common')
    
    return (
        <Layout title="Homepage">
            <Container>
                <Title>
                    {t('homepage-item-1')}
                    <Badge>2024</Badge>
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
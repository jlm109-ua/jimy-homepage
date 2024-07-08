import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useHasMounted  from '../../components/useHasMounted'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
                    {t('homepage-item-1-large')}
                </P>

                <List>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/jlm109-ua/jimy-homepage">
                        https://github.com/jlm109-ua/jimy-homepage <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
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
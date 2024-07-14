import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Title } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useHasMounted from '../../components/useHasMounted'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Meta } from '../../components/work'

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
                    {t('homepage-item-3')}
                    <Badge ml={1}>2024</Badge>
                </Title>
                <P>
                    {t('homepage-item-3-large')}
                </P>

                <List>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/jlm109-ua/duskiweb">
                            Duskiweb <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Vercel</Meta>
                        <Link href="https://duskiweb.vercel.app">
                            Duskies <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <P>
                    {t('homepage-item-3-large-2')}
                </P>

                <List>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/jlm109-ua">
                            jlm109 <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/hxst1">
                            hxst1 <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/g0nzu">
                            g0nzu <ExternalLinkIcon mx="2px" />
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
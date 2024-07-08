import { Container, Badge, Heading, List, ListItem, Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useHasMounted  from '../../components/useHasMounted'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Meta } from '../../components/work'

const TFG = () => {
    const { t } = useTranslation('tfg')
    const hasMounted = useHasMounted()

    if(!hasMounted) {
        return null
    }

    return (
        <Layout>
            <Container>
                <Heading>
                    {t('tfg-title')}
                    <Badge ml={1}>2024</Badge>
                </Heading>
                <P>
                    {t('tfg-desc')}
                </P>
                
                <List>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/jlm109-ua/tfg">
                        TFG <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <P>
                    {t('tfg-desc-2')}
                </P>

                <List>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/HPCCS/PARIS">
                        PARIS <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/UNPLaS/UN-FIT">
                        UN-FIT <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'tfg'])),
    },
});

export default TFG
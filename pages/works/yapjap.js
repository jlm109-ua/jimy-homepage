'use client'

import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Layout from '../../components/layouts/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useHasMounted from '../../components/useHasMounted'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Meta, Title } from '../../components/work'
import P from '../../components/paragraph'

const YapJap = () => {
    const { t } = useTranslation('common')
    const hasMounted = useHasMounted()

    if (!hasMounted) {
        return null
    }

    return (
        <Layout title="YapJap!">
            <Container>
                <Title>
                    {t('homepage-item-9-title')}
                    <Badge ml={1}>2024</Badge>
                </Title>

                <P>{t('homepage-item-9-intro')}</P>

                <List>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/jlm109-ua/yapjap">
                            https://github.com/jlm109-ua/yapjap <ExternalLinkIcon className="inline h-4 w-4" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>App</Meta>
                        <Link href="https://yapjap.vercel.app">
                            yapjap.vercel.app <ExternalLinkIcon className="inline h-4 w-4" />
                        </Link>
                    </ListItem>
                </List>

                <List spacing={2} mt={4}>
                    <ListItem>
                        <Meta>{t('homepage-item-9-features-title')}</Meta>
                        <ul>
                            <li>{t('homepage-item-9-features-1')}</li>
                            <li>{t('homepage-item-9-features-2')}</li>
                            <li>{t('homepage-item-9-features-3')}</li>
                            <li>{t('homepage-item-9-features-4')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('homepage-item-9-techs-title')}</Meta>
                        <ul>
                            <li>{t('homepage-item-9-techs-1')}</li>
                            <li>{t('homepage-item-9-techs-2')}</li>
                            <li>{t('homepage-item-9-techs-3')}</li>
                            <li>{t('homepage-item-9-techs-4')}</li>
                            <li>{t('homepage-item-9-techs-5')}</li>
                        </ul>
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
})

export default YapJap
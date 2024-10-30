'use client'

import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import Layout from '../../components/layouts/article'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useHasMounted from '../../components/useHasMounted'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Meta, Title } from '../../components/work'
import P from '../../components/paragraph'

const ParticleLife = () => {
    const { t } = useTranslation('common')
    const hasMounted = useHasMounted()

    if (!hasMounted) {
        return null
    }

    return (
        <Layout title="Particle Life">
            <Container>
                <Title>
                    {t('homepage-item-8-title')}
                    <Badge ml={1}>2024</Badge>
                </Title>

                <P>{t('homepage-item-8-intro')}</P>

                <List>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/jlm109-ua/particle-life">
                            https://github.com/jlm109-ua/particle-life <ExternalLinkIcon className="inline h-4 w-4" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>App</Meta>
                        <Link href="https://particle-life-arua.vercel.app">
                            particle-life-arua.vercel.app <ExternalLinkIcon className="inline h-4 w-4" />
                        </Link>
                    </ListItem>
                </List>

                <List spacing={2} mt={4}>
                    <ListItem>
                        <Meta>{t('homepage-item-8-features-title')}</Meta>
                        <ul>
                            <li>{t('homepage-item-8-features-1')}</li>
                            <li>{t('homepage-item-8-features-2')}</li>
                            <li>{t('homepage-item-8-features-3')}</li>
                            <li>{t('homepage-item-8-features-4')}</li>
                            <li>{t('homepage-item-8-features-5')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('homepage-item-8-config-title')}</Meta>
                        <ul>
                            <li>{t('homepage-item-8-config-1')}</li>
                            <li>{t('homepage-item-8-config-2')}</li>
                            <li>{t('homepage-item-8-config-3')}</li>
                            <li>{t('homepage-item-8-config-4')}</li>
                            <li>{t('homepage-item-8-config-5')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('homepage-item-8-collab-title')}</Meta>
                        <Link href="https://github.com/hxst1">
                            hxst1 <ExternalLinkIcon className="inline h-4 w-4" />
                        </Link>
                        <p>{t('homepage-item-8-collab-text')}</p>
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

export default ParticleLife
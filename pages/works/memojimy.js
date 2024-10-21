import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layouts/article';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useHasMounted from '../../components/useHasMounted';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Meta, Title } from '../../components/work';
import P from '../../components/paragraph';

const Memojimy = () => {
    const { t } = useTranslation('common')
    const hasMounted = useHasMounted()

    if (!hasMounted) {
        return null;
    }

    return (
        <Layout title="Memoji-my">
            <Container>
                <Title>
                    {t('homepage-item-7-title')}
                    <Badge ml={1}>2024</Badge>
                </Title>

                <P>{t('homepage-item-7-intro')}</P>

                <List>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/jlm109-ua/memoji-my">
                            https://github.com/jlm109-ua/memoji-my <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>App</Meta>
                        <Link href="https://memoji-my.vercel.app">
                            memoji-my.vercel.app <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <List spacing={2} mt={4}>
                    <ListItem>
                        <Meta>{t('homepage-item-7-features-title')}</Meta>
                        <ul>
                            <li>{t('homepage-item-7-features-1')}</li>
                            <li>{t('homepage-item-7-features-2')}</li>
                            <li>{t('homepage-item-7-features-3')}</li>
                            <li>{t('homepage-item-7-features-4')}</li>
                            <li>{t('homepage-item-7-features-5')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('homepage-item-7-tech-title')}</Meta>
                        <ul>
                            <li>{t('homepage-item-7-tech-1')}</li>
                            <li>{t('homepage-item-7-tech-2')}</li>
                            <li>{t('homepage-item-7-tech-3')}</li>
                            <li>{t('homepage-item-7-tech-4')}</li>
                            <li>{t('homepage-item-7-tech-5')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('homepage-item-7-how-to-play-title')}</Meta>
                        <ol>
                            <li>{t('homepage-item-7-how-to-play-1')}</li>
                            <li>{t('homepage-item-7-how-to-play-2')}</li>
                            <li>{t('homepage-item-7-how-to-play-3')}</li>
                            <li>{t('homepage-item-7-how-to-play-4')}</li>
                        </ol>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Memojimy;
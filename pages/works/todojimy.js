import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layouts/article';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useHasMounted from '../../components/useHasMounted';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Meta, Title } from '../../components/work';
import P from '../../components/paragraph';

const ToDoJimy = () => {
    const { t } = useTranslation('common')
    const hasMounted = useHasMounted()

    if (!hasMounted) {
        return null;
    }

    return (
        <Layout title="ToDoJimy">
            <Container>
                <Title>
                    {t('homepage-item-4-title')}
                    <Badge ml={1}>2024</Badge>
                </Title>

                <P>{t('homepage-item-4-intro')}</P>

                <List>
                    <ListItem>
                        <Meta>GitHub</Meta>
                        <Link href="https://github.com/jlm109-ua/todojimy">
                            https://github.com/jlm109-ua/todojimy <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>App</Meta>
                        <Link href="todojimy.vercel.app">
                            todojimy.vercel.app <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>

                <List spacing={2} mt={4}>
                    <ListItem>
                        <Meta>{t('homepage-item-4-frontend-title')}</Meta>
                        <ul>
                            <li>{t('homepage-item-4-frontend-1')}</li>
                            <li>{t('homepage-item-4-frontend-2')}</li>
                            <li>{t('homepage-item-4-frontend-3')}</li>
                            <li>{t('homepage-item-4-frontend-4')}</li>
                            <li>{t('homepage-item-4-frontend-5')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('homepage-item-4-backend-title')}</Meta>
                        <ul>
                            <li>{t('homepage-item-4-backend-1')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('homepage-item-4-features-title')}</Meta>
                        <ul>
                            <li>{t('homepage-item-4-features-1')}</li>
                            <li>{t('homepage-item-4-features-2')}</li>
                            <li>{t('homepage-item-4-features-3')}</li>
                            <li>{t('homepage-item-4-features-4')}</li>
                            <li>{t('homepage-item-4-features-5')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('homepage-item-4-deployment-title')}</Meta>
                        <P>{t('homepage-item-4-deployment-desc')}</P>
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

export default ToDoJimy;

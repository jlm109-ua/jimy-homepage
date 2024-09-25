import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layouts/article';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import useHasMounted from '../../components/useHasMounted';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Meta, Title } from '../../components/work';
import P from '../../components/paragraph';

const ToDoJimy = () => {
    const { t } = useTranslation('homepage-item-4');
    const hasMounted = useHasMounted();

    if (!hasMounted) {
        return null;
    }

    return (
        <Layout title="ToDoJimy">
            <Container>
                <Title>
                    {t('title')}
                    <Badge ml={1}>2024</Badge>
                </Title>

                <P>{t('intro')}</P>

                <List spacing={2} mt={4}>
                    <ListItem>
                        <Meta>{t('frontend-title')}</Meta>
                        <ul>
                            <li>{t('frontend-1')}</li>
                            <li>{t('frontend-2')}</li>
                            <li>{t('frontend-3')}</li>
                            <li>{t('frontend-4')}</li>
                            <li>{t('frontend-5')}</li>
                            <li>{t('frontend-6')}</li>
                            <li>{t('frontend-7')}</li>
                            <li>{t('frontend-8')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('backend-title')}</Meta>
                        <ul>
                            <li>{t('backend-1')}</li>
                            <li>{t('backend-2')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('features-title')}</Meta>
                        <ul>
                            <li>{t('features-1')}</li>
                            <li>{t('features-2')}</li>
                            <li>{t('features-3')}</li>
                            <li>{t('features-4')}</li>
                            <li>{t('features-5')}</li>
                            <li>{t('features-6')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('optimizations-title')}</Meta>
                        <ul>
                            <li>{t('optimizations-1')}</li>
                            <li>{t('optimizations-2')}</li>
                            <li>{t('optimizations-3')}</li>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <Meta>{t('deployment-title')}</Meta>
                        <P>{t('deployment-desc')}</P>
                    </ListItem>
                </List>

                <P>{t('conclusion')}</P>
            </Container>
        </Layout>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'homepage-item-4'])),
    },
});

export default ToDoJimy;

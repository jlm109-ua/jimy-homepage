import React from 'react';
import NextLink from 'next/link';
import { Button, Container, Box, Heading, Image, useColorModeValue, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear, BioText } from '../components/bio';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import useHasMounted from '../components/useHasMounted';

const Page = () => {
    const { t } = useTranslation('common');
    const hasMounted = useHasMounted();

    /*
    FOTO DE PERFIL (donde pfp)
    <Image 
        borderColor="whiteAlpha.800" 
        borderWidth={2} 
        borderStyle="solid" 
        maxWidth="1000px" 
        display="inline-block"
        borderRadius="full"
        src="/images/profile.jpg"
        alt="Profile image"
    />
    */
    if (!hasMounted) {
        return null
    } else {
        return (
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" mb={6} textColor={'white'}>
                    {t('catch')}
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title" textColor="darkred" mb={2}>
                            Juan Llinares
                        </Heading>
                        <p>{t('subtitle')}</p>
                    </Box>
                </Box>
                <Box 
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    PFP
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        {t('about-title')}
                    </Heading>
                    <Paragraph>
                        {t('about-text')}
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works" passHref>
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                {t('my-portfolio')}
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        {t('bio-title')}
                    </Heading>
                    <BioSection>
                        <BioYear>2002</BioYear>
                        <BioText>{t('bio-2002')}</BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>2020</BioYear>
                        <BioText>{t('bio-2020')}</BioText>
                    </BioSection>
                    <BioSection>
                        <BioYear>2020 to present</BioYear>
                        <BioText>{t('bio-2020-present')}</BioText>
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        {t('I-love-title')}
                    </Heading>
                    <Paragraph>
                        {t('I-love-text')} 
                    </Paragraph>
                </Section>
            </Container>
        )
    }
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Page
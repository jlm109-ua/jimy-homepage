import React from 'react';
import NextLink from 'next/link';
import { Button, Container, Box, Heading, useColorModeValue, List, ListItem, Icon, Image } from '@chakra-ui/react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import Link from 'next/link';

//import { BioSection, BioYear, BioText } from '../components/bio'; // Not used (Timeline instead)

// Translation
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// Fix the issue of window not defined in Next.js
import useHasMounted from '../components/useHasMounted';

// Layout
import Layout from '../components/layouts/article';

// Timeline
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Icons
//import { ChevronRightIcon } from '@chakra-ui/icons';
//import WorkIcon from '../components/icons/work';
//import SchoolIcon from '../components/icons/school';
//import StarIcon from '../components/icons/star';
import BabyIcon from '../components/icons/baby';
import BookIcon from '../components/icons/book';

// Social
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const Page = () => {
    const { t } = useTranslation('common');
    const hasMounted = useHasMounted();
    const textColors = useColorModeValue('white', '#008080');
    const bgColors = useColorModeValue('#008080', 'white');
    const invBgColors = useColorModeValue('white', '#008080');
    const borderColors = useColorModeValue('#008080', 'whiteAlpha.800');

    if (!hasMounted) {
        return null
    } else {
        return (
            <Layout>
                <Container>
                    <Box 
                        borderRadius="lg" 
                        bg={bgColors} 
                        p={3} 
                        align="center" 
                        mb={6} 
                        textColor={textColors}
                        fontWeight={'bold'}
                    >
                        {t('welcome')}
                    </Box>
                    <Box display={{ md: 'flex' }}>
                        <Box flexGrow={1}>
                            <Heading as="h2" variant="page-title" textColor="#008080" mb={2}>
                                Juan Llinares
                            </Heading>
                            <p>{t('subtitle')}</p>
                        </Box>
                    </Box>
                    <Box 
                        flexShrink={0}
                        mt={{ base: 4, md: 4 }}
                        ml={{ md: 6 }}
                        mr={{ md: 6 }}
                        align="center"
                    >
                        <Image 
                            borderColor={borderColors}
                            borderWidth={4} 
                            borderStyle="solid" 
                            display="inline-block"
                            src="/images/pfp.jpg"
                            alt="Profile image"
                        />
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
                                <Button 
                                    bg={bgColors}
                                    _hover={{ bg: '#006666' }}
                                    textColor={textColors}
                                >
                                    {t('my-portfolio')}
                                </Button>
                            </NextLink>

                            <NextLink href="/work-experience" passHref>
                                <Button
                                    bg={bgColors}
                                    _hover={{ bg: '#006666' }}
                                    textColor={textColors}
                                    ml={2}
                                >
                                    {t('my-work-exp')}
                                </Button>
                            </NextLink>
                        </Box>
                    </Section>

                    <Section delay={0.2}>
                        <Heading as="h3" variant="section-title">
                            {t('bio-title')}
                        </Heading>
                        
                        <VerticalTimeline
                            layout="1-column"
                        >
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2020 - Present"
                                iconStyle={{ background: '#008080', color: 'white' }}
                                contentStyle={{ background: bgColors, color: textColors, boxShadow: '0 3px 0 ' + invBgColors }}
                                contentArrowStyle={{ borderRight: `7px solid ${bgColors}` }}
                                icon={<BookIcon />}
                            >
                                <h3
                                    className='vertical-timeline-element-title'
                                    style={{ 
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {t('bio-item-3')}
                                </h3>                                
                                <p
                                    style={{
                                        fontWeight: 'normal'
                                    }}
                                >
                                    {t('bio-item-3-desc')}
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2014 - 2020"
                                iconStyle={{ background: '#008080', color: 'white'}}
                                contentStyle={{ background: bgColors, color: textColors, boxShadow: '0 3px 0 ' + invBgColors }}
                                contentArrowStyle={{ borderRight: `7px solid ${bgColors}` }}
                                icon={<BookIcon />}
                            >
                                <h3
                                    className='vertical-timeline-element-title'
                                    style={{ 
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {t('bio-item-2')}
                                </h3>                                
                                <p
                                    style={{
                                        fontWeight: 'normal'
                                    }}
                                >
                                    {t('bio-item-2-desc')}
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className='vertical-timeline-element--education'
                                date="2002"
                                iconStyle={{ background: '#008080', color: 'white' }}
                                contentStyle={{ background: bgColors, color: textColors, boxShadow: '0 3px 0 ' + invBgColors }}
                                contentArrowStyle={{ borderRight: `7px solid ${bgColors}` }}
                                icon={<BabyIcon />}
                            >
                                <h3
                                    className='vertical-timeline-element-title'
                                    style={{ 
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {t('bio-item-1')}
                                </h3>                                
                                <p
                                    style={{
                                        fontWeight: 'normal'
                                    }}
                                >
                                    {t('bio-item-1-desc')}
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </Section>

                    <Section delay={0.3}>
                        <Heading as="h3" variant="section-title">
                            {t('I-love-title')}
                        </Heading>
                        <Paragraph>
                            {t('I-love-text')} 
                        </Paragraph>
                    </Section>

                    <Section delay={0.4}>
                        <Heading as="h3" variant="section-title">
                            {t('social-title')}
                        </Heading>
                        <List>
                            <ListItem>
                                <Link href="https://linked.in/juan-llinares-mauri" target="_blank">
                                    <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoLinkedin}/>}>Juan Llinares Mauri</Button>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="https://github.com/jlm109-ua" target="_blank">
                                    <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoGithub}/>}>@jlm109-ua</Button>
                                </Link>
                            </ListItem>
                        </List>
                    </Section>
                </Container>
            </Layout>
        )
    }
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Page
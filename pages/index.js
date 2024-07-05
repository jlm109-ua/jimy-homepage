import React from 'react';
import NextLink from 'next/link';
import { Button, Container, Box, Heading, Image, useColorModeValue, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear, BioText } from '../components/bio';

const Page = () => {
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
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="center" mb={6} textColor={'white'}>
                Hello, I&apos;m Jimy!
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" textColor="darkred" mb={2}>
                        Jimy
                    </Heading>
                    <p>Developer / Designer</p>
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
                    Bio
                </Heading>
                <Paragraph>Juan Llinares, also known as Jimy, is a software developer and a car enthusiast. 
                    He is currently finishing his degree in Computer Science at the University of Alicante. 
                    He is passionate about cars and technology, and he is always looking for new challenges 
                    to improve his skills.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works" passHref>
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Trajectory
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                    <BioText> Born in Villajoyosa, Spain.</BioText>
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    <BioText>Finished Spanish Scientific Bacceralaureate.</BioText>
                </BioSection>
                <BioSection>
                    <BioYear>2020 to present</BioYear>
                    <BioText>Started Computer Science at the University of Alicante.</BioText>
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I love
                </Heading>
                <Paragraph>
                    Programming, Cars, Design, Music, Machine Learning. 
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page
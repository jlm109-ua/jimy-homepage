import React from 'react'
import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react';
import Section from '../components/section';

const Page = () => {
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
                <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="1000px" 
                    display="inline-block"
                    borderRadius="full"
                    //src="/images/profile.jpg"
                    alt="Profile image"
                />
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <p>Info</p>
            </Section>
            prrrrrrrrrrup
        </Container>
    );
}

export default Page
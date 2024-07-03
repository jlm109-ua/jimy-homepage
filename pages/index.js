import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="darkred" p={3} align="center" mb={6} textColor={'white'}>
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
        </Container>
    );
}

export default Page
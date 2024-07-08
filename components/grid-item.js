import NextLink from 'next/link'
import Image from 'next/image'
import {Box, Text, LinkBox, LinkOverlay} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useColorModeValue } from '@chakra-ui/color-mode'

export const GridItem = ({ children, href, title, thumbnail }) => {
    return (
        <Box
            w="100%"
            align="center"
        >
            <LinkBox
                cursor="pointer"
            >
                <Image 
                    src={thumbnail}
                    alt={title}
                    className='grid-item-thumbnail'
                    placeholder='blur'
                    loading='lazy'
                />
                <LinkOverlay 
                    href={href} 
                    target='_blank'
                >
                    <Text 
                        mt={2}
                    >
                        {title}
                    </Text>
                </LinkOverlay>
                <Text 
                    fontSize={14}
                >
                    {children}
                </Text>
            </LinkBox>
        </Box>
    );
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
    const borderColors = useColorModeValue('#008080', 'whiteAlpha.800');

    return (
        <Box
            w="100%"
            align="center"
            mb={4}
        >
            <NextLink href={`/works/${id}`}>
                <LinkBox cursor="pointer">
                    <Image
                        src={thumbnail}
                        alt={title}
                        className='grid-item-thumbnail'
                        placeholder='blur'
                    />
                    <LinkOverlay href={`/works/${id}`}>
                        <Text 
                            mt={2}
                            fontSize={20}
                            fontWeight={'bold'}
                        >
                            {title}
                        </Text>
                    </LinkOverlay>
                    <Text 
                        fontSize={14}
                    >
                        {children}
                    </Text>
                </LinkBox>
            </NextLink>
        </Box>
    );
}

export const GridItemStyle = () => {
    <Global styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
        `}
    />
}
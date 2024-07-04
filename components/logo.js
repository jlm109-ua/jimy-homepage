import Link from 'next/link'
import StarIcon from './icons/star'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

> svg {
  transition: 200ms ease;
}

&:hover > svg {
  transform: rotate(20deg);
}
`

const Logo = () => {
    return (
      <Link href="/" scroll={false} passHref>
        
          <LogoBox>
            <StarIcon/>
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily='M PLUS Rounded 1c", sans-serif'
              fontWeight="bold"
              ml={3}
            >
              Jimy
            </Text>
          </LogoBox>
        
      </Link>
    )
  }

export default Logo
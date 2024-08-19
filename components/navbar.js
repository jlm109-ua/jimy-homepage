import Logo from './logo'
import NextLink from 'next/link'
import useHasMounted from './useHasMounted' // Fix the issue of window not defined in Next.js
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './language-switcher-button'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('black', 'whiteAlpha.900')

    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? '#008080' : undefined}
                color={active ? '202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { t } = useTranslation('common')

    const { path } = props
    const hasMounted = useHasMounted()
    //console.log({ hasMounted })

    const bgColors = useColorModeValue('#dcd7d4', '#202023')

    if (!hasMounted) {
        return null
    } else {
        return (
            <Box
                position="fixed"
                as="nav"
                w="100%"
                bg={bgColors}
                style={{ backdropFilter: 'blur(10px)' }}
                zIndex={1}
                {...props}
            >
                <Container
                    display={"flex"}
                    p={2}
                    maxW="container.md"
                    wrap="wrap"
                    align="center"
                    justify="space-between"
                >
                    <Flex align="center" mr={5}>
                        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                            <Logo />
                        </Heading>
                    </Flex>

                    <Stack
                        direction={{ base: 'column', md: 'row' }}
                        display={{ base: 'none', md: 'flex' }}
                        width={{ base: 'full', md: 'auto' }}
                        flexGrow={1}
                        mt={{ base: 4, nmd: 0 }}
                    >
                        <LinkItem href="/works" path={path}>{t('works')}</LinkItem>
                        <LinkItem href="/work-experience" path={path}>{t('work-exp')}</LinkItem>
                    </Stack>

                    <Box flex={1} align="right" margin-right={1}>

                        <LanguageSwitcher />
                        <ThemeToggleButton />

                        <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                            <Menu>
                                <MenuButton
                                    as={IconButton}
                                    icon={<HamburgerIcon />}
                                    variant="outline"
                                    aria-label="Options"
                                />
                                <MenuList>
                                    <NextLink href="/works" passHref>
                                        <MenuItem as="a">{t('works')}</MenuItem>
                                    </NextLink>
                                    <NextLink href="/work-experience" passHref>
                                        <MenuItem as="a">{t('work-exp')}</MenuItem>
                                    </NextLink>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Container>
            </Box>
        );
    }
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common'])),
    },
});

export default Navbar
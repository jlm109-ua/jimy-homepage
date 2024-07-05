import { useRouter } from 'next/router'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { IoLanguage } from "react-icons/io5";

const LanguageSwitcher = () => {
    const router = useRouter();
    const { locale } = router;

    const changeLanguage = (lng) => {
        router.push(router.pathname, router.asPath, { locale: lng });
    };

    return (
        <IconButton
            aria-label='Change language'
            colorScheme={useColorModeValue('blue','blue')}
            icon={useColorModeValue(<IoLanguage/>,<IoLanguage/>)}
            onClick={() => changeLanguage(locale === 'en' ? 'es' : 'en')}
            size='sm'
            margin-right={2}
        />
    );
};

export default LanguageSwitcher;
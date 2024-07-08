import useHasMounted from "../components/useHasMounted"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "react-i18next";
import Layout from "../components/layouts/article";
import { Container, Heading } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useColorModeValue } from "@chakra-ui/color-mode";
import PizzaIcon from "../components/icons/pizza";
import BookIcon from "../components/icons/book";

const WorkExperience = () => {
    const { t } = useTranslation('work-experience')
    const hasMounted = useHasMounted()
    const textColors = useColorModeValue('white', '#008080');
    const bgColors = useColorModeValue('#008080', 'white');

    if(!hasMounted) {
        return null
    }

    return (
        <Layout>
            <Container>
                <Heading>
                    {t('work-experience')}
                </Heading>

                <VerticalTimeline
                    layout='1-column'
                >
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="06/2024"
                        iconStyle={{ background: '#5e0a0a', color: 'white' }}
                        contentStyle={{ background: '#5e0a0a', color: 'black' }}
                        contentArrowStyle={{ borderRight: `7px solid ${'#5e0a0a'}` }}
                        icon={<BookIcon />}
                    >
                        <h3
                            className='vertical-timeline-element-title'
                            style={{ 
                                fontWeight: 'bold'
                            }}
                        >
                            {t('left-BUA')}
                        </h3>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="05/2024 - Present"
                        iconStyle={{ background: '#008080', color: 'white' }}
                        contentStyle={{ background: bgColors, color: textColors }}
                        contentArrowStyle={{ borderRight: `7px solid ${bgColors}` }}
                        icon={null}
                    >
                        <h3
                            className='vertical-timeline-element-title'
                            style={{ 
                                fontWeight: 'bold'
                            }}
                        >
                            {t('bk')}
                        </h3>                                
                        <p
                            style={{
                                fontWeight: 'normal'
                            }}
                        >
                            {t('bk-role')}
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="05/2024"
                        iconStyle={{ background: '#5e0a0a', color: 'white' }}
                        contentStyle={{ background: '#5e0a0a', color: 'white' }}
                        contentArrowStyle={{ borderRight: `7px solid ${'#5e0a0a'}` }}
                        icon={<PizzaIcon />}
                    >
                        <h3
                            className='vertical-timeline-element-title'
                            style={{ 
                                fontWeight: 'bold'
                            }}
                        >
                            {t('left-telepizza')}
                        </h3>                                
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="09/2023"
                        iconStyle={{ background: '#008080', color: 'white' }}
                        contentStyle={{ background: bgColors, color: textColors }}
                        contentArrowStyle={{ borderRight: `7px solid ${bgColors}` }}
                        icon={<BookIcon />}
                    >
                        <h3
                            className='vertical-timeline-element-title'
                            style={{ 
                                fontWeight: 'bold'
                            }}
                        >
                            {t('BUA')}
                        </h3>                                
                        <p
                            style={{
                                fontWeight: 'normal'
                            }}
                        >
                            {t('BUA-role')}
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        date="07/2022"
                        iconStyle={{ background: '#008080', color: 'white' }}
                        contentStyle={{ background: bgColors, color: textColors }}
                        contentArrowStyle={{ borderRight: `7px solid ${bgColors}` }}
                        icon={<PizzaIcon />}
                    >
                        <h3
                            className='vertical-timeline-element-title'
                            style={{ 
                                fontWeight: 'bold'
                            }}
                        >
                            {t('telepizza')}
                        </h3>                                
                        <p
                            style={{
                                fontWeight: 'normal'
                            }}
                        >
                            {t('telepizza-role')}
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>                    
            </Container>
        </Layout>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'work-experience'])),
    },
});

export default WorkExperience
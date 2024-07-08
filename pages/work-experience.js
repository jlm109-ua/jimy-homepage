import useHasMounted from "../components/useHasMounted"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useTranslation } from "react-i18next";
import Layout from "../components/layouts/article";
import { Container, Heading } from "@chakra-ui/react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useColorModeValue } from "@chakra-ui/color-mode";

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
                        date="2020 - Present"
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
                </VerticalTimeline>                    
            </Container>
        </Layout>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['work-experience'])),
    },
});

export default WorkExperience
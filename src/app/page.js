'use client'; // Marque ce composant comme client-side

import { ThemeUIProvider } from 'theme-ui';
import theme from '../theme';
import { StickyProvider } from '../contexts/app/app.provider';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';
import { useRouter } from 'next/navigation';
import MyChatbot from '../components/Chatbot';
import WhatsAppIcon from '../components/WhatsAppIcon';



export default function Home() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact'); // Redirige vers la page de contact
  };

  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <MyChatbot />
          <WhatsAppIcon />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          {/* <Feature /> */}
          {/* <CoreFeature /> */}
          <WorkFlow />
          {/* <TeamSection /> */}
          <BlogSection />
          <Package />
          <TestimonialCard />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}

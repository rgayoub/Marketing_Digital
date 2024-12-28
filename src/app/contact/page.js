'use client'; // Ce fichier est côté client

import { ThemeUIProvider } from 'theme-ui';
import theme from '../../theme';
import { StickyProvider } from '../../contexts/app/app.provider';
import Layout from '../../components/layout';
import Contact from '../../components/form';

export default function ContactPage() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        {/* <Layout> */}
          <Contact />
        {/* </Layout> */}
      </StickyProvider>
    </ThemeUIProvider>
  );
}

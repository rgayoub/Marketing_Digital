'use client'; // Ce fichier est côté client

import { ThemeUIProvider } from 'theme-ui';
import theme from '../../theme';
import { StickyProvider } from '../../contexts/app/app.provider';
import Layout from '../../components/layout';
import Audiovisual from '../../components/Audiovisual';

export default function ContactPage() {
  return (
    <ThemeUIProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Audiovisual />
        </Layout>
      </StickyProvider>
    </ThemeUIProvider>
  );
}

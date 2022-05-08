import type { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import createCache from '@emotion/cache';

const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <CssBaseline />
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { useAppState } from '.';
import { FC, ReactNode } from 'react';


const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const cacheLtr = createCache({
  key: 'muiltr',
});
 
export interface EmotionCacheProviderProps {
    children: ReactNode;
    }


export const EmotionCacheProvider : FC<EmotionCacheProviderProps> = ({ children }) => {
  const { appState : {preferences} } = useAppState();
  const isRtl = () => preferences.lang === 'ar';
  return (
    <CacheProvider value={isRtl() ? cacheRtl : cacheLtr}>
      <Box dir={isRtl() ? 'rtl' : 'ltr'}>{children}</Box>
    </CacheProvider>
  );
};

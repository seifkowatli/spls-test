import { FC, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export interface ReactQueryProviderProps {
  children: ReactNode;
}

export const ReactQueryProvider : FC<ReactQueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

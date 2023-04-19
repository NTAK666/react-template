import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactLocation, Router } from '@tanstack/react-location';
import { routes } from '@/routes';

const location = new ReactLocation();

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router location={location} routes={routes} />
      </QueryClientProvider>
    </>
  );
}

export default App;

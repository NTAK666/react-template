import RootLayout from '@/layouts/root.layout';
import HomePage from '@/pages/home.page';
import AboutPage from '@/pages/about.page';
import StackPage from '@/pages/stack.page';
import NotFoundPage from '@/pages/404.page';
import CounterPage from '@/pages/counter.page';
import FetchPage from '@/pages/fetch.page';

export const routes = [
  {
    path: '',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/stack', element: <StackPage /> },
      { path: '/counter', element: <CounterPage /> },
      { path: '/fetch', element: <FetchPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

import Link from 'next/link';
import HeadContent from '../components/HeadContent';
import type { AppProps } from 'next/app';

import './index.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
};

export default MyApp; 
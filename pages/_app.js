import '../styles/globals.css';
import { FronteggProvider } from '@frontegg/nextjs'

const contextOptions = {
  baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  clientId: `${process.env.NEXT_PUBLIC_CLIENT_ID}`
  // baseUrl: 'https://app-e9sp8djc4yrt.frontegg.com',
  // clientId: '696c2641-e54b-4b80-bdf9-36e8745a38ee'
};

function MyApp({ Component, pageProps }) {
  return (
    <FronteggProvider
      contextOptions={contextOptions}
      hostedLoginBox={true}
    >
      <Component {...pageProps} />
    </FronteggProvider>
  );
}

export default MyApp;
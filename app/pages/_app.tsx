import { VT323 } from 'next/font/google';
 
const vt323 = VT323({ weight: ['400'] });
 
export default function MyApp({ Component, pageProps }: any) {
  return (
    <main className={vt323.className}>
      <Component {...pageProps} />
    </main>
  );
}
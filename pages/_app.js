import Navbar from '../components/navbar'
import '../styles/globals.css'
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      
      <Navbar/>
      <Component {...pageProps}/>
    </>
  );
}

export default App

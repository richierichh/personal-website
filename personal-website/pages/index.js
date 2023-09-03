import Head from 'next/Head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Experience from '@/components/Experience';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
import Projects from '../components/Projects';
import About from '@/components/About';

export default function Index() {
  return (
    <div className="dark:bg-stone-900 ">
      <Head>
        <title> Richard Liao </title>
      </Head>

      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar/>
        <Home/>
        <Experience/>
        <Projects/>
        <About/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

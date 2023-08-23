import Head from 'next/Head'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Experience from '@/components/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <div> 
      <Head>
        <title> Richard Liao </title>
      </Head>
     <Navbar/>
     <Home/>
     <Experience/>
    </div>
  )
}

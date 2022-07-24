import { symlink } from 'fs'
import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div className='bg-[url("/images/sky.jpeg")] h-[100vh] flex flex-col'>
      <Layout />
    </div>
  )
}

export default Home

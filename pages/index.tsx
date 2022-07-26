import type { NextPage } from 'next'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div className='bg-[url("/images/sky.jpeg")] bg-cover h-[100vh] flex flex-col'>
      <Layout />
    </div>
  )
}

export default Home

import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Octave</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/octave.png" />
      </Head>
      {/** Header */}
      <Header />
      {/** Feed */}
      <Feed />
      {/** Modal */}
      <Modal />
    </div>
  )
}
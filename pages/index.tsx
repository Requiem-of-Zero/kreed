import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen ">
      <Head>
        <title>Kreed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        {/* Banner */}

        <section>
          {/* Rows */}
        </section>
      </main>
      {/* Modal */}
    </div>
  )
}

export default Home

import Head from 'next/head'
import MainLayout from '../../components/Layout'
import Contact from '../../components/Contact'

export default function ContactPage() {
  return (
    <>
    <Head>
        <title>Hotel Coronado | Contacto</title>
    </Head>
    <div>
        <MainLayout>
            <Contact />
        </MainLayout>
    </div>
    </>
  )
}
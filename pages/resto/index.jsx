import Head from 'next/head'
import MainLayout from '../../components/Layout'
import Resto from '../../components/Resto'

export default function RestoPage() {
  return (
    <>
    <Head>
        <title>Hotel Coronado | Resto Bar</title>
    </Head>
    <div>
        <MainLayout>
            <Resto />
        </MainLayout>
    </div>
    </>
  )
}
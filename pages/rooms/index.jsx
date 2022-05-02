import Head from 'next/head'
import MainLayout from '@/components/Layout'
import Rooms from '@/components/Rooms'

export default function RoomsPage() {
  return (
    <>
    <Head>
        <title>Hotel Coronado | Rooms</title>
    </Head>
    <div>
        <MainLayout>
            <Rooms />
        </MainLayout>
    </div>
    </>
  )
}
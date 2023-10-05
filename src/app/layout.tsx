import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import '@/styles/styles.sass'
import Navbar from './components/navbar/Navbar'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'] 
})

export const metadata: Metadata = {
  title: 'Temples',
  description: 'Temples is a collection of ancient greek buildings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}

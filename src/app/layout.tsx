import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/styles.sass'
import Navbar from './components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}

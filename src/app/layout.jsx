import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import logo from '@/assets/logo.svg'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className]}>
        <header className="py-2 shadow-md shadow-gray-600">
          <nav className="flex container mx-auto  justify-between items-center">
            <Image src={logo} alt="logo" width="100" height="100" />
            <div>
              <input type="text" placeholder="Searching" />
            </div>
          </nav>
        </header>
        
        {children}
      </body>
    </html>
  )
}

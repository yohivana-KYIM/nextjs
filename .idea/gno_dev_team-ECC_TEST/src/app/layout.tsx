import './globals.css'
import Footer from '@/app/components/navbar/Footer'
import SiteNavigation from '@/app/components/navbar/SiteNavigation'

export const metadata = {
  title: 'ECC Church',
  description: 'Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SiteNavigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}

import './ui/global.css'
import Navbar from './components/navigation/navbar/Navbar';
import { Footer } from './components/footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

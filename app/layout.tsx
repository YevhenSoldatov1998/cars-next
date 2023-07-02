import './globals.css'
import {Footer, Navbar} from "@/components";


export const metadata = {
  title: 'Car Rental',
  description: 'Explore the world with a car rental',
}

type RootLayoutProps = {
  children: React.ReactNode,
}
export default async function RootLayout({
                                           children,

                                         }: RootLayoutProps) {

  return (
    <html lang="en">
    <body className={'relative'}>
    <Navbar/>
    {children}
    <Footer/>
    </body>
    </html>
  )
}

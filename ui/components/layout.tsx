// components/layout.js

import NavBar from './navbar'
import Footer from './footer'


export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <>
    <div className="flex flex-col h-screen justify-between">
      <NavBar />
      <main className="flex-1">
          {children}
      </main>

      <Footer />
    </div>
    </>
  )
}
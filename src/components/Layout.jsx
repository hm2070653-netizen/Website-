import Header from './Header.jsx'
import Footer from './Footer.jsx'
import useReveal from '../hooks/useReveal.js'
import useCountUp from '../hooks/useCountUp.js'

export default function Layout({ children }) {
  useReveal()
  useCountUp()
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

import SkipLink from './SkipLink'
import Header from './Header'
import Footer from './Footer'

function PageLayout({ children }) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" tabIndex="-1">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default PageLayout

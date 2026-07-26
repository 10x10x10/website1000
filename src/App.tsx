import React, { type ComponentType, type ComponentProps } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import routes from '@src/routes'

type AppProps = {
  Router?: ComponentType<any>
  routerProps?: Record<string, any>
  helmetContext?: ComponentProps<typeof HelmetProvider>['context']
}

function ScrollToTop() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App({ Router = BrowserRouter, routerProps = {}, helmetContext }: AppProps) {
  return (
    <HelmetProvider context={helmetContext}>
      <Router {...routerProps}>
        <ScrollToTop />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div id="app">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

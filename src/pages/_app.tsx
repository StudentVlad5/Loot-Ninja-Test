import '../style/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import Layout from "../components/Layout"
import { ProjectProvider } from '@/context/ProjectContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ProjectProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProjectProvider>
    </Provider>
  );
}

export default MyApp

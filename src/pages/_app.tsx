import '../style/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store'
import Layout from "../components/Layout"
import { ProjectProvider } from '@/context/ProjectContext'
import React, { Suspense, lazy } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ProjectProvider>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Component {...pageProps} />
          </Suspense>
        </Layout>
      </ProjectProvider>
    </Provider>
  );
}

export default MyApp

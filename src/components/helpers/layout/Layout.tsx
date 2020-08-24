import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Nav from './Nav'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Wrapper>
        <Nav />
        <Main>{children}</Main>
      </Wrapper>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  height: 100vh;
`
const Main = styled.main`
  padding: 56px 56px 56px 128px;
`

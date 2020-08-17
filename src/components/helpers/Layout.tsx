import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div>
      <Nav>
        <h1><FontAwesomeIcon icon='crown' /></h1>
        <ul>
          <li>
            <Link href='/'>
              <a><FontAwesomeIcon icon='home' /></a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a><FontAwesomeIcon icon='chart-bar' /></a>
            </Link>
          </li>
        </ul>
      </Nav>
      <Main>
        {children}
      </Main>
    </div>
  </>
)

export default Layout

const Nav = styled.nav`
  position: fixed;
  width: 72px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  top: 0;
  bottom: 0;
  > h1 {
    font-size: 20px;
    text-align: center;
    color: #FFC107;
    margin-bottom: 24px;
  }
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      text-align: center;
      height: 24px;
      width: 24px;
      line-height: 24px;
      font-size: 14px;
      background: rgba(43, 155, 195, 0.2);
      border-radius: 50%;
      margin: 0 auto;
      margin-bottom: 24px;
      a {
        color: #6FC1D3;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`
const Main = styled.main`
  padding: 56px 56px 56px 128px;
`
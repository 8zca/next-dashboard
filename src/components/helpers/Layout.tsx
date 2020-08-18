import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => {
  const [wide, setWide] = useState<boolean>(false)
  const toggle = () => setWide(!wide)

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div>
        <Nav className={wide ? 'wide' : 'narrow'}>
          <h1>
            <span className='icon'>
              <FontAwesomeIcon icon='crown' />
            </span>
            <span className='menu'>ダッシュボード</span>
          </h1>
          <ul>
            <li>
              <Link href='/'>
                <a>
                  <span className='icon'>
                    <FontAwesomeIcon icon='home' />
                  </span>
                  <span className='menu'>ホーム</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>
                  <span className='icon'>
                    <FontAwesomeIcon icon='chart-bar' />
                  </span>
                  <span className='menu'>チャート</span>
                </a>
              </Link>
            </li>
          </ul>
          <div className='expand' onClick={toggle}>
            <FontAwesomeIcon icon={`angle-double-${wide ? 'left' : 'right'}` as any} />
          </div>
        </Nav>
        <Main>{children}</Main>
      </div>
    </>
  )
}

export default Layout

const Nav = styled.nav`
  position: fixed;
  width: 72px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  background: #fff;
  top: 0;
  bottom: 0;
  z-index: 100;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  text-overflow: clip;
  white-space: nowrap;
  overflow: hidden;

  &.wide {
    width: 224px;
    .menu {
      display: inline;
      padding-left: 8px;
    }
    li {
      width: 100%;
    }
  }
  > h1 {
    font-size: 20px;
    color: #ffc107;
    margin: 24px 0 24px 24px;
    padding: 0;
    .menu {
      display: none;
    }
  }
  > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1;
    li {
      font-size: 14px;
      margin-left: 24px;
      margin-bottom: 24px;
      a {
        color: #6fc1d3;
        .icon {
          text-align: center;
          display: inline-block;
          width: 24px;
          height: 24px;
          line-height: 24px;
          background: rgba(43, 155, 195, 0.2);
          border-radius: 50%;
        }
        &:hover {
          opacity: 0.7;
        }
        .menu {
          display: none;
        }
      }
    }
  }
  .expand {
    text-align: center;
    cursor: pointer;
    padding: 16px 0;
    background: #efefef;
    color: #999;
    &:hover {
      opacity: 0.7;
    }
  }
`
const Main = styled.main`
  padding: 56px 56px 56px 128px;
`

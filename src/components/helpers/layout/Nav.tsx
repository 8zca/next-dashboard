import React, { useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav: React.FC = () => {
  const [wide, setWide] = useState<boolean>(false)
  const toggle = () => setWide(!wide)

  return (
    <Wrapper className={wide ? 'wide' : 'narrow'}>
      <Title>
        <span className='icon'>
          <FontAwesomeIcon icon='store' />
        </span>
        <span className='menu'>NextStore</span>
      </Title>
      <Menu>
        <li>
          <Link href='/'>
            <a>
              <span className='icon'>
                <FontAwesomeIcon icon='home' />
              </span>
              <span className='menu'>ホーム</span>
              <span className='badge'>1</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/list'>
            <a>
              <span className='icon'>
                <FontAwesomeIcon icon='list' />
              </span>
              <span className='menu'>商品リスト</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/activity'>
            <a>
              <span className='icon'>
                <FontAwesomeIcon icon='th' />
              </span>
              <span className='menu'>売れ行き</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/chart'>
            <a>
              <span className='icon'>
                <FontAwesomeIcon icon='chart-line' />
              </span>
              <span className='menu'>チャート</span>
            </a>
          </Link>
        </li>
      </Menu>
      <div className='expand' onClick={toggle}>
        <FontAwesomeIcon icon={`angle-double-${wide ? 'left' : 'right'}` as any} />
      </div>
    </Wrapper>
  )
}

export default Nav

const Wrapper = styled.nav`
  position: fixed;
  width: 72px;
  box-shadow: 0px 4px 16px ${(props) => props.theme.colors.shadow.primary};
  background: ${(props) => props.theme.colors.bg.contrast};
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
const Title = styled.h1`
  font-size: 20px;
  font-weight: normal;
  color: #ffc107;
  margin: 24px 0 24px 24px;
  padding: 0;
  .menu {
    display: none;
    .wide & {
      display: inline-block;
      padding-left: 8px;
    }
  }
`
const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  li {
    font-size: 14px;
    margin-left: 24px;
    margin-bottom: 24px;
    width: 100%;
    position: relative;
    a {
      color: ${(props) => props.theme.colors.text.link};
      .icon {
        text-align: center;
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        background: ${(props) => props.theme.colors.bg.cyan};
        border-radius: 50%;
      }
      .badge {
        display: inline-block;
        width: 14px;
        height: 14px;
        background: #da692a;
        border-radius: 50%;
        position: absolute;
        top: 12px;
        left: 16px;
        font-size: 10px;
        text-align: center;
        color: ${(props) => props.theme.colors.text.contrast};
      }
      &:hover {
        opacity: 0.7;
      }
      .menu {
        display: none;
        .wide & {
          display: inline;
          padding-left: 12px;
        }
      }
    }
  }
`

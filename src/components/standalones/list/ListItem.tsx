import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SubList from './subList'

type Props = {
  name: string
  description: string
}

const ListItem: React.FC<Props> = ({ name, description }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Item>
      <MainItem justifyContent='space-between' alignItems='center'>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Toggle onClick={() => setOpen(!open)}>
          {open ? '閉じる' : '開く'}&nbsp;
          <FontAwesomeIcon icon={`caret-${open ? 'up' : 'down'}` as any} />
        </Toggle>
      </MainItem>
      <Expand className={open ? 'open' : 'close'}>
        <SubList />
      </Expand>
    </Item>
  )
}

export default ListItem

const Item = styled.li`
  background: ${(props) => props.theme.colors.bg.contrast};
  padding: 0 24px;
  border-radius: 8px;
  transition: all 0.2s;
`
const MainItem = styled(Flex)`
  height: 72px;
`
const Name = styled.div`
  width: 240px;
`
const Description = styled.div`
  flex: 1;
`
const Toggle = styled.div`
  width: 80px;
  text-align: right;
  color: ${(props) => props.theme.colors.text.link};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`
const Expand = styled.div`
  overflow: hidden;
  max-height: 0px;
  transition: all 0.2s;
  &.open {
    display: block;
    max-height: 400px;
  }
  ul {
    margin: 16px 16px 40px 16px;
    padding: 0;
    list-style: none;
  }
`

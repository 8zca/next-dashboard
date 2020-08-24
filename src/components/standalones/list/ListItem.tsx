import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@/components/helpers'
import SubList from './subList'

type Props = {
  id: number
  name: string
  description: string
}

const ListItem: React.FC<Props> = ({ id, name, description }) => {
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
        <SubList id={id} />
        <AddButton>＋</AddButton>
        <Footer>
          <Button>保存する</Button>
        </Footer>
      </Expand>
    </Item>
  )
}

export default ListItem

const Item = styled.li`
  background: ${(props) => props.theme.colors.bg.contrast};
  border-radius: 8px;
  transition: all 0.2s;
`
const MainItem = styled(Flex)`
  height: 72px;
  padding: 0 24px;
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
    max-height: 500px;
  }
  ul {
    margin: 16px 48px;
    padding: 0;
    list-style: none;
  }
`
const AddButton = styled.div`
  border: 2px dotted ${(props) => props.theme.colors.border.primary};
  color: ${(props) => props.theme.colors.text.tertiary};
  height: 40px;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  line-height: 40px;
  margin: 0 48px 24px 48px;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.border.primary};
  }
`
const Footer = styled.div`
  text-align: right;
  padding: 24px;
  border-top: 1px solid ${(props) => props.theme.colors.border.primary};
`

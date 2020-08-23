import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

const List: React.FC = () => (
  <>
    <p>カテゴリ</p>
    <Wrapper>{makeItem()}</Wrapper>
  </>
)

const makeItem = () => {
  const items = [
    {
      name: '家具',
      description: '北欧デザインの家具です。'
    },
    {
      name: '家電',
      description: '北欧デザインの家電です。'
    },
    {
      name: '調理器具',
      description: '北欧デザインの調理器具です。'
    }
  ]

  return items.map((row, index) => <ListItem name={row.name} description={row.description} key={index} />)
}

export default List

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  > li {
    margin-bottom: 16px;
  }
`

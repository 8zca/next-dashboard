import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
import { categories } from '@/data/category'

const List: React.FC = () => (
  <>
    <p>カテゴリ</p>
    <Wrapper>{makeItem()}</Wrapper>
  </>
)

const makeItem = () => {
  return categories.map((row, index) => (
    <ListItem id={row.id} name={row.name} description={row.description} key={index} />
  ))
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

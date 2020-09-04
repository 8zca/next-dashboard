import React from 'react'
import styled from 'styled-components'
import { useCategories } from '@/services/apis'
import ListItem from './ListItem'
import { categories } from '@/data/category'

type CategoryType = typeof categories[0]

const List: React.FC = () => {
  const { data, error } = useCategories()

  if (error) return <>Error</>
  if (!data) return <>Loading</>

  return (
    <>
      <p>カテゴリ</p>
      <Wrapper>{makeItem(data)}</Wrapper>
    </>
  )
}

const makeItem = (data: CategoryType[]) => {
  return data.map((row, index) => <ListItem id={row.id} name={row.name} description={row.description} key={index} />)
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

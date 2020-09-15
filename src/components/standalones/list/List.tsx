import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useCategories, CategoryType } from '@/services/apis'
import ListItem from './ListItem'
import { Flex } from 'reflexbox'

const List: React.FC = () => {
  const { data, error } = useCategories()
  const [state, setState] = useState<{ list: CategoryType[] }>({ list: [] })

  useEffect(() => {
    if (data) {
      setState({ list: data })
    }
  }, [data])

  if (error) return <>Error</>
  if (!data) return <>Loading</>

  const onDragEnd = (result: any) => {
    if (!result.destination) return
    if (result.destination.index === result.source.index) return

    const list = reorder(state.list, result.source.index, result.destination.index)

    setState({ list })
  }

  return (
    <>
      <p>カテゴリ</p>
      <Wrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='list'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {makeItem(state.list)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Wrapper>
    </>
  )
}

const reorder = (list: CategoryType[], startIndex: number, endIndex: number) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const makeItem = (data: CategoryType[]) => {
  return data.map((row, index) => {
    return (
      <div key={row.id}>
        <Flex justifyContent='space-between'>
          <div>見出し</div>
          <div>+追加</div>
        </Flex>
        <Draggable draggableId={row.id.toString()} index={index} key={row.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <ListItem id={row.id} name={row.name} description={row.description} key={index} />
            </div>
          )}
        </Draggable>
      </div>
    )
  })
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

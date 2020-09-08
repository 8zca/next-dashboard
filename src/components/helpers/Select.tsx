import React, { useRef } from 'react'
import styled from 'styled-components'
import Popup from 'reactjs-popup'

type Props = {
  options: {
    id: string | number
    name: string
  }[]
  defaultId: string | number
  className?: string
  clickHandler: (id: string | number) => void
}
const Select: React.FC<Props> = ({ options, defaultId, className, clickHandler }) => {
  const current = options.find((row) => row.id === defaultId)
  const ref = useRef<any>()

  return (
    <div className={className}>
      <SelectPopup
        position='bottom center'
        closeOnDocumentClick={true}
        ref={ref}
        trigger={() => <Current>{current?.name || '---'}</Current>}
      >
        <Content>
          {options.map((item) => (
            <Item
              key={item.id}
              onClick={() => {
                clickHandler(item.id)
                ref.current.close()
              }}
            >
              {item.name}
            </Item>
          ))}
        </Content>
      </SelectPopup>
    </div>
  )
}

export default Select

const SelectPopup = styled(Popup)`
  &-arrow {
    display: none;
  }
`
const Current = styled.div`
  display: inline-block;
  border-radius: 8px;
  padding: 8px 24px;
  border: 1px solid ${(props) => props.theme.colors.border.primary};
  cursor: pointer;
`
const Content = styled.div`
  background: ${(props) => props.theme.colors.bg.contrast};
  box-shadow: 0 4px 16px ${(props) => props.theme.colors.shadow.primary};
  padding: 12px 0;
  border-radius: 8px;
`
const Item = styled.div`
  padding: 12px 24px;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.colors.action.hover};
  }
`

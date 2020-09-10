import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Sidebar = styled.div`
  flex-grow: 1;
  margin: 0 0.5rem 0.5rem 0.5rem;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-basis: 0;
  flex-grow: 999;
  margin: 0 0.5rem 6rem 0.5rem;
  min-width: 53%;

  border-radius: 10px;
  box-shadow: 0 0 10px #aaaaaa;
`

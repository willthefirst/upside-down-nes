import React from 'react'

type Props = {
  children: React.ReactElement<any, any>
}

export const StickyScrollArea: React.FC<Props> = ({ children }) => {
  const childComponents = React.Children.map(children, (child) => {
    console.log(child.type?.name)
  })

  return children;
}

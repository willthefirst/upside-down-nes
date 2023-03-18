import React from 'react'

type Props = {
  children: React.ReactElement[];
}

export const StickyScrollArea = ({ children }: Props): React.ReactElement => {
  const targets = React.Children.toArray(children).filter((child) => {
    // @ts-ignore
    return child.type?.name === "StickyScrollTarget"
  })

  console.log(targets.length)

  return <>{children}</>;
}

export const StickyScrollTarget: React.FC<any> = ({ children }) => {
  return children
}

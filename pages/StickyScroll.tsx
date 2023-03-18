import React from 'react'
import { useScrollPosition } from './useScrollPosition';

type Props = {
  children: React.ReactElement[];
}

export const StickyScrollArea = ({ children }: Props): React.ReactElement => {
  const { scrollY } = useScrollPosition();

  const targets = React.Children.toArray(children).filter((child) => {
    // @ts-ignore
    return child.type?.name === "StickyScrollTarget"
  })

  return <>{children}</>;
}

export const StickyScrollTarget: React.FC<any> = ({ children }) => {
  return children
}


import React, { useEffect } from 'react'
import { useScrollPosition } from './useScrollPosition';
import { isTargetComponent } from './isTargetComponent';

type Props = {
  children: React.ReactElement[];
}

export const StickyScrollArea = ({ children }: Props): React.ReactElement => {
  const { scrollY } = useScrollPosition();

  const targetRefs: React.RefObject<unknown>[] = [];

  const childrenWithReferencedTargets = React.Children.toArray(children).map((child, index) => {
    if (isTargetComponent(child)) {
      const ref = React.createRef();
      targetRefs.push(ref)

      // @ts-ignore
      return <div ref={ref} key={index}>{React.cloneElement(child)}</div>;
    }
  })

  useEffect(() => {
    targetRefs.map((targetRef) => {
      const { top } = (targetRef.current?.getBoundingClientRect());

      if (Math.abs(top - scroll < 20)) {
        console.log(top)
        window.scrollTo({ top })
      }
    })
  }, [targetRefs])


  return <>{childrenWithReferencedTargets}</>;
}

export const StickyScrollTarget: React.FC<any> = ({ children }) => {
  return children
}



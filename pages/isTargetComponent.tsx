import React from 'react';

export function isTargetComponent(child: string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal) {
  // @ts-ignore
  return child.type?.name === "StickyScrollTarget";
}

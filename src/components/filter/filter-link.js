'use script'

import React from 'react'

const FilterLink = ({ action, activeFilter, children, handleClick }) => {
  const span = { tag: 'span' }
  const a = { tag: 'a', href: '#', handleClick }

  const component = action === activeFilter ? span : a

  return (
    <component.tag
      href={component.href}
      onClick={component.handleClick}
      style={{ marginRight: 10 }}
    >
      {children}
    </component.tag>
  )
}

export default FilterLink

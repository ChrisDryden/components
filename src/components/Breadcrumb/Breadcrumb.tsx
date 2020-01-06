import React, { ElementType } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Item } from './interfaces'
import { ColorVariants } from '../../helpers/ColorVariants'

interface Props {
  /** Determines the breadcrumb toggle text */
  text: string
  /** Determines the breadcrumb's items */
  items: Item[]
  /** Determines the breadcrumb toggle button id */
  id: string
  /** Determines the breadcrumb toggle variant color */
  variant: ColorVariants
  /** Determines the horizontal alignment of the breadcrumb items */
  alignRight?: boolean
  /** Determines the breadcrumb custom element type */
  as?: ElementType
  /** Handle the breadcrumb additional click events */
  onClick?: (event: React.MouseEvent<any>) => void
  /** Determines the breadcrumbs custom style */
  style?: Record<string, any>
  /** Aria labe which defaults to breadcrumb */
  label?: string
  /** Properties passed down to underlying <ul> element */
  listProps?: object
  /** Change base class name from 'breadcrumb' */
  bsPrefix?: string
}

/**
 * Customizable breadcrumb component based on React-Bootstrap breadcrumb
 *
 */
const BreadcrumbRB = (props: Props) => {
  const { text, id, items, variant, style, alignRight } = props

  const getBreadcrumbItem = (item: Item, i: number) => (
    <Breadcrumb.Item>{item.text}</Breadcrumb.Item>
  )

  return (
    <Breadcrumb variant={variant} title={text} id={id} style={style} alignRight={alignRight}>
      {items.map((item, i) => getBreadcrumbItem(item, i))}
    </Breadcrumb>
  )
}
BreadcrumbRB.defaultProps = {
  id: `breadcrumb${Math.floor(Math.random() * 10000)}`,
  variant: 'light',
  size: 'sm',
  direction: 'down',
}

export { Breadcrumb }

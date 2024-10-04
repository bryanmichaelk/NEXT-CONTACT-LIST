import { Fragment } from 'react'

export default function Layout(props) {
    const { children } = props;
  return (
    <Fragment>
        {children}
    </Fragment>
  )
}

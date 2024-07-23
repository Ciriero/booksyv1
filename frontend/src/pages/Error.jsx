import React from 'react'
import {Link, useRouteError} from "react-router-dom";

const Error = () => {
  const error = useRouteError()
  return (
    <div>
    <h1>Error</h1>
    <Link to="/">Go Home</Link>
     </div>
  )
}

export default Error
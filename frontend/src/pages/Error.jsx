import React from 'react'
import {Link, useRouteError} from "react-router-dom";
import { WrapperError } from '../styles/Error.styles';
import error from "../assets/error.svg"

const Error = () => {
  const error = useRouteError();

  if(error.status === 404){
    return <WrapperError>
      <img src={error} alt="404 error" />
      <h3>Sorry!!! Page not found</h3>
      <Link to="/" className='btn'>Come bach home</Link>
    </WrapperError>
  }


  return (
    <div>
    <h1>Error</h1>
    <Link to="/">Go Home</Link>
     </div>
  )
}

export default Error
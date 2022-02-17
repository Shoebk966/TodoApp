import React, { useEffect } from 'react'
import { useGlobalContext } from './Context'


const Alert = ({msg , type , Removealert , listitem}) => {

  useEffect(()=>{

const timeout = setTimeout(()=>{

  Removealert()
}, 3000)

return () => clearTimeout(timeout)
  }, [listitem])

  return (
    <p className={`bg-${type} text-white`} >{msg}</p>
  )
}

export default Alert
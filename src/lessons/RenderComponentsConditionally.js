import React, { useState, useEffect } from 'react'
import '../App.css'

function SecretComponent() {
  return (
    <h1>This is a secret message</h1>
  )
}

function PublicComponent() {
  return (
    <h1>Everyone can see this</h1>
  )
}

function RenderComponentsConditionally(props) {
  return ( 
    props.authorized ? <SecretComponent /> : <PublicComponent />
  )
}

export default RenderComponentsConditionally





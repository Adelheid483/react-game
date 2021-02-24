import React from 'react'
import './Modal.scss'

export default function Modal(props) {
  return (
    <div className={props.active ? "modal active" : "modal"}
         onClick={() => props.setActive(false)}>
      <div
        className={props.active ? "modal__content active" : "modal__content"}
        onClick={(event) => event.stopPropagation()}>

        {props.children}

      </div>
    </div>
  )
};

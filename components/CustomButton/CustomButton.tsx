'use client'
import React from 'react';
import {CustomButtonProps} from "@/components/CustomButton/index.types";

function CustomButton(props: CustomButtonProps) {
  return (
    <button
      onClick={props.handleClick}
      className={`custom-btn ${props.classNameContainer || ''}`}
      disabled={props.disabled}
      type={props.btnType || 'button'}

    >
      <span className='flex-1'>{props.title}</span></button>
  );
}

export default CustomButton;
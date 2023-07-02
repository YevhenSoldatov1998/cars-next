import React, {MouseEventHandler} from "react";

export interface CustomButtonProps extends Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, | 'disabled' > {
  title: string;
  classNameContainer?: string;
  btnType?: 'button' | 'submit'
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
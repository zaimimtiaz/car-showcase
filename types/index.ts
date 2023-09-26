import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    containerstyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}
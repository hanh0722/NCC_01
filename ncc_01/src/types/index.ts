import { ElementType, HTMLAttributes } from "react";

export interface ClassNameProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
}

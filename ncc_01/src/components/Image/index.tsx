import React, { DetailedHTMLProps, FC, ImgHTMLAttributes } from "react";

export type ImageProps = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const Image: FC<ImageProps> = (props) => {
  return (
    <img {...props}/>
  )
};

export default Image;

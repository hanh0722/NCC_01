import { FC } from "react";
import Image, { ImageProps } from "../../../../components/Image";

const Logo: FC<Partial<ImageProps>> = (props) => {
  return (
    <Image src="/logo.png" {...props}/>
  )
};

export default Logo;

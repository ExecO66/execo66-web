import { FC } from "react";
import Image from "next/image";

export interface EclipseProfilePictureProps
  extends React.ComponentPropsWithoutRef<"div"> {
  imgUrl: string;
  alt: string;
  className?: string;
}

export const EclipseProfilePicture: FC<EclipseProfilePictureProps> = ({
  imgUrl,
  alt = "",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`overflow-hidden rounded-full ${className} bg-primary-900 relative`}
      {...props}
    >
      <Image
        src={imgUrl}
        alt={alt}
        layout="fill"
        className="object-contain w-full"
      />
    </div>
  );
};

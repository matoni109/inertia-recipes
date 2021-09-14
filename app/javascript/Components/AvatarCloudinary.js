import React from "react";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";

const AvatarCloudinary = (props) => {
  // console.log(props);
  const {
    userData: { key },
  } = props;

  return (
    <>
      <CloudinaryContext cloudName="dr2satryk">
        <Image
          cloudName="oeelsafe"
          loading="lazy"
          publicId={`${key}`}
          // alt={`avatar image of ${.split(".")[0]}`}
        >
          <Transformation
            width="100"
            height="100"
            // gravity="face"
            crop="thumb"
            radius="max"
            fetchFormat="png"
            quality="auto"
          />
          {/* <Transformation effect="cartoonify" /> */}
          {/* <Transformation /> */}
        </Image>
      </CloudinaryContext>
    </>
  );
};

export default AvatarCloudinary;

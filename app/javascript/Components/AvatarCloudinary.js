import React from "react";
import { Image, CloudinaryContext, Transformation } from "cloudinary-react";

// import { AdvancedImage } from "@cloudinary/react";
// import { Cloudinary } from "@cloudinary/url-gen";
// import { Transformation } from "@cloudinary/url-gen";

// // Import required actions.
// import { thumbnail } from "@cloudinary/url-gen/actions/resize";
// import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

const AvatarCloudinary = () => {
  return (
    <>
      <CloudinaryContext cloudName="dr2satryk">
        <Image
          cloudName="dr2satryk"
          publicId="meals_dy2ur7.jpg"
          alt="table full
              of food"
        >
          <Transformation effect="improve" quality="auto" crop="scale" />
        </Image>
      </CloudinaryContext>
    </>
  );
  //   // Create and configure your Cloudinary instance.
  //   const cld = new Cloudinary({
  //     cloud: {
  //       cloudName: "oeelsafe",
  //     },
  //   });

  //   // Use the image with public ID, 'front_face'.
  //   const myImage = cld.image("front_face");

  //   // Apply the transformation.
  //   myImage
  //     .resize(thumbnail().width(150).height(150).gravity("face")) // Crop the image, focusing on the face.
  //     .roundCorners(byRadius(20)); // Round the corners.

  //   // Render the transformed image in a React component.
  //   return (
  //     <div>
  //       <AdvancedImage cldImg={myImage} />
  //     </div>
  //   );
};

export default AvatarCloudinary;

import { useState } from "react";

const useDragDrop = () => {
  const [images, setImages] = useState([]);

  // Validating to allow only jpeg or png
  const validate = (file) => {
    if (file.type === "image/jpeg" || file.type === "image/png") {
      return true;
    } else {
      throw new Error("Only jpeg and png files are allowed");
    }
  };

  // Handler for dropping files onto the drop zone
  const handleDrop = (event) => {
    event.preventDefault();
    const { items, files } = event.dataTransfer;
    const myItems = items ? items : files;

    const validImages = [];

    [...myItems].forEach((item) => {
      let file = item.kind === "file" ? item.getAsFile() : item;
      if (file) {
        try {
          validate(file);
          validImages.push(URL.createObjectURL(file));
        } catch (err) {
          alert(err.message);
        }
      }
    });

    // appending images not replacing
    setImages((prevImages) => [...prevImages, ...validImages]);
  };

  // Handler for dragging over the drop zone
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Function to remove an image by index
  const removeImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };
  
  return { images, handleDrop, handleDragOver, removeImage };
};

export default useDragDrop;

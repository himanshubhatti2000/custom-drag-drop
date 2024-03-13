import "./style.css";
import React from "react";
import useDragDrop from "../../hooks/useDragDrop";

const DragDrop = () => {
  const { images, handleDrop, handleDragOver, removeImage } = useDragDrop();

  return (
    <div>
      <div id="drop_zone" onDrop={handleDrop} onDragOver={handleDragOver}>
        <p>
          Drag one or more files to this <i>drop zone</i>.
        </p>
      </div>
      {images.map((image, index) => (
        <img
          onClick={() => removeImage(index)}
          key={index}
          src={image}
          alt={`Dropped image ${index}`}
          style={{ maxWidth: "200px", maxHeight: "200px", margin: "5px" }}
        />
      ))}
    </div>
  );
};

export default DragDrop;

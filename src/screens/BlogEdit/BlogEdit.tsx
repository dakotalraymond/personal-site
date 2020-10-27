import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import Styles from "./BlogEdit.module.scss";

interface Props {}

export const BlogEdit = ({}: Props) => {
  const [content, setContent] = useState<any>({ text: "" });
  return (
    <div className={Styles.container}>
      Below is the editor
      <ReactQuill
        value={content}
        onChange={(e) => setContent(e)}
        className={Styles.editorContainer}
      />
    </div>
  );
};

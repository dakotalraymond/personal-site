import React from "react";

import Styles from "./Editor.module.scss";
import ContentEditor from "../../components/ContentEditor/ContentEditor";

const Editor = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.containerInner}>
        <ContentEditor />
      </div>
    </div>
  );
};

export default Editor;

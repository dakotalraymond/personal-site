import React, { useEffect } from "react";
import {
  Editor,
  EditorState,
  ContentState,
  convertToRaw,
  convertFromRaw
} from "draft-js";

const ContentEditor = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  useEffect(() => {
    const content = window.localStorage.getItem("content");

    if (content) {
      setEditorState(
        EditorState.createWithContent(convertFromRaw(JSON.parse(content)))
      );
    }
  }, []);

  const saveContent = (content: ContentState) => {
    window.localStorage.setItem(
      "content",
      JSON.stringify(convertToRaw(content))
    );
  };

  const handleChange = (newState: EditorState) => {
    const currentContent = editorState.getCurrentContent();
    const newContent = newState.getCurrentContent();

    if (currentContent !== newContent) {
      saveContent(newContent);
    }
    setEditorState(newState);
  };

  return (
    <div>
      <Editor editorState={editorState} onChange={handleChange} />
    </div>
  );
};

export default ContentEditor;

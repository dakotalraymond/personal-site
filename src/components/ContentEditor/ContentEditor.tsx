import React, { useEffect } from "react";
import Immutable from "immutable";
import Draft, {
  Editor,
  EditorState,
  ContentState,
  convertToRaw,
  convertFromRaw
} from "draft-js";

import Styles from "./ContentEditor.module.scss";

class ElementWrapper extends React.Component {
  render() {
    return <div className={Styles.elementContainer}>{this.props.children}</div>;
  }
}

const OpaqueWrapper = ({ children }: { children?: any }) =>
  React.Children.map(children, child => (
    <ElementWrapper>{React.cloneElement(child)}</ElementWrapper>
  ));

const blockRenderMap = Immutable.Map({
  unstyled: {
    // element is used during paste or html conversion to auto match your component;
    // it is also retained as part of this.props.children and not stripped out
    element: "div",
    wrapper: <OpaqueWrapper />
  }
});

// keep support for other draft default block types and add our myCustomBlock type
const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(
  blockRenderMap
);

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
      const oldSelection = editorState.getSelection().getStartKey();
      const selection = newState.getSelection().getStartKey();
      if (oldSelection !== selection) {
        console.log("Selection block changed");
      }
      console.log("text is", newContent.getBlockForKey(selection).getText());
      saveContent(newContent);
    }
    setEditorState(newState);
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        onChange={handleChange}
        blockRenderMap={extendedBlockRenderMap}
      />
    </div>
  );
};

export default ContentEditor;

import React, { useState } from "react";
import Styles from "./ProseEditor.module.scss";
import Editor from "../../components/Prose/Prose";
import { EditorState } from "prosemirror-state";
import { Schema } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
//@ts-ignore
import { exampleSetup } from "prosemirror-example-setup";

interface Props {}

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
const mySchema = new Schema({
  nodes: addListNodes(schema.spec.nodes as any, "paragraph block*", "block"),
  marks: schema.spec.marks
});

const ProseEditor = ({}: Props) => {
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.create({
      schema: mySchema,
      plugins: exampleSetup({ schema: mySchema })
    })
  );

  return (
    <div className={Styles.container}>
      <div className={Styles.containerInner}>
        <Editor editorState={editorState} onEditorState={setEditorState} />
      </div>
    </div>
  );
};

export default ProseEditor;

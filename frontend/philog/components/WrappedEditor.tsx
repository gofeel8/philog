import React from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";

export interface EditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

export default function WrappedEditor(props: EditorWithForwardedProps) {
  return <Editor {...props} ref={props.forwardedRef} />;
}

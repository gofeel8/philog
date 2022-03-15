import dynamic from "next/dynamic";
import * as React from "react";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import { EditorWithForwardedProps } from "./WrappedEditor";
import { atom, useRecoilState, useRecoilValue } from "recoil";

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<EditorWithForwardedProps>(
  () => import("./WrappedEditor"),
  { ssr: false }
);
const EditorWithForwardedRef = React.forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));
EditorWithForwardedRef.displayName = "EditorWithForwardedRef";

interface Props extends EditorProps {
  onChange(value: string): void;

  valueType?: "markdown" | "html";
}

const modeState = atom({
  key: "modeState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

const WysiwygEditor: React.FC<Props> = (props) => {
  const {
    initialValue,
    previewStyle,
    height,
    initialEditType,
    useCommandShortcut,
  } = props;
  const isDarkMode = useRecoilValue(modeState);

  const editorRef = React.useRef<EditorType>();
  const handleChange = React.useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const instance = editorRef.current.getInstance();
    const valueType = props.valueType || "markdown";
    props.onChange(
      valueType === "markdown" ? instance.getMarkdown() : instance.getHTML()
    );
  }, [props, editorRef]);

  React.useEffect(() => {
    if (!editorRef.current) {
      return;
    }
    const root = editorRef.current.getRootElement();
    if (isDarkMode) {
      root.classList.add("toastui-editor-dark");
    } else {
      root.classList.remove("toastui-editor-dark");
    }
  }, [isDarkMode]);

  return (
    <div>
      <EditorWithForwardedRef
        {...props}
        initialValue={initialValue || ""}
        previewStyle={previewStyle || "vertical"}
        height={height || "570px"}
        initialEditType={initialEditType || "markdown"}
        useCommandShortcut={useCommandShortcut || true}
        ref={editorRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default WysiwygEditor;

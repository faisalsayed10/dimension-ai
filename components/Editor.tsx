import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import {
  EditorComponent,
  Remirror,
  ThemeProvider,
  ToggleBoldButton,
  ToggleBulletListButton,
  ToggleCodeButton,
  ToggleHeadingButton,
  ToggleItalicButton,
  ToggleOrderedListButton,
  ToggleTaskListButton,
  Toolbar as RemirrorToolbar,
} from "@remirror/react";
import { AllStyledComponent } from "@remirror/styles/emotion";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { htmlToProsemirrorNode } from "remirror";
import { useManager } from "../lib/ManagerContext";
import CreateLinkButton from "./CreateLinkButton";
import FileUploadButton from "./FileUploadButton";
import BoldIcon from "./icons/BoldIcon";
import BulletedListIcon from "./icons/BulletedListIcon";
import CodeIcon from "./icons/CodeIcon";
import EmojiIcon from "./icons/EmojiIcon";
import HeadingIcon from "./icons/HeadingIcon";
import ItalicIcon from "./icons/ItalicIcon";
import LinkIcon from "./icons/LinkIcon";
import MentionIcon from "./icons/MentionIcon";
import OrderedListIcon from "./icons/OrderedListIcon";
import TodoListIcon from "./icons/TodoListIcon";

const iconClass = "outline-none border-none m-0 p-2 hover:bg-transparent cursor-pointer";

const Editor: React.FC = forwardRef((_, ref) => {
  const { manager, getContext } = useManager();
  useImperativeHandle(ref, () => getContext(), [getContext]);

  return (
    <AllStyledComponent>
      <ThemeProvider>
        <Remirror manager={manager}>
          <EditorComponent />
        </Remirror>
      </ThemeProvider>
    </AllStyledComponent>
  );
});

export const Toolbar: React.FC = forwardRef((_, ref) => {
  const [showPicker, setShowPicker] = useState(false);
  const { manager, state, setState, getContext } = useManager();
  useImperativeHandle(ref, () => getContext(), [getContext]);

  useEffect(() => {
    // Removes the duplicate file that is getting uploaded
    document.querySelectorAll(".file-node-view-wrapper").forEach((wrapper) => {
      const children = wrapper.children;
      if (children.length > 1) {
        const child = children[0];
        child.classList.add("hidden");
      }
    });
  }, [state]);

  return (
    <ThemeProvider>
      <Remirror state={state} manager={manager} onChange={(p) => setState(p.state)}>
        <RemirrorToolbar>
          <div className="flex items-center gap-2">
            <FileUploadButton />
            <MentionIcon className={iconClass} />
            <EmojiIcon className={iconClass} onClick={() => setShowPicker(!showPicker)} />
            {showPicker && (
              <div className="absolute top-10 z-50">
                <Picker
                  theme="light"
                  data={data}
                  onEmojiSelect={(e: any) => {
                    const { tr } = state;
                    tr.insertText(e.native, state.selection.from, state.selection.to);
                    setState(state.apply(tr));
                    setShowPicker(false);
                  }}
                  onClickOutside={() => setShowPicker(false)}
                />
              </div>
            )}
            <ToggleHeadingButton className={iconClass} icon={<HeadingIcon />} />
            <ToggleBoldButton className={iconClass} icon={<BoldIcon />} />
            <ToggleItalicButton className={iconClass} icon={<ItalicIcon />} />
            <ToggleCodeButton className={iconClass} icon={<CodeIcon />} />
            <CreateLinkButton
              onLinkCreate={(text, url) => {
                const { tr } = state;
                const link = htmlToProsemirrorNode({
                  content: `<a href="${url}">${text}</a>`,
                  schema: state.schema,
                });

                tr.insert(state.selection.from, link);
                setState(state.apply(tr));
              }}
            />
            <ToggleOrderedListButton className={iconClass} icon={<OrderedListIcon />} />
            <ToggleBulletListButton className={iconClass} icon={<BulletedListIcon />} />
            <ToggleTaskListButton className={iconClass} icon={<TodoListIcon />} />
          </div>
        </RemirrorToolbar>
      </Remirror>
    </ThemeProvider>
  );
});

export default Editor;

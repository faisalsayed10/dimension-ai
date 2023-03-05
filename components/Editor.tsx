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
  Toolbar as RemirrorToolbar
} from "@remirror/react";
import { AllStyledComponent } from "@remirror/styles/emotion";
import AttachmentIcon from "./icons/AttachmentIcon";
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

interface Props {
  manager: any;
}

const iconClass = "outline-none border-none m-0 p-2 hover:bg-transparent cursor-pointer";

const Editor: React.FC<Props> = ({ manager }) => {
  return (
    <AllStyledComponent>
      <ThemeProvider>
        <Remirror manager={manager}>
          <EditorComponent />
        </Remirror>
      </ThemeProvider>
    </AllStyledComponent>
  );
};

export const Toolbar: React.FC<Props> = ({ manager }) => {
  return (
    <ThemeProvider>
      <Remirror manager={manager}>
        <RemirrorToolbar>
          <div className="flex items-center gap-2">
            <AttachmentIcon className={iconClass} />
            <MentionIcon className={iconClass} />
            <EmojiIcon className={iconClass} />
            <ToggleHeadingButton className={iconClass} icon={<HeadingIcon />} />
            <ToggleBoldButton className={iconClass} icon={<BoldIcon />} />
            <ToggleItalicButton className={iconClass} icon={<ItalicIcon />} />
            <ToggleCodeButton className={iconClass} icon={<CodeIcon />} />
            <LinkIcon className={iconClass} />
            <ToggleOrderedListButton className={iconClass} icon={<OrderedListIcon />} />
            <ToggleBulletListButton className={iconClass} icon={<BulletedListIcon />} />
            <ToggleTaskListButton className={iconClass} icon={<TodoListIcon />} />
          </div>
        </RemirrorToolbar>
      </Remirror>
    </ThemeProvider>
  );
};

export default Editor;

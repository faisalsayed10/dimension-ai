import { LinkIcon } from "@heroicons/react/24/outline";
import {
  EditorComponent,
  EmojiPopupComponent,
  HeadingLevelButtonGroup,
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
import { FC } from "react";

interface Props {
  manager: any;
}

const Editor: FC<Props> = ({ manager }) => {
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

export const Toolbar: FC<Props> = ({ manager }) => {
  return (
    <ThemeProvider>
      <Remirror manager={manager}>
        <RemirrorToolbar>
          <ToggleBoldButton />
          <ToggleHeadingButton />
          <ToggleItalicButton />
          <ToggleCodeButton />
          <ToggleTaskListButton />
          <ToggleBulletListButton />
          <ToggleOrderedListButton />
          <div>
            <LinkIcon width={24} />
          </div>
        </RemirrorToolbar>
      </Remirror>
    </ThemeProvider>
  );
};

export default Editor;

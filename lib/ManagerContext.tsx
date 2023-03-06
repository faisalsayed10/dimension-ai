import { useRemirror } from "@remirror/react";
import { createContext, useContext } from "react";
import { EditorState, RemirrorManager } from "remirror";
import {
  BoldExtension,
  BulletListExtension,
  CodeExtension,
  EmojiExtension,
  HeadingExtension,
  ItalicExtension,
  LinkExtension,
  MarkdownExtension,
  OrderedListExtension,
  PlaceholderExtension,
  TaskListExtension,
} from "remirror/extensions";
import { FileExtension } from "@remirror/extension-file";

export interface Props {
  manager: RemirrorManager<any>;
  state: EditorState;
  setState: (state: EditorState) => void;
  getContext: () => any;
}

const extensions = () => [
  new PlaceholderExtension({ placeholder: "Describe this task" }),
  new BoldExtension(),
  new HeadingExtension(),
  new ItalicExtension(),
  new CodeExtension(),
  new LinkExtension({ autoLink: true, defaultTarget: "_blank", openLinkOnClick: true }),
  new TaskListExtension(),
  new BulletListExtension(),
  new OrderedListExtension(),
  new FileExtension(),
  new MarkdownExtension(),
];

const ManagerContext = createContext<Props | null>(null);

export const useManager = () => {
  const context = useContext(ManagerContext);
  if (context === null) {
    throw new Error("useManager must be used within a ManagerProvider");
  }
  return context;
};

export const ManagerProvider: React.FC<any> = ({ children }) => {
  const { manager, state, setState, getContext } =
    typeof document !== "undefined"
      ? useRemirror({ extensions })
      : {
          manager: null,
          state: null,
          setState: null,
          getContext: null,
        };

  return (
    // @ts-ignore
    <ManagerContext.Provider value={{ manager, state, setState, getContext }}>
      {children}
    </ManagerContext.Provider>
  );
};

import { useCommands } from "@remirror/react";
import AttachmentIcon from "./icons/AttachmentIcon";

function useFileDialog(
  uploadFiles: (files: File[]) => void,
  accept?: string
): { openFileDialog: () => void } {
  const openFileDialog = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;

    if (accept) {
      input.accept = accept;
    }

    input.addEventListener("change", (event: Event) => {
      const { files } = event.target as HTMLInputElement;

      if (files) {
        const fileArray: File[] = [];

        for (const file of files as any) {
          fileArray.push(file);
        }

        uploadFiles(fileArray);
      }
    });

    input.click();
  };

  return { openFileDialog };
}

const FileUploadButton = () => {
  const { uploadFiles } = useCommands();
  const { openFileDialog } = useFileDialog(uploadFiles);

  return (
    <AttachmentIcon
      className="outline-none border-none m-0 p-2 hover:bg-transparent cursor-pointer"
      onClick={openFileDialog}
    />
  );
};

export default FileUploadButton;

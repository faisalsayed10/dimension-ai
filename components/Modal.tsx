import { Dialog, Transition } from "@headlessui/react";
import { CircleStackIcon, FlagIcon, TagIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import { PlaceholderExtension, useRemirror } from "@remirror/react";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  BoldExtension,
  BulletListExtension,
  CodeExtension,
  EmojiExtension,
  HeadingExtension,
  ItalicExtension,
  LinkExtension,
  OrderedListExtension, TaskListExtension
} from "remirror/extensions";
import Editor, { Toolbar } from "./Editor";

const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const titleRef = useRef<HTMLInputElement>(null);

  const { manager } = useRemirror({
    extensions: () => [
      new PlaceholderExtension({ placeholder: "Describe this task" }),
      new BoldExtension(),
      new HeadingExtension(),
      new ItalicExtension(),
      new CodeExtension(),
      new LinkExtension(),
      new TaskListExtension(),
      new BulletListExtension(),
      new OrderedListExtension(),
      new EmojiExtension(),
    ],
  });

  useEffect(() => {
    setOpen(true);
    titleRef.current?.focus();
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}} initialFocus={titleRef}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className="relative transform overflow-hidden rounded-[10px] bg-white text-left transition-all sm:my-8 sm:w-full sm:max-w-2xl"
                style={{ boxShadow: "2px 2px 30px 10px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="bg-white p-4">
                  <div className="flex items-center mb-6 text-gray-500 font-medium text-sm">
                    <p className="px-3 py-2 flex items-center justify-center bg-[#F5F5F580] rounded-md w-fit">
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline mr-3"
                      >
                        <path
                          d="M6.66665 1V5.66667H10.6666L5.33331 13V8.33333H1.33331L6.66665 1Z"
                          fill="#3FBC77"
                          stroke="#3FBC77"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Frontend
                    </p>
                    <svg
                      width="5"
                      height="8"
                      viewBox="0 0 5 8"
                      className="mx-2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.08002 7.88L0.52002 7.32L3.84002 3.99999L0.52002 0.679995L1.08002 0.119995L4.96002 3.99999L1.08002 7.88Z"
                        fill="#6C6F75"
                      />
                    </svg>
                    <p>New Task</p>
                  </div>
                  <input
                    className="ml-2 mb-4 placeholder:text-gray-400 font-medium text-base appearance-none block w-full focus:outline-none"
                    placeholder="Task title"
                    type="text"
                    ref={titleRef}
                  />
                  <Editor manager={manager} />
                  <div className="mb-7"></div>
                  <div className="flex items-center gap-2 ml-2">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md border">
                      <CircleStackIcon width="14px" height="14px" />
                      <p className="text-sm font-medium text-gray-500">Todo</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md border">
                      <UserCircleIcon width="14px" height="14px" />
                      <p className="text-sm font-medium text-gray-500">Assignee</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md border">
                      <FlagIcon width="14px" height="14px" />
                      <p className="text-sm font-medium text-gray-500">Priority</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md border">
                      <TagIcon width="14px" height="14px" />
                      <p className="text-sm font-medium text-gray-500">Tags</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md border">
                      <CircleStackIcon width="14px" height="14px" />
                      <p className="text-sm font-medium text-gray-500">Project</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md border">
                      <CircleStackIcon width="14px" height="14px" />
                      <p className="text-sm font-medium text-gray-500">Due Date</p>
                    </div>
                  </div>
                </div>
                <div className="border-t px-4 py-3 sm:flex sm:flex-row sm:px-6">
                  <Toolbar manager={manager} />
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Create
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;

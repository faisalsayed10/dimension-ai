import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import LinkIcon from "./icons/LinkIcon";

interface Props {
  onLinkCreate: (text: string, url: string) => void;
}

const CreateLinkButton: React.FC<Props> = ({ onLinkCreate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <LinkIcon
        onClick={() => setIsOpen(true)}
        className="outline-none border-none m-0 p-2 hover:bg-transparent cursor-pointer"
      />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Create a link
                  </Dialog.Title>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      onLinkCreate(e.currentTarget.displayText.value, e.currentTarget.url.value);
                      setIsOpen(false);
                    }}
                  >
                    <input
                      type="text"
                      name="displayText"
                      placeholder="Enter display text"
                      className="w-full border rounded-sm px-2 py-1 mt-2 placeholder-gray-400"
                    />
                    <input
                      required
                      type="url"
                      name="url"
                      placeholder="Enter URL"
                      className="w-full border rounded-sm px-2 py-1 mt-2 placeholder-gray-400"
                    />

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Create link
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default CreateLinkButton;

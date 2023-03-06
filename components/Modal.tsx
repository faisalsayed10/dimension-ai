import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import DatePicker from "./DatePicker";
import Dropdown from "./Dropdown";
import Editor, { Toolbar } from "./Editor";
import AssigneeIcon from "./icons/AssigneeIcon";
import PriorityIcon from "./icons/PriorityIcon";
import ProjectIcon from "./icons/ProjectIcon";
import SubmitArrowIcon from "./icons/SubmitArrowIcon";
import TagIcon from "./icons/TagIcon";
import TodoIcon from "./icons/TodoIcon";
import MultiDropdown from "./MultiDropdown";

const Modal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(true);
    titleRef.current?.focus();
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-1" onClose={() => {}} initialFocus={titleRef}>
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
                className="relative transform rounded-[10px] text-left transition-all sm:my-8 sm:w-full sm:max-w-3xl"
                style={{ boxShadow: "2px 2px 30px 10px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="p-4">
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
                  <div className="mb-6">
                    <Editor />
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <Dropdown
                      placeholder="Change status..."
                      options={[
                        { name: "Todo", icon: <TodoIcon /> },
                        { name: "In Progress", icon: <TodoIcon /> },
                        { name: "Done", icon: <TodoIcon /> },
                        { name: "Cancelled", icon: <TodoIcon /> },
                      ]}
                    />
                    <MultiDropdown
                      placeholder="Assign to..."
                      options={[
                        { name: "Faisal S", icon: <AssigneeIcon />, selected: false },
                        { name: "Tejas R", icon: <AssigneeIcon />, selected: false },
                        { name: "Aiden B", icon: <AssigneeIcon />, selected: false },
                        { name: "Conrad C", icon: <AssigneeIcon />, selected: false },
                      ]}
                      text="Assignee"
                      icon={<AssigneeIcon />}
                    />
                    <Dropdown
                      placeholder="Set priority..."
                      options={[
                        { name: "No priority", icon: <PriorityIcon />, default: "Priority" },
                        { name: "Urgent", icon: <PriorityIcon /> },
                        { name: "High", icon: <PriorityIcon /> },
                        { name: "Medium", icon: <PriorityIcon /> },
                        { name: "Low", icon: <PriorityIcon /> },
                      ]}
                    />
                    <MultiDropdown
                      placeholder="Assign tags..."
                      options={[
                        { name: "Bug", icon: <TagIcon />, selected: false },
                        { name: "Feature", icon: <TagIcon />, selected: false },
                        { name: "Issue", icon: <TagIcon />, selected: false },
                        { name: "Enhancement", icon: <TagIcon />, selected: false },
                      ]}
                      text="Tags"
                      icon={<TagIcon />}
                    />
                    <Dropdown
                      placeholder="Choose project..."
                      options={[
                        { name: "No project", icon: <ProjectIcon />, default: "Project" },
                        { name: "Project 1", icon: <ProjectIcon /> },
                        { name: "Project 2", icon: <ProjectIcon /> },
                        { name: "Project 3", icon: <ProjectIcon /> },
                      ]}
                    />
                    <div className="flex relative items-center gap-2 px-3 py-1 rounded-md border">
                      <DatePicker startDate={startDate} setStartDate={setStartDate} />
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.60002 0.400002C10.1305 0.400002 10.6392 0.610715 11.0142 0.985788C11.3893 1.36086 11.6 1.86957 11.6 2.4V5.68C11.3443 5.54918 11.0764 5.44387 10.8 5.3656V3.6H1.20002V9.6C1.20002 9.91826 1.32645 10.2235 1.5515 10.4485C1.77654 10.6736 2.08176 10.8 2.40002 10.8H5.36562C5.44482 11.0792 5.54962 11.3464 5.68002 11.6H2.40002C1.86959 11.6 1.36088 11.3893 0.985811 11.0142C0.610738 10.6391 0.400024 10.1304 0.400024 9.6V2.4C0.400024 1.86957 0.610738 1.36086 0.985811 0.985788C1.36088 0.610715 1.86959 0.400002 2.40002 0.400002H9.60002ZM9.60002 1.2H2.40002C2.08176 1.2 1.77654 1.32643 1.5515 1.55147C1.32645 1.77652 1.20002 2.08174 1.20002 2.4V2.8H10.8V2.4C10.8 2.08174 10.6736 1.77652 10.4486 1.55147C10.2235 1.32643 9.91828 1.2 9.60002 1.2ZM13.2 9.6C13.2 10.5548 12.8207 11.4705 12.1456 12.1456C11.4705 12.8207 10.5548 13.2 9.60002 13.2C8.64525 13.2 7.72957 12.8207 7.05444 12.1456C6.37931 11.4705 6.00002 10.5548 6.00002 9.6C6.00002 8.64522 6.37931 7.72955 7.05444 7.05442C7.72957 6.37929 8.64525 6 9.60002 6C10.5548 6 11.4705 6.37929 12.1456 7.05442C12.8207 7.72955 13.2 8.64522 13.2 9.6ZM10 8C10 7.89392 9.95788 7.79217 9.88287 7.71716C9.80785 7.64214 9.70611 7.6 9.60002 7.6C9.49394 7.6 9.3922 7.64214 9.31718 7.71716C9.24217 7.79217 9.20002 7.89392 9.20002 8V9.2H8.00002C7.89394 9.2 7.7922 9.24214 7.71718 9.31716C7.64217 9.39217 7.60002 9.49391 7.60002 9.6C7.60002 9.70609 7.64217 9.80783 7.71718 9.88284C7.7922 9.95786 7.89394 10 8.00002 10H9.20002V11.2C9.20002 11.3061 9.24217 11.4078 9.31718 11.4828C9.3922 11.5579 9.49394 11.6 9.60002 11.6C9.70611 11.6 9.80785 11.5579 9.88287 11.4828C9.95788 11.4078 10 11.3061 10 11.2V10H11.2C11.3061 10 11.4079 9.95786 11.4829 9.88284C11.5579 9.80783 11.6 9.70609 11.6 9.6C11.6 9.49391 11.5579 9.39217 11.4829 9.31716C11.4079 9.24214 11.3061 9.2 11.2 9.2H10V8Z"
                          fill="#94989E"
                        />
                      </svg>
                      <p className="text-sm font-medium text-gray-400">
                        {startDate
                          ? `${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()}`
                          : "Due Date"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-t px-4 py-3 sm:flex sm:flex-row justify-between sm:px-6 relative">
                  <Toolbar />
                  <button
                    ref={buttonRef}
                    type="button"
                    className="create relative inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-500 px-4 py-[6px] text-sm font-medium text-white sm:w-auto"
                  >
                    Create
                    <div className="h-full w-[1px] bg-white opacity-20 mx-3" />
                    <SubmitArrowIcon />
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

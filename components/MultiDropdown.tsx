import { Menu, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useRef, useState } from "react";

interface Props {
  text?: string;
  icon?: JSX.Element;
  placeholder?: string;
  options: { name: string; icon: JSX.Element; default?: string; selected: boolean }[];
}

const MultiDropdown: React.FC<Props> = ({ options, placeholder, text, icon }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [allOptions, setAllOptions] = useState(options);
  const [filtered, setFiltered] = useState(allOptions);

  useEffect(() => {
    setFiltered(
      allOptions.filter((option) => option.name.toLowerCase().includes(value.toLowerCase()))
    );
  }, [value]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        onClick={() => setTimeout(() => searchRef.current?.focus(), 100)}
        className="inline-flex items-center justify-center gap-2 text-gray-400 rounded-lg border px-3 py-[5px] text-sm"
      >
        {icon}
        {text + " "}
        {allOptions.filter((option) => option.selected).length > 0
          ? `(${allOptions.filter((option) => option.selected).length})`
          : ""}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute mt-2 w-56 origin-top-right divide-y z-50 divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="px-1 py-1">
            <input
              type="text"
              ref={searchRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              spellCheck="false"
              autoComplete="off"
              id="6K24-search"
              className="px-2 py-1 m-0 border-none appearance-none h-9 bg-transparent placeholder:text-gray-400 text-gray-500 outline-none text-sm"
            />
          </div>
          <div className="px-1 py-1">
            {filtered.map((option) => (
              <Menu.Item key={option.name}>
                {({ active }) => (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      option.selected = !option.selected;
                      setAllOptions([...options]);
                      setValue("");
                    }}
                    className={`${
                      active ? "bg-gray-100" : "text-gray-500"
                    } group flex w-full items-center justify-between rounded-md px-2 py-2 text-sm`}
                  >
                    <span className="flex gap-3 w-full items-center">
                      {option.icon}
                      {option.name}
                    </span>
                    {option.selected && <CheckIcon width={20} color="rgb(79 70 229)" />}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MultiDropdown;

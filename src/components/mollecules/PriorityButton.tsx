import { memo } from "react";
import { IconDown } from "../base/Icons";
import { FormIndicator } from "./FormIndicator";

const ButtonPriority = () => {
  return (
    <button
      //   onClick={showDropDown} //to hide and show dropdown
      data-cy="modal-add-priority-dropdown"
      className="flex items-center justify-between mt-2 lg:mt-4 px-4 lg:px-6 w-40 lg:w-48 h-12 lg:h-14 rounded-md transition outline-none border border-neutral-400 hover:border-primary-500 focus:border-primary-500"
    >
      <FormIndicator type={"normal"} />
      <span className="text-xs md:text-sm xl:text-base font-semibold">
        {"priority"}
      </span>

      <IconDown />
    </button>
  );
};

export const FormButtonPriority = memo(ButtonPriority);

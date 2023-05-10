import { memo } from "react";
import { FormIndicator } from "./FormIndicator";

const DropDownItem = ({ id, type }: { id: any; type?: string }) => {
  return (
    <button
      id={id}
      // onClick={updatePriority}
      data-cy="modal-add-priority-item"
      className="flex items-center h-full w-full px-4 lg:px-6 cursor-pointer hover:bg-neutral-100"
    >
      <FormIndicator type="very-high" />
      <span>{"title"}</span>
    </button>
  );
};
export const FormDropDownItem = memo(DropDownItem);

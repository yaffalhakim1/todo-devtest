import { memo } from "react";
import { indicatorList } from "../../lib/priority";
import { FormDropDownItem } from "./FormDropdownItem";

const PriorityOption = () => {
  return (
    <div
      data-cy="modal-add-priority-dropdown"
      className="flex flex-col absolute w-40 lg:w-48 h-72 rounded-lg border divide-y mt-2 divide-neutral-300 bg-white"
    >
      {indicatorList.map((item) => (
        <FormDropDownItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export const FormPriorityOption = memo(PriorityOption);

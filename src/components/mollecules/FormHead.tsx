import { memo } from "react";
import { IconX } from "../base/Icons";

const header = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-24 px-4 lg:px-8">
        <div data-cy="modal-add-title" className="text-xl font-bold text-black">
          modalForm.titleForm
        </div>
        <IconX data-cy="modal-add-close-button" />
      </div>
    </>
  );
};
export const FormHead = memo(header);

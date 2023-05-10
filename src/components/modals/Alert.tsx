/* eslint-disable react-refresh/only-export-components */
import { IconInfo } from "../base/Icons";
import { memo } from "react";

const Alert = ({ type }: { type: string }) => {
  return (
    <div
      data-cy="modal-information"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex space-x-1 items-center bg-white py-3.5 md:-y-4 px-6 md:px-8  rounded-lg md:space-x-2 shadow-md"
    >
      {/* <img src="src\assets\info.png" alt="" /> */}
      <IconInfo className="w-6 h-6 text-emerald-700" />
      <p className="text-black font-semibold">{type} berhasil dihapus</p>
    </div>
  );
};

export default memo(Alert);

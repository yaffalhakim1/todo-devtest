import { memo } from "react";

import { BaseButton } from "../base/Button";
import { IconPlus, IconSort } from "../base/Icons";
import { useLocation } from "react-router-dom";
import { SortBoard } from "../sort/SortBoard";

const SharedButton = () => {
  const { pathname } = useLocation();

  const addNewActivity = () => {
    console.log("add new activity");
  };

  const sortOptions = {
    isOpen: false,
    // showSortOpt: () => {
    //     console.log("show sort options");
    // },
  };

  const showSortOpt = () => {
    console.log("show sort options");
  };

  const openForm = () => {
    console.log("open form");
    //   useCallback(() => {
    //     dispatch(
    //       setModalForm({
    //         isOpen: true,
    //         titleForm: 'Tambah List Item',
    //         priority: 'Very High'
    //       })
    //     )
    //   }, [modalForm.isOpen])
  };

  if (pathname === "/") {
    return (
      <BaseButton data-cy="activity-add-button" onClick={addNewActivity}>
        <IconPlus />
        <span className="sr-only sm:not-sr-only">Tambah</span>
      </BaseButton>
    );
  }

  return (
    <div className="flex items-center space-x-2 md:scroll-px-3">
      <IconSort
        data-cy="todo-sort-button"
        className="w-8 md:w-10 p-2 md:p- aspect-square border rounded-full  cursor-pointer text-neutral-800"
        onClick={showSortOpt}
      />

      <div className="relative">{sortOptions.isOpen && <SortBoard />}</div>

      <BaseButton data-cy="todo-add-button" onClick={openForm}>
        <IconPlus />
        <span className="sr-only sm:not-sr-only">Tambah</span>
      </BaseButton>
    </div>
  );
};

export default memo(SharedButton);

import { IconSortType } from "../base/Icons";

export default function SortItem() {
  return (
    <button
      //   onClick={handleClick}
      data-cy="sort-selection"
      className="relative flex items-center w-full h-full p-2 px-4 lg:px-6 space-x-2 lg:space-x-4 hover:bg-gray-100"
    >
      <span className="text-sky-500">
        <IconSortType type={""} />
      </span>

      <span data-cy="sort-selection-title">{"title"}</span>
      {/* {sortOptions.sortBy === type && <IconCheck />} */}
    </button>
  );
}

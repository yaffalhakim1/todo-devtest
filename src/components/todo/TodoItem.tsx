import { FormIndicator } from "../mollecules/FormIndicator";
import { Pencil, Trash } from "../base/Icons";

function TodoItem({
  id,
  title,
  is_active,
  priority,
}: {
  id: number;
  title: string;
  is_active: boolean;
  priority: string;
}) {
  return (
    <div
      data-cy="todo-item"
      className="flex items-center justify-between w-full h-14 md:h-16 px-4 lg:px-8 rounded-lg shadow bg-white"
    >
      <div className="flex items-center space-x-2 lg:space-x-4 w-full h-full">
        <input
          data-cy="todo-item-checkbox"
          type="checkbox"
          //   onChange={handleCheckbox}
          //   checked={checked}
        />
        <FormIndicator type={"very-high"} />
        <h3
          data-cy="todo-item-title"
          className="lg:text-lg font-semibold text-neutral-800"
        >
          {"title yang panjang banget"}
        </h3>

        <Pencil
          className="w-5 h-5 text-gray-600 cursor-pointer"
          onClick={() => {}}
          data-cy="todo-item-edit-button"
        />
      </div>

      <Trash
        data-cy="todo-item-delete-button"
        // onClick={showModalAlert}
        className="text-xl lg:text-2xl cursor-pointer text-gray-600"
      />
    </div>
  );
}

export default TodoItem;

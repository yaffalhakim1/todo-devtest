import { useLocation } from "react-router-dom";
import { Back } from "../mollecules/BackButton";
import { Pencil } from "../base/Icons";

const SharedTitle = () => {
  const { pathname } = useLocation();
  const selectedActivity = {
    title: "Activity",
  };
  const titleActivity = {
    isEditing: false,
    title: "Activity",
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSync();
    }
  };

  const handleSync = () => {
    console.log("sync");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change");
  };

  const editTitle = () => {
    console.log("edit title");
  };

  return (
    <div className="flex items-center space-x-2 md:space-x-3">
      {pathname !== "/" && <Back />}
      {!titleActivity.isEditing && pathname !== "/" && (
        <h2 data-cy="todo-title" onClick={editTitle}>
          {selectedActivity.title}
        </h2>
      )}
      {pathname === "/" && <h2 data-cy="activity-title">Activity</h2>}

      {titleActivity.isEditing && pathname !== "/" && (
        <input
          type="text"
          onKeyDown={handleKeyPress}
          onBlur={handleSync}
          onChange={handleChange}
          value={titleActivity.title}
          className="py-1 md:py-2 text-xl font-bold md:text-3xl bg-transparent border-b outline-none text-neutral-700 border-neutral-700"
          autoFocus
        />
      )}
      {pathname !== "/" && (
        <Pencil
          data-cy="todo-title-edit-button"
          onClick={editTitle}
          onBlur={handleSync}
        />
      )}
    </div>
  );
};
export default SharedTitle;

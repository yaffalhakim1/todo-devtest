import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Trash } from "../base/Icons";

function ActivityItems({
  id,
  title,
  created_at,
}: {
  id: string;
  title: string;
  created_at: string;
}) {
  const navigate = useNavigate();
  const formatter = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "long",
  });
  const date = formatter.format(new Date(created_at));

  const goToDetailPage = () => navigate("/detail/" + id);
  const showModalAlert = () => {
    console.log("show modal alert");
  };

  return (
    <div
      onClick={goToDetailPage}
      data-cy="activity-item"
      className="flex flex-col items-center justify-between min-h-[14rem] rounded md:cursor-pointer shadow bg-white"
    >
      <div className="w-full h-full p-2 md:p-4">
        <h3 data-cy="activity-item-title">{title}</h3>
      </div>

      <div className="flex items-center justify-between w-full p-2 md:p-4">
        <p data-cy="activity-item-date">{date}</p>
        <Trash
          onClick={(e) => {
            e.stopPropagation();
            showModalAlert();
          }}
          data-cy="activity-item-delete-button"
        />
      </div>
    </div>
  );
}

export const ActivityItem = memo(ActivityItems);

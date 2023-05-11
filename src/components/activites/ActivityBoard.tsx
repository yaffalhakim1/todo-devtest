import { memo } from "react";
import { EmptyState } from "../mollecules/EmptyState";

function ActivityBoard() {
  const activity = [
    {
      id: "1",
      title: "Activity 1",
      created_at: "2021-10-10T00:00:00.000Z",
    },
    {
      id: "2",
      title: "Activity 2",

      created_at: "2021-10-10T00:00:00.000Z",
    },
  ];

  const syncActivity = async () => {
    // const response = await doGet('/activity-groups?email=rizki.maulana@skyshi.com')
    // dispatch(setActivity(response.data))
  };

  const addNewActivity = async () => {
    console.log("add new activity");
    // const activity = createActivity()
    // await doPost('/activity-groups', activity)
    await syncActivity();
  };

  if (activity.length > 0) {
    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 flex-[1_1_auto]">
        {}
      </div>
    );
  }

  return (
    <EmptyState
      data-cy="activity-empty-state"
      onClick={addNewActivity}
      src="https://ik.imagekit.io/mlnzyx/devcode-todo/new-activity_OP7NGluCh3.webp?updatedAt=1641870436456"
    />
  );
}

export const ActivitesBoard = memo(ActivityBoard);

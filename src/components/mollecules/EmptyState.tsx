/* eslint-disable @typescript-eslint/no-empty-function */
import { memo } from "react";

const Empty = ({ onClick = () => {}, ...props }) => (
  <figure onClick={onClick} className="w-1/2 mx-auto cursor-pointer">
    <img
      className="w-full object-contain aspect-square"
      alt="activity"
      {...props}
    />
  </figure>
);

export const EmptyState = memo(Empty);

// icon:info-circle | Ant Design Icons https://ant.design/components/icon/ | Ant Design

import { memo } from "react";
import * as sort from "../../lib/action-type";

const IconInfoCircle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
      <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" />
    </svg>
  );
};

export const IconInfo = memo(IconInfoCircle);

const Danger = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 md:w-24 aspect-square text-red-500 mb-10 mt-[50px]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

export const IconDanger = memo(Danger);

const X = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const IconX = memo(X);

const ChevronDown = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export const IconDown = memo(ChevronDown);

const Check = ({ ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className="absolute right-4 h-4 w-4 md:w-6 md:h-6"
    data-cy="sort-selection-selected"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export const IconCheck = memo(Check);

const SortType = ({ type, ...props }: { type?: string }) => {
  switch (type) {
    case sort.SET_NEWER:
      return (
        <svg
          {...props}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          data-cy="sort-selection-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 9H20V11H11zM11 13H18V15H11zM11 5H22V7H11zM11 17H16V19H11zM5 20L7 20 7 8 10 8 6 4 2 8 5 8z"></path>
        </svg>
      );

    case sort.SET_OLDER:
      return (
        <svg
          {...props}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          data-cy="sort-selection-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 20L10 16 7 16 7 4 5 4 5 16 2 16zM11 8H20V10H11zM11 12H18V14H11zM11 4H22V6H11zM11 16H16V18H11z"></path>
        </svg>
      );

    case sort.SET_AZ:
      return (
        <svg
          {...props}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          data-cy="sort-selection-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.707 14.707c.286-.286.372-.716.217-1.09C19.77 13.244 19.404 13 19 13h-7v2h4.586l-4.293 4.293c-.286.286-.372.716-.217 1.09C12.23 20.756 12.596 21 13 21h7v-2h-4.586L19.707 14.707zM7 3.99L5 3.99 5 15.99 2 15.99 6 19.99 10 15.99 7 15.99zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333C17.79 3.259 17.417 3 17 3zM14.943 7l.75-2h.613l.75 2H14.943z"></path>
        </svg>
      );

    case sort.SET_ZA:
      return (
        <svg
          {...props}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          data-cy="sort-selection-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.707 14.707c.286-.286.372-.716.217-1.09C19.77 13.244 19.404 13 19 13h-7v2h4.586l-4.293 4.293c-.286.286-.372.716-.217 1.09C12.23 20.756 12.596 21 13 21h7v-2h-4.586L19.707 14.707zM6 3.99L2 7.99 5 7.99 5 19.99 7 19.99 7 7.99 10 7.99zM17 3h-2c-.417 0-.79.259-.937.649l-2.75 7.333h2.137L14.193 9h3.613l.743 1.981h2.137l-2.75-7.333C17.79 3.259 17.417 3 17 3zM14.943 7l.75-2h.613l.75 2H14.943z"></path>
        </svg>
      );

    case sort.SET_INCOMPLETED:
      return (
        <svg
          {...props}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          data-cy="sort-selection-icon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 16L4 16 10 22 10 19 10 16 10 2 8 2zM14 5L14 8 14 22 16 22 16 8 20 8 14 2z"></path>
        </svg>
      );
    default:
      return null;
  }
};

export const IconSortType = memo(SortType);

function IconPencilTwentyFour(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M17.263 2.177a1.75 1.75 0 012.474 0l2.586 2.586a1.75 1.75 0 010 2.474L19.53 10.03l-.012.013L8.69 20.378a1.75 1.75 0 01-.699.409l-5.523 1.68a.75.75 0 01-.935-.935l1.673-5.5a1.75 1.75 0 01.466-.756L14.476 4.963l2.787-2.786zm-2.275 4.371l-10.28 9.813a.25.25 0 00-.067.108l-1.264 4.154 4.177-1.271a.25.25 0 00.1-.059l10.273-9.806-2.94-2.939zM19 8.44l2.263-2.262a.25.25 0 000-.354l-2.586-2.586a.25.25 0 00-.354 0L16.061 5.5 19 8.44z"
      />
    </svg>
  );
}

export const Pencil = memo(IconPencilTwentyFour);

function IconTrash2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
    </svg>
  );
}

export const Trash = memo(IconTrash2);

const Sort = ({ ...props }) => (
  <svg
    {...props}
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 16L4 16 10 22 10 19 10 16 10 2 8 2zM14 5L14 8 14 22 16 22 16 8 20 8 14 2z"></path>
  </svg>
);

export const IconSort = memo(Sort);

const PlusIcon = ({ ...props }) => (
  <svg
    {...props}
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="8" x2="12" y2="16" />

    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

export const IconPlus = memo(PlusIcon);

const ChevronLeft = ({ className = "h-6 w-6", ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

export const IconBack = memo(ChevronLeft);

import { IconBack } from "../../components/base/Icons";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <IconBack
      onClick={handleClick}
      className="border rounded-full p-2 w-8 md:w-10 aspect-square cursor-pointer"
      data-cy="todo-back-button"
    />
  );
};

export const Back = memo(BackButton);

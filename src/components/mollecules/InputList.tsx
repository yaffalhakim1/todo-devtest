import { SyntheticEvent, memo, useMemo } from "react";

const InputList = () => {
  const handleChange = useMemo(() => {
    return (e: SyntheticEvent) => {
      //   dispatch(
      //     setModalForm({
      //       ...modalForm,
      //       title: e.target.value,
      //     })
      //   );
    };
  }, []);

  const onSubmitWithEnter = async (e: SyntheticEvent) => {
    // if (e.key === "Enter")
    // await postList();
  };
  return (
    <input
      onChange={handleChange}
      onKeyDown={onSubmitWithEnter}
      data-cy="modal-add-name-input"
      id="item-name"
      placeholder="Tambahkan nama list item"
      className="block w-full h-12 lg:h-14 mt-2 lg:mt-4 px-4 lg:px-6 rounded-lg outline-none transition border hover:border-primary-500 border-neutral-400 focus:border-primary-500"
      //   value={modalForm.title}
    />
  );
};
export const FormInputList = memo(InputList);

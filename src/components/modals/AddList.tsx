import { BaseButton } from "../base/Button";
import { FormHead } from "../mollecules/FormHead";
import { FormButtonPriority } from "../mollecules/PriorityButton";
import { FormInputList } from "../mollecules/InputList";
import { FormPriorityOption } from "../mollecules/PriorityOption";

export default function AddList() {
  return (
    <>
      <div
        data-cy="modal-add"
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-between h-72 md:h-96 w-10/12 md:w-auto aspect-video rounded-lg divide-y translate-y-[-40%] divide-neutral-300 bg-white"
      >
        <FormHead />
        <div className="flex flex-col justify-evenly w-full h-[80%] py-2 lg:py-4 px-4 lg:px-8 space-y-2 lg:space-y-4">
          <section className=" text-left">
            <label
              data-cy="modal-add-name-title"
              className="uppercase text-neutral-800  font-semibold"
              htmlFor="item-name"
            >
              NAMA LIST ITEM
            </label>
            <FormInputList />
          </section>
          <section className=" text-left">
            <div
              data-cy="modal-add-priority-title"
              className="uppercase text-neutral-800 font-semibold"
            >
              Priority
            </div>
            <FormButtonPriority />

            <FormPriorityOption />
          </section>
          <BaseButton
            // onClick={() => {}}
            data-cy="modal-add-save-button"
            // disabled={modalForm.title.length > 0 ? false : true}
            // className={`w-1/3 md:w-1/4 mr-2 mb-2 md:mr-4 md:mb-4 ml-auto px-4 md:px-8 bg-sky-500 text-white ${
            //   modalForm.title.length > 0 ? "opacity-100" : "opacity-50"
            // }`}
            className="w-1/3 md:w-1/4 mr-2 mb-2 md:mr-4 md:mb-4 ml-auto px-4 md:px-8 bg-sky-500 text-white"
          >
            Simpan
          </BaseButton>
        </div>
      </div>
    </>
  );
}

import { IconDanger } from "../base/Icons";
import { BaseButton } from "../base/Button";

const ModalAlert = () => {
  return (
    <div
      data-cy="modal-delete"
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-center justify-center h-40 md:h-[355px] aspect-[1.25/1] rounded bg-white"
    >
      <IconDanger data-cy="modal-delete-icon" />
      <h3
        data-cy="modal-delete-title"
        className="text-black font-semibold flex flex-col"
      >
        Apakah anda yakin ingin menghapus {"a"}
        <strong>&quot;{"modalAlert.title?"}&quot;</strong>
      </h3>
      <div className="flex items-center justify-center w-full mt-[50px] mb-[40px] space-x-2 md:space-x-3">
        <BaseButton
          data-cy="modal-delete-cancel-button"
          onClick={() => {
            return;
          }}
          className="bg-neutral-200 text-neutral-900 font-semibold px-8 md:px-12"
        >
          Batal
        </BaseButton>
        <BaseButton
          data-cy="modal-delete-confirm-button"
          onClick={() => {
            return;
          }}
          className="bg-red-500 text-white font-semibold px-8 md:px-12"
        >
          Hapus
        </BaseButton>
      </div>
    </div>
  );
};

export default ModalAlert;

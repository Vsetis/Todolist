import { IoMdClose } from "react-icons/io";

export default function Modal({
  isvisible,
  onClose,
}: {
  isvisible: boolean;
  onClose: any;
}) {
  if (!isvisible) {
    return null;
  }

  const handleClose = (e: any) => {
    if (e.target.id === "modal") onClose();
  };

  return (
    <>
      <div
        id="modal"
        onClick={handleClose}
        className="fixed inset-0 flex justify-center items-center"
      >
        <div className="w-[600px]  flex flex-col">
          <div className="bg-white/10 rounded-sm p-4">
            <div className="flex flex-col">
              <div className="flex flex-row pb-4 mb-6 justify-between border-b border-white/20">
                <h2 className="  font-semibold text-xl text-white">
                  Nový todo
                </h2>
                <button onClick={() => onClose()}>
                  <IoMdClose className="h-6 w-6  text-white" />
                </button>
              </div>
              <form action="">
                <div className="flex flex-col gap-2 pb-6">
                  <label className="text-white/80" htmlFor="name">
                    Název
                  </label>
                  <input
                    className="border text-white/70  bg-white/20 border-white/10 rounded-sm text-sm px-2 py-1"
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="flex gap-4 justify-end items-end">
                  <button className="bg-black/70 font-semibold rounded-sm text-white px-8 py-1.5">
                    Vytvořit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

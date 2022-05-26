import React from "react";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      //   overlay div which allows graying of entire screen & allows u to click out
      //         of (& close) modal window
      //         - incl modal div which is the actual modal window
      onClick={onClose}
      className="flex fixed bg-black/60 w-[100%] h-[100%] items-center justify-center"
    >
      <div
        //  modal div / window
        onClick={(e) => e.stopPropagation()}
        className="flex  flex-col flex-wrap bg-white "
      >
        <img
          className="p-2 rounded w-full "
          src={"https://picsum.photos/300/200"}
          alt=""
        />

        <div className="flex justify-center items-center md:w-2/2">
          <div className="flex justify-center items-center p-3 m-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque in
            magni error aut vel deserunt perspiciatis doloribus autem aspernatur
            perferendis?
          </div>
          <div className=" flex justify-center items-center p-3">
            <button
              //   modal close button - X
              onClick={onClose}
              className="bg-red-500 text-white p-3"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

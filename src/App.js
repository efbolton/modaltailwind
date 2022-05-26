import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      className="flex h-screen justify-center bg-no-repeat
     bg-center bg-cover 
     bg-[url('https://img.freepik.com/free-photo/background-image-audience-seated-conference-room_160672-34481.jpg?w=900')]"
    >
      {/*       add image to div bg to better show gray overlay        */}
      <div className="flex fixed h-screen items-center justify-content">
        {/* add div to center modal button on page  */}
        <button
          className=" bg-red-800 text-white p-3 rounded-md"
          onClick={() => setOpenModal(true)}
        >
          Modal
        </button>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default App;

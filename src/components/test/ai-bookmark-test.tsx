// import React, { useState } from "react";

// function Title({ text }) {
//   return <h2 className="text-center text-xl font-bold">{text}</h2>;
// }

// function FolderNameInput({ folderName, onFolderNameChange }) {
//   return (
//     <div className="mb-4">
//       <label className="text-black mb-2 block text-lg">Change Folder Name</label>
//       <div className="bg-gray-100 flex items-center rounded-md p-2">
//         <span className="mr-2">📁</span>
//         <input
//           type="text"
//           value={folderName}
//           onChange={e => onFolderNameChange(e.target.value)}
//           className="text-black flex-grow border-none bg-transparent text-sm outline-none"
//         />
//       </div>
//     </div>
//   );
// }

// const colors = [
//   "#13c8b9",
//   "#2d47d9",
//   "#e84855",
//   "#6f79e3",
//   "#02a6ff",
//   "#4bb492",
//   "#66d66f",
//   "#e9e871",
//   "#f29e30",
//   "#f56d58",
//   "#a374dd",
//   "#ff5c8d",
//   "#ff7f6e",
//   "#b9a594",
//   "#7e9ea9",
// ];

// function ColorPicker({ selectedColor, onColorSelect }) {
//   return (
//     <div className="mb-4">
//       <label className="text-black mb-2 block text-lg">Change Color</label>
//       <div className="flex flex-wrap gap-2">
//         {colors.map(color => (
//           <div
//             key={color}
//             className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-md ${
//               selectedColor === color ? "ring-white ring-2" : ""
//             }`}
//             style={{ backgroundColor: color }}
//             onClick={() => onColorSelect(color)}
//           >
//             {selectedColor === color && <span className="text-white">✔️</span>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function ButtonGroup() {
//   return (
//     <div className="mt-6 flex justify-between">
//       <button className="bg-white text-black w-5/12 rounded-md py-2 font-semibold">Cancel</button>
//       <button className="bg-green-600 text-white w-5/12 rounded-md py-2 font-semibold">Apply</button>
//     </div>
//   );
// }

// export const AiEditBookmark = () => {
//   const [folderName, setFolderName] = useState("Previous Name");
//   const [selectedColor, setSelectedColor] = useState("#13c8b9");

//   const handleFolderNameChange = name => {
//     setFolderName(name);
//   };

//   const handleColorSelect = color => {
//     setSelectedColor(color);
//   };

//   return (
//     <div className="bg-white rounded-2xl w-80 p-6 shadow-md">
//       <Title text="Edit Bookmark" />
//       <FolderNameInput folderName={folderName} onFolderNameChange={handleFolderNameChange} />
//       <ColorPicker selectedColor={selectedColor} onColorSelect={handleColorSelect} />
//       <ButtonGroup />
//     </div>
//   );
// };

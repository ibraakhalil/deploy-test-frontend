// import React, { useState } from "react";

// interface ColorSwatchProps {
//   color: string;
//   selected: boolean;
//   onSelect: (color: string) => void;
// }

// const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, selected, onSelect }) => {
//   return (
//     <div
//       className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full ${
//         selected ? "border-blue-500 border-2" : ""
//       }`}
//       style={{ backgroundColor: color }}
//       onClick={() => onSelect(color)}
//     >
//       {selected && <i className="fas fa-check text-white"></i>}
//     </div>
//   );
// };

// interface EditBookmarkProps {
//   initialFolderName: string;
//   initialColor?: string;
//   onCancel: () => void;
//   onApply: (folderName: string, color: string) => void;
// }

// const EditBookmark: React.FC<EditBookmarkProps> = ({ initialFolderName, initialColor, onCancel, onApply }) => {
//   const [folderName, setFolderName] = useState(initialFolderName);
//   const [selectedColor, setSelectedColor] = useState(initialColor || null);

//   const handleFolderNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFolderName(event.target.value);
//   };

//   const handleColorSelect = (color: string) => {
//     setSelectedColor(color);
//   };

//   const handleCancel = () => {
//     onCancel();
//   };

//   const handleApply = () => {
//     onApply(folderName, selectedColor || "");
//   };

//   return (
//     <div className="bg-white rounded-md p-6 shadow-md">
//       <h2 className="mb-4 text-xl font-bold">Edit Bookmark</h2>

//       <div className="mb-4">
//         <label htmlFor="folder-name" className="text-gray-700 mb-2 block">
//           Change Folder Name:
//         </label>
//         <div className="flex items-center rounded-md border px-3 py-2">
//           <i className="fas fa-folder mr-2"></i>
//           <input
//             type="text"
//             id="folder-name"
//             className="flex-1 border-none outline-none"
//             placeholder="Previous Name"
//             value={folderName}
//             onChange={handleFolderNameChange}
//           />
//         </div>
//       </div>

//       <div className="mb-4">
//         <label htmlFor="color-picker" className="text-gray-700 mb-2 block">
//           Change Color:
//         </label>
//         <div className="flex gap-2">
//           <ColorSwatch color="#13c8b9" selected={selectedColor === "#13c8b9"} onSelect={handleColorSelect} />
//           <ColorSwatch color="#2d47d9" selected={selectedColor === "#2d47d9"} onSelect={handleColorSelect} />
//           <ColorSwatch color="#e84855" selected={selectedColor === "#e84855"} onSelect={handleColorSelect} />
//           <ColorSwatch color="#6f79e3" selected={selectedColor === "#6f79e3"} onSelect={handleColorSelect} />
//           <ColorSwatch color="#02a6ff" selected={selectedColor === "#02a6ff"} onSelect={handleColorSelect} />
//           <ColorSwatch color="#4bb492" selected={selectedColor === "#4bb492"} onSelect={handleColorSelect} />
//           <ColorSwatch color="#66d66f" selected={selectedColor === "#66d66f"} onSelect={handleColorSelect} />
//           <ColorSwatch color="#e9e871" selected={selectedColor === "#e9e871"} onSelect={handleColorSelect} />
//           <ColorSwatch color="#f29e30" selected={selectedColor === "#f29e30"} onSelect={handleColorSelect} />
//           <ColorSwatch color="#f56d58" selected={selectedColor === "#f56d58"} onSelect={handleColorSelect} />
//         </div>
//       </div>

//       <div className="flex justify-end">
//         <button
//           className="bg-gray-300 text-gray-700 hover:bg-gray-400 mr-2 rounded-md px-4 py-2"
//           onClick={handleCancel}
//         >
//           Cancel
//         </button>
//         <button className="bg-green-500 text-white hover:bg-green-600 rounded-md px-4 py-2" onClick={handleApply}>
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EditBookmark;

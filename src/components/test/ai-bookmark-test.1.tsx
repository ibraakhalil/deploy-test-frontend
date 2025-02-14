// import { Check, Folder } from "lucide-react";
// import React, { useState } from "react";

// // Types
// type Color = string;

// interface TitleProps {
//   children: React.ReactNode;
// }

// interface SectionTitleProps {
//   children: React.ReactNode;
// }

// interface InputProps {
//   placeholder: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// interface ColorButtonProps {
//   color: Color;
//   isSelected: boolean;
//   onClick: (color: Color) => void;
// }

// interface ActionButtonProps {
//   children: React.ReactNode;
//   isPrimary?: boolean;
//   onClick: () => void;
// }

// // Constants
// const COLORS: Color[] = [
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
//   "#c15de9",
//   "#f285b8",
//   "#e16d6d",
// ];

// // Reusable components
// const Title: React.FC<TitleProps> = ({ children }) => (
//   <h1 className="mb-6 text-center text-2xl font-bold">{children}</h1>
// );

// const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
//   <h2 className="mb-2 text-lg font-normal">{children}</h2>
// );

// const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => (
//   <div className="flex items-center rounded-md bg-secondary-bg p-3">
//     <Folder className="text-blue-400 mr-2 h-6 w-6" />
//     <input
//       type="text"
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="w-full bg-transparent outline-none"
//     />
//   </div>
// );

// const ColorButton: React.FC<ColorButtonProps> = ({ color, isSelected, onClick }) => (
//   <button
//     className="flex h-10 w-10 items-center justify-center rounded-md"
//     style={{ backgroundColor: color }}
//     onClick={() => onClick(color)}
//   >
//     {isSelected && <Check className="text-white" size={20} />}
//   </button>
// );

// const ActionButton: React.FC<ActionButtonProps> = ({ children, isPrimary = false, onClick }) => (
//   <button
//     className={`flex-1 px-4 py-4 font-semibold ${
//       isPrimary ? "bg-primary text-primary-fg" : "bg-secondary-bg text-pure-color"
//     }`}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );

// // Main component
// const EditBookmark: React.FC = () => {
//   const [folderName, setFolderName] = useState<string>("");
//   const [selectedColor, setSelectedColor] = useState<Color>(COLORS[0]);

//   const handleFolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setFolderName(e.target.value);
//   const handleColorSelect = (color: Color) => setSelectedColor(color);
//   const handleCancel = () => {
//     // Implement cancel logic
//     console.log("Cancelled");
//   };
//   const handleApply = () => {
//     // Implement apply logic
//     console.log("Applied", { folderName, selectedColor });
//   };

//   return (
//     <div className="mx-auto max-w-md overflow-hidden rounded-lg">
//       <div className="bg-[red] p-6">
//         <Title>Edit Bookmark</Title>

//         <div className="mb-6">
//           <SectionTitle>Change Folder Name</SectionTitle>
//           <Input placeholder="Previous Name" value={folderName} onChange={handleFolderNameChange} />
//         </div>

//         <div className="mb-6">
//           <SectionTitle>Change Color</SectionTitle>
//           <div className="grid grid-cols-6 gap-2">
//             {COLORS.map(color => (
//               <ColorButton key={color} color={color} isSelected={selectedColor === color} onClick={handleColorSelect} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex w-full">
//         <ActionButton onClick={handleCancel}>Cancel</ActionButton>
//         <ActionButton isPrimary onClick={handleApply}>
//           Apply
//         </ActionButton>
//       </div>
//     </div>
//   );
// };

// export default EditBookmark;

"use client";

import Image from "next/image";
import { useRef } from "react";
import { FiEdit, FiUploadCloud } from "react-icons/fi";

type TImageUploadPreviewProps = {
  label?: string;
  value?: string | null;
  onChange: (file: File) => void;
  className?: string;
};

const ImageUploadPreview = ({
  label = "Upload image",
  value,
  onChange,
  className,
}: TImageUploadPreviewProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };

  return (
    <div className={className}>
      <div
        role="button"
        tabIndex={0}
        onClick={handleImageClick}
        onKeyDown={(e) => e.key === "Enter" && handleImageClick()}
        className="border-2 border-dashed border-primary bg-primary/5 rounded-lg h-50 flex flex-col justify-center items-center cursor-pointer"
        aria-label={label}
      >
        {value ? (
          <div className="max-w-[190px] relative">
            <Image
              src={value}
              alt="Preview product image"
              className="w-full h-full object-cover"
              width={190}
              height={190}
            />
            <div className="opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center gap-2 bg-black/50 text-white text-sm">
              <FiEdit />
              Change Image
            </div>
          </div>
        ) : (
          <>
            <FiUploadCloud className="text-primary" size={24} />
            <span className="text-sm font-medium">Click to Upload</span>
          </>
        )}

        {/* A11Y LABEL */}
        <label htmlFor="imageUploadInput" className="sr-only">
          {label}
        </label>

        <input
          id="imageUploadInput"
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
          aria-label={label}
        />
      </div>
    </div>
  );
};

export default ImageUploadPreview;
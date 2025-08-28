// app/components/addProject.tsx
"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, FileText, Upload } from "lucide-react";
import { IoImageOutline } from "react-icons/io5";

interface AddProjectForm {
  name: string;
  description: string;
  members: string[];    // selected member IDs or names
  image: File | null;
}
interface AddProjectProps {
  /** Called with form data when user submits */
  onSubmit: (data: AddProjectForm) => void;
  /** Called when user presses Cancel */
  onCancel: () => void;
  /** Options to show in "Assign members" */
  memberOptions: Array<{ value: string; label: string }>;
  /** Optional: prefill values for editing */
  initialValues?: Partial<AddProjectForm>;
}

export default function AddProject({
  onSubmit,
  onCancel,
  memberOptions,
  initialValues = {},
}: AddProjectProps) {
  const [name, setName] = useState(initialValues.name ?? "");
  const [description, setDescription] = useState(initialValues.description ?? "");
  const [members, setMembers] = useState<string[]>(initialValues.members ?? []);
  const [image, setImage] = useState<File | null>(initialValues.image ?? null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setFileName(file.name);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleMembersChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions).map((o) => o.value);
    setMembers(selected);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, description, members, image });
  };

  return (
  <div>
     <div className="flex items-center justify-between border-b pb-2">
            <p className="text-projsync-green font-kumbh-sans text-2xl">Projects</p>
            
      </div>
      <div className="w-full max-w-4xl mx-auto p-6">
        <form
          onSubmit={handleSubmit}
          className="border border-dashed border-sky-300 rounded-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column - Image upload */}
            <div className="flex flex-col items-center justify-start">
              <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                {imagePreview ? (
                  <Image
                    src={imagePreview || "/placeholder.svg"}
                    alt="Preview"
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <IoImageOutline className="text-9xl text-gray-400" />
                )}
              </div>
  
              <label
                htmlFor="image-upload"
                className="w-full border border-dashed border-gray-300 rounded-lg p-4 text-center text-sky-500 cursor-pointer hover:bg-gray-50 transition-colors"
              >
                Upload an image for the project
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
  
              {fileName && (
                <div className="w-full mt-4 p-4 bg-gray-50 rounded-lg flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded">
                    <FileText className="h-5 w-5 text-gray-500" />
                  </div>
                  <span className="text-gray-700">{fileName}</span>
                </div>
              )}
            </div>
  
            {/* Right column - Form fields */}
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-teal-600"
                >
                  Project name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter the project name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
  
              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-lg font-medium text-teal-600"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Enter a short description"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 min-h-28"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
  
              <div className="space-y-2">
                <label
                  htmlFor="members"
                  className="block text-lg font-medium text-teal-600"
                >
                  Assign members
                </label>
                <div className="relative">
                  {/* Use multiple select for multi-assign. Remove "multiple" if you want single select. */}
                  <select
                    id="members"
                    multiple
                    className="w-full p-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                    value={members}
                    onChange={handleMembersChange}
                  >
                    {memberOptions.length === 0 ? (
                      <option disabled value="">
                        No members available
                      </option>
                    ) : (
                      memberOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))
                    )}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <p className="text-xs text-gray-500 mt-2">
                    Hold Ctrl/Cmd to select multiple.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Form actions */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              type="button"
              onClick={onCancel}
              className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2"
            >
              <Upload className="h-5 w-5" />
              Create team
            </button>
          </div>
        </form>
      </div>
  </div>
  );
}

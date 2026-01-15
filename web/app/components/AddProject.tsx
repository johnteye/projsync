// app/components/addproject.tsx
"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, FileText, Upload } from "lucide-react";
import { IoImageOutline } from "react-icons/io5";

interface AddProjectForm {
  name: string;
  description: string;
  members: string[]; // selected member IDs or names
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
  const [description, setDescription] = useState(
    initialValues.description ?? ""
  );
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
    <div className="w-full">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-projsync-green">
          Create a project
        </h1>
      </div>

      <div className="w-full max-w-4xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="border border-dashed border-gray-300 rounded-lg p-4 md:p-8 bg-white space-y-6 md:space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] gap-6 md:gap-8 items-start">
            {/* LEFT: Image upload */}
            <div className="flex flex-col items-start w-full md:w-auto">
              <div className="w-full md:w-[200px] lg:w-[280px] aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                {imagePreview ? (
                  <Image
                    src={imagePreview || "/placeholder.svg"}
                    alt="Project preview"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <IoImageOutline className="text-6xl md:text-8xl text-gray-300" />
                )}
              </div>

              <label
                htmlFor="image-upload"
                className="w-full border border-dashed border-gray-300 rounded-lg p-3 md:p-4 text-center text-teal-600 text-sm md:text-base cursor-pointer hover:bg-teal-50 active:scale-95 transition-all duration-200 font-medium"
              >
                Upload image
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>

              {fileName && (
                <div className="w-full mt-4 p-3 md:p-4 bg-gray-50 rounded-lg flex items-center gap-3">
                  <div className="bg-gray-200 p-2 rounded flex-shrink-0">
                    <FileText className="h-5 w-5 text-gray-500" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base truncate">
                    {fileName}
                  </span>
                </div>
              )}
            </div>

            {/* RIGHT: Form fields */}
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm md:text-base font-semibold text-gray-900"
                >
                  Project name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter project name"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm md:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent transition-all hover:border-gray-300"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="description"
                  className="block text-sm md:text-base font-semibold text-gray-900"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Enter a brief description of the project"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm md:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent transition-all hover:border-gray-300 resize-none min-h-24"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="members"
                  className="block text-sm md:text-base font-semibold text-gray-900"
                >
                  Assign members
                </label>
                <div className="relative">
                  <select
                    id="members"
                    multiple
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm md:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent transition-all hover:border-gray-300 appearance-none cursor-pointer min-h-[120px]"
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
                  <ChevronDown className="absolute right-4 bottom-4 text-gray-400 pointer-events-none h-5 w-5" />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Hold Cmd (Mac) or Ctrl (Windows) to select multiple members.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium text-sm md:text-base hover:bg-gray-50 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white rounded-lg font-medium text-sm md:text-base transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <Upload className="h-5 w-5" />
              Create project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, FileText, Upload } from "lucide-react";
import { IoImageOutline } from "react-icons/io5";

interface AddMemberProps {
  onSubmit: (data: {
    name: string;
    stack: string;
    group: string;
    image: File | null;
  }) => void;
  onCancel: () => void;
}

export default function AddMember({ onSubmit, onCancel }: AddMemberProps) {
  const [name, setName] = useState("");
  const [stack, setStack] = useState("");
  const [group, setGroup] = useState("");
  const [image, setImage] = useState<File | null>(null);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, stack, group, image });
  };

  return (
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
              Upload an image
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
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter the event name/headline"
                className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="stack"
                className="block text-lg font-medium text-teal-600"
              >
                Stack
              </label>
              <div className="relative">
                <select
                  id="stack"
                  className="w-full p-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={stack}
                  onChange={(e) => setStack(e.target.value)}
                >
                  <option value="" disabled>
                    Select the stack
                  </option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="fullstack">Full Stack</option>
                  <option value="devops">DevOps</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="group"
                className="block text-lg font-medium text-teal-600"
              >
                Assign group
              </label>
              <div className="relative">
                <select
                  id="group"
                  className="w-full p-3 border border-gray-200 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                >
                  <option value="" disabled>
                    Select the mode
                  </option>
                  <option value="team-a">Team A</option>
                  <option value="team-b">Team B</option>
                  <option value="team-c">Team C</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
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
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

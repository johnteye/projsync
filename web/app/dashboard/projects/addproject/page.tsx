"use client";
import AddProject from "@/app/components/AddProject";
import { useRouter } from "next/navigation";

export default function AddProjectPage() {
  const router = useRouter();

  const memberOptions = [
    { value: "68b0bdb57b0f2431f0ef765a", label: "Ama Sakyiwah" },
    { value: "68b0bdb57b0f2471f0ef765b", label: "John Teye" },
    { value: "68b0bdb57b0f2231f0ef765b", label: "Kofi Mensah" },
  ];

  const handleSubmit = async (data: {
    name: string;
    description: string;
    members: string[];
    image: File | null;
  }) => {
    try {
      // For now skip image upload and just send metadata
      const payload = {
        ownerId: "68b0bbc63af80803ab62e900",
        projectName: data.name,
        description: data.description,
        members: data.members,
      };

      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        console.error("❌ API Error:", err);
        throw new Error("Failed to create project");
      }

      const project = await res.json();
      console.log("✅ Project created:", project);

      // Redirect back to projects list
      router.push("/dashboard/projects");
    } catch (err) {
      console.error("❌ Error creating project:", err);
    }
  };

  return (
    <AddProject
      memberOptions={memberOptions}
      onSubmit={handleSubmit}
      onCancel={() => router.back()}
    />
  );
}

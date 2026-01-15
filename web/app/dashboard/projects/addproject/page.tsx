"use client";
import AddProject from "@/app/components/AddProject";
import { SpinnerSmall } from "@/app/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AddProjectPage() {
  const router = useRouter();
  const [memberOptions, setMemberOptions] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const [loadingMembers, setLoadingMembers] = useState(true);

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const users = await res.json();
        const options = users.map((user: any) => ({
          value: user.id,
          label: user.username || user.email,
        }));
        setMemberOptions(options);
      } catch (err) {
        console.error("Error fetching users:", err);
        setMemberOptions([]);
      } finally {
        setLoadingMembers(false);
      }
    };

    fetchUsers();
  }, []);

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

  return loadingMembers ? (
    <SpinnerSmall />
  ) : (
    <AddProject
      memberOptions={memberOptions}
      onSubmit={handleSubmit}
      onCancel={() => router.back()}
    />
  );
}

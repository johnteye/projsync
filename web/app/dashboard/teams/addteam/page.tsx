"use client";

import AddTeam from "@/app/components/AddTeam";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTeamPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const memberOptions = [
    { value: "68b0bdb57b0f2431f0ef765a", label: "Ama Sakyiwah" },
    { value: "68b0bdb57b0f2471f0ef765b", label: "John Teye" },
    { value: "68b0bdb57b0f2231f0ef765b", label: "Kofi Mensah" },
  ];

  const handleSubmit = async (data: any) => {
    setLoading(true);
    setError(null);

    try {
      console.log("Submitting payload:", data);

      const res = await fetch("/api/teams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          teamName: data.teamName,
          description: data.description,
          teamLeadId: data.teamLeadId,
          members: data.members?.map((m: any) => ({
            userId: m.value,
            role: m.role || "member",
          })),
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to create team");
      }

      const newTeam = await res.json();
      console.log("✅ Team created:", newTeam);

      // redirect or refresh the team list
      router.push("/dashboard/teams");
    } catch (err: any) {
      setError(err.message);
      console.error("❌ Error creating team:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500 text-sm mb-2">Error: {error}</p>}
      <AddTeam
        memberOptions={memberOptions}
        onSubmit={handleSubmit}
        onCancel={() => router.back()}
      />
      {loading && (
        <p className="text-gray-500 text-sm mt-2">Creating team...</p>
      )}
    </div>
  );
}

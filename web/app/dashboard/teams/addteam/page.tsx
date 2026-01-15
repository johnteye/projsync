"use client";

import AddTeam from "@/app/components/AddTeam";
import { SpinnerSmall } from "@/app/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AddTeamPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
          teamLeadId: data.teamLeadId || null,
          members: data.members?.map((userId: string) => ({
            userId,
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
      {loadingMembers ? (
        <SpinnerSmall />
      ) : (
        <AddTeam
          memberOptions={memberOptions}
          onSubmit={handleSubmit}
          onCancel={() => router.back()}
        />
      )}
      {loading && <SpinnerSmall />}
    </div>
  );
}

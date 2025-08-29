'use client';
import AddTeam from "@/app/components/AddProject";

export default function AddProjectPage() {
  const memberOptions = [
    { value: "u1", label: "Ama Sakyiwah" },
    { value: "u2", label: "John Teye" },
    { value: "u3", label: "Kofi Mensah" },
  ];

  return (
    <AddTeam
      memberOptions={memberOptions}
      onSubmit={(data) => {
        // TODO: send to API
        console.log("AddProject submit:", data);
        // e.g., await fetch("/api/teams", { method: "POST", body: ... })
      }}
      onCancel={() => {
        // e.g., router.back() or navigate elsewhere
        console.log("AddProject cancelled");
      }}
    />
  );
}

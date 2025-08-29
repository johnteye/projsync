'use client';
import AddProject from "@/app/components/AddProject";

export default function AddProjectPage() {
  const memberOptions = [
    { value: "68b0bdb57b0f2431f0ef765a", label: "Ama Sakyiwah" },
    { value: "68b0bdb57b0f2471f0ef765b", label: "John Teye" },
    { value: "68b0bdb57b0f2231f0ef765b", label: "Kofi Mensah" },
  ];

  return (
    <AddProject
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

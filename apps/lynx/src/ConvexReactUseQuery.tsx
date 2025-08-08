
import { api } from "@packages/backend/convex/_generated/api";
import { useQuery } from "convex/react";

export default function ConvexReactUseQuery() {
  const allNotes = useQuery(api.notes.getNotes2) || [];

  return (
    <>
      {
        allNotes.map((note) => (
          <text key={note._id} className="Subtitle">{note.title}</text>
        ))
      }
    </>
  )
}

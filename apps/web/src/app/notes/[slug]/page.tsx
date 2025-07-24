import Header from "@/components/Header";
import NoteDetails from "@/components/notes/NoteDetails";
import { Id } from "@packages/backend/convex/_generated/dataModel";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="bg-[#F5F7FE] h-screen">
      <Header />
      <NoteDetails noteId={slug as Id<"notes">} />
    </main>
  );
}

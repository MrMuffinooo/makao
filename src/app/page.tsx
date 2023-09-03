import PlayCard from "@/components/PlayCard";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <PlayCard value={1} suite="hearts" />
    </main>
  );
}

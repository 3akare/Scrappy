import ScrapeForm from "./components/ScrapeForm";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col gap-8 p-2 m-2">
      <h1 className="text-8xl font-medium">Welcome to Scrappy</h1>
      <ScrapeForm />
    </main>
  );
}

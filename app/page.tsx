import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight">Hola Mundo</h1>
        <p className="text-muted-foreground text-lg">
          Mi portafolio está en construcción ✨
        </p>
        <Button>Bienvenido</Button>
      </div>
    </main>
  );
}

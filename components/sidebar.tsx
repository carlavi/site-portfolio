import Link from "next/link";
import { Gem, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FadeUp } from "@/components/fade-up";

function ContactDialog({ triggerClassName }: { triggerClassName?: string }) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="ghost" size="sm" className={triggerClassName} />}>
        Contact
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-1">
          <Button variant="ghost" size="sm" render={<a href="https://www.linkedin.com/in/carlavivani/" target="_blank" rel="noopener noreferrer" />} nativeButton={false} className="justify-start px-2">
            LinkedIn ↗
          </Button>
          <Button variant="ghost" size="sm" render={<a href="mailto:carlavivani@gmail.com" />} nativeButton={false} className="justify-start px-2">
            Email ↗
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Sidebar() {
  return (
    <aside className="relative z-10 w-full md:w-56 md:shrink-0 flex flex-row md:flex-col items-center md:items-stretch justify-between px-4 md:px-8 py-4 md:py-10">
      <FadeUp delay={0}>
        <Link href="/" className="block">
          <p className="text-sm font-semibold leading-snug">Carla Vivani</p>
          <p className="text-sm mt-0.5 hidden md:block" style={{ color: "var(--muted-foreground)" }}>Product Designer</p>
        </Link>
      </FadeUp>

      {/* Desktop nav */}
      <FadeUp delay={40} className="hidden md:block">
        <div className="flex flex-col gap-3">
          <nav className="flex flex-col gap-1">
            <Button variant="ghost" size="sm" render={<Link href="/about" />} nativeButton={false} className="justify-start px-2">
              About
            </Button>
            <ContactDialog triggerClassName="justify-start px-2" />
          </nav>
          <Link href="/sims" aria-label="Sims" className="inline-flex px-2">
            <Gem className="size-5 text-green-500" />
          </Link>
        </div>
      </FadeUp>

      {/* Mobile burger menu */}
      <FadeUp delay={40} className="md:hidden">
        <Popover>
          <PopoverTrigger render={<Button variant="ghost" size="icon-sm" aria-label="Menu" />}>
            <Menu className="size-5" />
          </PopoverTrigger>
          <PopoverContent align="end" className="w-40">
            <nav className="flex flex-col gap-1">
              <Button variant="ghost" size="sm" render={<Link href="/about" />} nativeButton={false} className="justify-start px-2">
                About
              </Button>
              <ContactDialog triggerClassName="justify-start px-2" />
              <Button variant="ghost" size="sm" render={<Link href="/sims" />} nativeButton={false} className="justify-start gap-2 px-2">
                <Gem className="size-4 text-green-500" />
                Sims
              </Button>
            </nav>
          </PopoverContent>
        </Popover>
      </FadeUp>
    </aside>
  );
}

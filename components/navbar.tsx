import Link from "next/link";
import { Menu } from "lucide-react";
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
      <DialogTrigger render={<Button variant="ghost" className={triggerClassName} />}>
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

// Horizontal top nav shared by every page.
export function Navbar({ className = "" }: { className?: string }) {
  return (
    <header className={`relative z-10 w-full flex items-center justify-between py-4 md:py-6 ${className}`}>
      <FadeUp delay={0}>
        <Link href="/" className="block text-[0.9625rem] font-semibold leading-[1.05]">
          Carla
          <br />
          Vivani
        </Link>
      </FadeUp>

      {/* Desktop nav */}
      <FadeUp delay={40} className="hidden md:block">
        <nav className="flex items-center gap-1">
          <Button variant="ghost" render={<Link href="/about" />} nativeButton={false} className="px-3 text-sm font-semibold">
            About
          </Button>
          <ContactDialog triggerClassName="px-3 text-sm font-semibold" />
        </nav>
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
            </nav>
          </PopoverContent>
        </Popover>
      </FadeUp>
    </header>
  );
}

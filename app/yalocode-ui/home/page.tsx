import { Plus, Zap, Folder, Search, Sparkles, Plug, MessageCircle, RotateCw, Paperclip, ChevronDown } from "lucide-react";

// Hidden recreation of the YaloCode workspace UI, built for Carla to
// screenshot in HD for the case study — not linked from any nav.
// Logo is a placeholder (Sparkles mark) until the real SVG is dropped in.

function Mark({ size }: { size: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-2xl bg-[#1B2646] text-white"
      style={{ width: size, height: size }}
    >
      <Sparkles size={size * 0.5} fill="currentColor" />
    </div>
  );
}

function IconRail() {
  return (
    <div className="flex h-screen w-14 shrink-0 flex-col items-center justify-between border-r border-gray-200 py-4">
      <div className="flex flex-col items-center gap-6">
        <Mark size={28} />
        <div className="flex flex-col items-center gap-5 text-gray-400">
          <Plus size={18} />
          <Zap size={18} />
          <Folder size={18} />
          <Search size={18} />
        </div>
      </div>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1B2646] text-xs font-medium text-white">
        CA
      </div>
    </div>
  );
}

function ContextTab() {
  return (
    <div className="flex items-center gap-2 rounded-t-xl border border-b-0 border-gray-200 bg-gray-50 px-4 py-2.5">
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] text-white">
        <MessageCircle size={12} fill="currentColor" />
      </div>
      <span className="text-sm font-medium text-gray-700">wa-pe2373-petco-mx-qa</span>
      <RotateCw size={13} className="ml-auto text-gray-400" />
    </div>
  );
}

function Composer({ placeholder }: { placeholder: string }) {
  return (
    <div className="rounded-b-2xl rounded-tr-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <textarea
        readOnly
        placeholder={placeholder}
        rows={2}
        className="w-full resize-none text-sm text-gray-400 outline-none placeholder:text-gray-400"
      />
      <div className="mt-3 flex items-center justify-between">
        <button className="flex items-center gap-1.5 text-sm text-gray-500">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Claude Opus 4.7
          <ChevronDown size={14} />
        </button>
        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-gray-200 p-0.5 text-sm">
            <span className="rounded-full px-3 py-1 text-gray-400">Build</span>
            <span className="rounded-full bg-gray-100 px-3 py-1 font-medium text-gray-900">Plan</span>
          </div>
          <Paperclip size={16} className="text-gray-400" />
          <span className="text-sm text-gray-300">Send</span>
        </div>
      </div>
    </div>
  );
}

function SuggestionCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-1 items-start gap-3 rounded-2xl border border-gray-200 p-4">
      <div className="mt-0.5 text-gray-500">{icon}</div>
      <span className="text-sm font-medium text-gray-900">{label}</span>
    </div>
  );
}

export default function YaloCodeHome() {
  return (
    <div className="flex min-h-screen w-full bg-white text-gray-900">
      <IconRail />
      <main className="relative flex flex-1 flex-col items-center justify-center px-6 py-16">
        <div className="absolute right-6 top-6 flex items-center gap-3 rounded-full bg-gray-100 px-3 py-2 text-gray-400">
          <Sparkles size={16} />
          <Plug size={16} />
        </div>

        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <Mark size={56} />
          <h1 className="text-2xl font-bold">Almost there, Carla — don&apos;t stop now</h1>
          <p className="text-gray-400">What are we working on?</p>
        </div>

        <div className="w-full max-w-xl">
          <ContextTab />
          <Composer placeholder="Plan and design before coding…" />
          <div className="mt-3 flex gap-3">
            <SuggestionCard icon={<Sparkles size={16} />} label="Create an agent from a list of use cases" />
            <SuggestionCard icon={<Search size={16} />} label="Analyze recent errors" />
          </div>
        </div>
      </main>
    </div>
  );
}

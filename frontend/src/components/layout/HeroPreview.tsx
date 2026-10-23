import { Bot } from "lucide-react";

function HeroPreview() {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl">

      {/* Header */}
      <div className="space-y-5">


        <div>
  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
    Tone
  </p>

  <div className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3"></div>

  <p className="mt-2 text-sm font-medium text-slate-500">
    Professional
  </p>
</div>

<div>
  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-slate-400">
    Purpose
  </p>

  <div className="rounded-xl border border-slate-700 bg-slate-800/70 px-4 py-3"></div>

  <p className="mt-2 text-sm font-medium text-slate-500">
    Internship Application
  </p>
</div> 

    {/* AI Output Preview */}
<div className="mt-6 rounded-2xl border border-slate-700 bg-slate-800/50 p-4">

  <div className="mb-4 flex items-center gap-2">
    <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>

    <span className="text-sm font-medium text-green-400">
      Generating Email...
    </span>
  </div>

  <div className="space-y-3">

    <div className="h-3 w-3/4 rounded bg-slate-700"></div>

    <div className="h-3 w-full rounded bg-slate-700"></div>

    <div className="h-3 w-5/6 rounded bg-slate-700"></div>

    <div className="h-3 w-4/5 rounded bg-slate-700"></div>

    <div className="h-3 w-2/3 rounded bg-slate-700"></div>

  </div>

</div>
        


        

            
        </div>
      <div className="mb-6 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-indigo-500/20 p-2 text-indigo-400">
            <Bot size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              AI Email Generator
            </h3>

            <p className="text-xs text-slate-400">
              Powered by MailCraft AI
            </p>
          </div>

        </div>

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-400"></span>
        </div>

      </div>

    </div>
  );
}

export default HeroPreview;
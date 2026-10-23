interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-500/10">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
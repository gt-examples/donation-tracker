export default function DonationProgress({ raised, goal }: { raised: number; goal: number }) {
  const pct = Math.min((raised / goal) * 100, 100);
  return (
    <div className="w-full bg-neutral-800 rounded-full h-2.5 mt-2">
      <div
        className="bg-emerald-500 h-2.5 rounded-full transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

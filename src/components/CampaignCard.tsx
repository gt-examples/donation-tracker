import { T, Num, Currency, DateTime } from "gt-next";
import DonationProgress from "./DonationProgress";

interface CampaignCardProps {
  name: string;
  description: string;
  raised: number;
  goal: number;
  donors: number;
  deadline: Date;
  currency: "USD";
}

export default function CampaignCard({
  name,
  description,
  raised,
  goal,
  donors,
  deadline,
  currency,
}: CampaignCardProps) {
  const pct = raised / goal;

  return (
    <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-neutral-100 mb-1">{name}</h4>
          <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
        </div>
        <div className="text-right shrink-0">
          <T>
            <p className="text-lg font-semibold text-emerald-400">
              <Currency currency={currency}>{raised}</Currency>
            </p>
            <p className="text-xs text-neutral-500">
              of <Currency currency={currency}>{goal}</Currency>
            </p>
          </T>
        </div>
      </div>

      <DonationProgress raised={raised} goal={goal} />

      <T>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-500">
          <span>
            <Num>{donors}</Num> donors
          </span>
          <span>
            <Num options={{ style: "percent", maximumFractionDigits: 1 }}>{pct}</Num> funded
          </span>
          <span>
            Deadline: <DateTime options={{ dateStyle: "medium" }}>{deadline}</DateTime>
          </span>
        </div>
      </T>
    </div>
  );
}

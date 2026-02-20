import { T } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector, Num, Currency, DateTime } from "gt-next";
import DonationProgress from "@/components/DonationProgress";
import CampaignCard from "@/components/CampaignCard";

const campaigns = [
  { id: "clean-water", raised: 127450, goal: 200000, donors: 3842, deadline: new Date("2026-04-15"), currency: "USD" as const },
  { id: "education-fund", raised: 89200, goal: 150000, donors: 2156, deadline: new Date("2026-06-01"), currency: "USD" as const },
  { id: "disaster-relief", raised: 312800, goal: 500000, donors: 8934, deadline: new Date("2026-03-31"), currency: "USD" as const },
  { id: "wildlife-conservation", raised: 45600, goal: 100000, donors: 1287, deadline: new Date("2026-08-20"), currency: "USD" as const },
];

export default async function Home() {
  const gt = await getGT();

  const totalRaised = campaigns.reduce((sum, c) => sum + c.raised, 0);
  const totalGoal = campaigns.reduce((sum, c) => sum + c.goal, 0);
  const totalDonors = campaigns.reduce((sum, c) => sum + c.donors, 0);

  // Pre-translate campaign names/descriptions with string literals for CLI
  const campaignData = [
    { ...campaigns[0], name: gt("Clean Water Initiative"), description: gt("Providing access to safe drinking water in underserved communities across three continents.") },
    { ...campaigns[1], name: gt("Global Education Fund"), description: gt("Supporting schools and scholarships for children in developing regions worldwide.") },
    { ...campaigns[2], name: gt("Disaster Relief Network"), description: gt("Rapid response funding for communities affected by natural disasters and emergencies.") },
    { ...campaigns[3], name: gt("Wildlife Conservation Project"), description: gt("Protecting endangered species and preserving critical habitats around the globe.") },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <header className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Donation Tracker")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/donation-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Disclaimer */}
        <div className="mb-8 px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800">
          <p className="text-xs text-neutral-500">
            <T>
              This is an example application built with General Translation to demonstrate internationalization. All campaigns and data shown are fictional.
            </T>
          </p>
        </div>

        {/* Summary stats */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-100 mb-3">
            {gt("Campaign Overview")}
          </h2>
          <p className="text-base text-neutral-400 max-w-xl leading-relaxed mb-8">
            <T>
              Track donation progress across active campaigns. All amounts, dates, and numbers are formatted for your locale.
            </T>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <T>
              <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-5">
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Total Raised</p>
                <p className="text-2xl font-semibold text-emerald-400">
                  <Currency currency="USD">{totalRaised}</Currency>
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  of <Currency currency="USD">{totalGoal}</Currency> goal
                </p>
              </div>
              <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-5">
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Total Donors</p>
                <p className="text-2xl font-semibold text-neutral-100">
                  <Num>{totalDonors}</Num>
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  across <Num>{campaigns.length}</Num> campaigns
                </p>
              </div>
              <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-5">
                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Overall Progress</p>
                <DonationProgress raised={totalRaised} goal={totalGoal} />
                <p className="text-xs text-neutral-500 mt-2">
                  <Num options={{ style: "percent", maximumFractionDigits: 1 }}>{totalRaised / totalGoal}</Num> funded
                </p>
              </div>
            </T>
          </div>
        </div>

        {/* Campaign cards */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-neutral-100 mb-4">
            {gt("Active Campaigns")}
          </h3>
          {campaignData.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              name={campaign.name}
              description={campaign.description}
              raised={campaign.raised}
              goal={campaign.goal}
              donors={campaign.donors}
              deadline={campaign.deadline}
              currency={campaign.currency}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

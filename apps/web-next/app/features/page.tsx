import { Badge, Card, CardContent, CardHeader, CardTitle } from "@releasescope/ui";

import { getFeatures } from "../../lib/data";
import type { Feature, FeatureStatus } from "../../lib/types";

const STATUS_ORDER: Readonly<Record<FeatureStatus, number>> = {
  live: 0,
  planned: 1,
  deprecated: 2
};

const STATUS_LABEL: Readonly<Record<FeatureStatus, string>> = {
  live: "Live",
  planned: "Planned",
  deprecated: "Deprecated"
};

const STATUS_BADGE: Readonly<Record<FeatureStatus, "success" | "warning" | "danger">> = {
  live: "success",
  planned: "warning",
  deprecated: "danger"
};

function sortFeatures(a: Feature, b: Feature): number {
  const byStatus = STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
  if (byStatus !== 0) return byStatus;
  return a.title.localeCompare(b.title);
}

export default async function FeaturesPage() {
  const features = (await getFeatures()).slice().sort(sortFeatures);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Features</h1>
        <p className="text-slate-700">Live first, then planned, then deprecated.</p>
      </div>

      {features.length === 0 ? (
        <Card>
          <CardContent className="pt-4">
            <p className="text-sm text-slate-700">No features yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {features.map((feature) => (
            <Card key={feature.id} as="article" aria-label={feature.title}>
              <CardHeader className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <Badge variant={STATUS_BADGE[feature.status]}>
                    {STATUS_LABEL[feature.status]}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}



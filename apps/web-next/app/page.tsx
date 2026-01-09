import { Badge, Card, CardContent, CardHeader, CardTitle } from "@releasescope/ui";

import { formatIsoDate, getReleases } from "../lib/data";

export default async function HomePage() {
  const releases = await getReleases();
  const latest = releases[0];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">ReleaseScope</h1>
        <p className="text-slate-700">
          A simple viewer for releases, changelogs, and features.
        </p>
      </div>

      <Card as="section" aria-labelledby="latest-release">
        <CardHeader>
          <CardTitle id="latest-release">Latest release</CardTitle>
        </CardHeader>
        <CardContent>
          {latest ? (
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>v{latest.version}</Badge>
                <span className="text-sm text-slate-700">
                  {formatIsoDate(latest.date)}
                </span>
              </div>
              <p className="text-sm text-slate-700">{latest.summary}</p>
              <dl className="grid grid-cols-3 gap-2 text-sm">
                <div className="rounded-md border border-slate-200 bg-slate-50 p-2">
                  <dt className="text-slate-600">New</dt>
                  <dd className="font-medium text-slate-900">
                    {latest.items.new.length}
                  </dd>
                </div>
                <div className="rounded-md border border-slate-200 bg-slate-50 p-2">
                  <dt className="text-slate-600">Improved</dt>
                  <dd className="font-medium text-slate-900">
                    {latest.items.improved.length}
                  </dd>
                </div>
                <div className="rounded-md border border-slate-200 bg-slate-50 p-2">
                  <dt className="text-slate-600">Fixed</dt>
                  <dd className="font-medium text-slate-900">
                    {latest.items.fixed.length}
                  </dd>
                </div>
              </dl>
            </div>
          ) : (
            <p className="text-sm text-slate-700">No releases yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}



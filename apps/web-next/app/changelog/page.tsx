import { Badge, Card, CardContent, CardHeader, CardTitle } from "@releasescope/ui";

import { formatIsoDate, getReleases } from "../../lib/data";

type ChangelogGroupKey = "new" | "improved" | "fixed";

const GROUPS: ReadonlyArray<
  Readonly<{ key: ChangelogGroupKey; label: string }>
> = [
  { key: "new", label: "New" },
  { key: "improved", label: "Improved" },
  { key: "fixed", label: "Fixed" }
];

export default async function ChangelogPage() {
  const releases = await getReleases();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Changelog</h1>
        <p className="text-slate-700">All releases, newest first.</p>
      </div>

      {releases.length === 0 ? (
        <Card>
          <CardContent className="pt-4">
            <p className="text-sm text-slate-700">No releases yet.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {releases.map((release) => (
            <Card key={release.version} as="article" aria-label={`Release ${release.version}`}>
              <CardHeader className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>v{release.version}</Badge>
                  <span className="text-sm text-slate-700">
                    {formatIsoDate(release.date)}
                  </span>
                </div>
                <CardTitle className="text-lg">{release.summary}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-3">
                  {GROUPS.map(({ key, label }) => {
                    const items = release.items[key];
                    return (
                      <section key={key} aria-label={label} className="space-y-2">
                        <div className="flex items-baseline justify-between">
                          <h2 className="text-sm font-semibold text-slate-900">{label}</h2>
                          <span className="text-xs text-slate-600">{items.length}</span>
                        </div>
                        {items.length === 0 ? (
                          <p className="text-sm text-slate-600">—</p>
                        ) : (
                          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                            {items.map((text) => (
                              <li key={text}>{text}</li>
                            ))}
                          </ul>
                        )}
                      </section>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}



import { Card, CardContent, CardHeader, CardTitle } from "@releasescope/ui";

export default function HomePage() {
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
          <p className="text-sm text-slate-700">
            Coming next: loaded from local JSON in a later commit.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}



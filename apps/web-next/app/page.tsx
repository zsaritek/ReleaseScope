export default function HomePage() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">ReleaseScope</h1>
        <p className="text-slate-700">
          A simple viewer for releases, changelogs, and features.
        </p>
      </div>

      <section aria-labelledby="latest-release" className="rounded-lg border p-4">
        <h2 id="latest-release" className="text-base font-semibold">
          Latest release
        </h2>
        <p className="mt-1 text-sm text-slate-700">
          Coming next: loaded from local JSON in a later commit.
        </p>
      </section>
    </div>
  );
}



export type ReleaseItems = Readonly<{
  new: readonly string[];
  improved: readonly string[];
  fixed: readonly string[];
}>;

export type Release = Readonly<{
  version: string;
  date: string; // ISO yyyy-mm-dd
  summary: string;
  items: ReleaseItems;
}>;

export type FeatureStatus = "planned" | "live" | "deprecated";

export type Feature = Readonly<{
  id: string;
  title: string;
  description: string;
  status: FeatureStatus;
}>;



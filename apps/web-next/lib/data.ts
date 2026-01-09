import { readFile } from "node:fs/promises";
import path from "node:path";

import type { Feature, FeatureStatus, Release } from "./types";

const DATA_DIR = path.resolve(process.cwd(), "..", "..", "data");

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((v) => typeof v === "string");
}

function assertReleases(value: unknown): asserts value is Release[] {
  if (!Array.isArray(value)) {
    throw new Error("Invalid releases.json: expected an array");
  }

  for (const item of value) {
    if (!isRecord(item)) throw new Error("Invalid releases.json: item not object");
    if (typeof item.version !== "string")
      throw new Error("Invalid releases.json: version must be string");
    if (typeof item.date !== "string")
      throw new Error("Invalid releases.json: date must be string");
    if (typeof item.summary !== "string")
      throw new Error("Invalid releases.json: summary must be string");
    if (!isRecord(item.items))
      throw new Error("Invalid releases.json: items must be object");

    const items = item.items;
    if (!isStringArray(items.new))
      throw new Error("Invalid releases.json: items.new must be string[]");
    if (!isStringArray(items.improved))
      throw new Error("Invalid releases.json: items.improved must be string[]");
    if (!isStringArray(items.fixed))
      throw new Error("Invalid releases.json: items.fixed must be string[]");
  }
}

function isFeatureStatus(value: unknown): value is FeatureStatus {
  return value === "planned" || value === "live" || value === "deprecated";
}

function assertFeatures(value: unknown): asserts value is Feature[] {
  if (!Array.isArray(value)) {
    throw new Error("Invalid features.json: expected an array");
  }

  for (const item of value) {
    if (!isRecord(item)) throw new Error("Invalid features.json: item not object");
    if (typeof item.id !== "string")
      throw new Error("Invalid features.json: id must be string");
    if (typeof item.title !== "string")
      throw new Error("Invalid features.json: title must be string");
    if (typeof item.description !== "string")
      throw new Error("Invalid features.json: description must be string");
    if (!isFeatureStatus(item.status))
      throw new Error("Invalid features.json: status must be planned|live|deprecated");
  }
}

async function readJsonFile(filename: string): Promise<unknown> {
  const fullPath = path.join(DATA_DIR, filename);
  const raw = await readFile(fullPath, "utf8");
  return JSON.parse(raw) as unknown;
}

export async function getReleases(): Promise<Release[]> {
  const data = await readJsonFile("releases.json");
  assertReleases(data);
  return data;
}

export async function getFeatures(): Promise<Feature[]> {
  const data = await readJsonFile("features.json");
  assertFeatures(data);
  return data;
}

export function formatIsoDate(isoDate: string): string {
  // We store dates as yyyy-mm-dd. Using UTC avoids off-by-one issues.
  const date = new Date(`${isoDate}T00:00:00.000Z`);
  return new Intl.DateTimeFormat(undefined, { year: "numeric", month: "short", day: "2-digit" }).format(date);
}



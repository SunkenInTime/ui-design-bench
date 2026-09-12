/**
 * The core log. Depth is the timeline: 0 cm is the surface (today), 940 cm is
 * the base of the recovered core (March 2016). Every section of the page is a
 * bed, and the sticky core column renders these same records as strata.
 */

export type Bed = {
  /** Matches the id of the corresponding <section> on the page. */
  id: string;
  /** Specimen label. */
  sample: string;
  /** Depth in centimetres below surface. */
  top: number;
  bottom: number;
  /** The year that depth corresponds to. */
  year: string;
  /** Short name, used in the column. */
  name: string;
  /** Lithology description, used in the specimen plate and section head. */
  lithology: string;
  /** Drives the band texture class in the column. */
  tone:
    | "surface"
    | "loose"
    | "interbed"
    | "laminated"
    | "graded"
    | "unconformity"
    | "bedrock"
    | "catcher";
};

export const BEDS: Bed[] = [
  {
    id: "surface",
    sample: "CRN-04-B0",
    top: 0,
    bottom: 60,
    year: "2026",
    name: "Surface",
    lithology: "Weathered surface, worked daily",
    tone: "surface",
  },
  {
    id: "loose-fill",
    sample: "CRN-04-B1",
    top: 60,
    bottom: 180,
    year: "2026",
    name: "Loose fill",
    lithology: "Unconsolidated fill, added each morning",
    tone: "loose",
  },
  {
    id: "interbedded",
    sample: "CRN-04-B2",
    top: 180,
    bottom: 340,
    year: "2025",
    name: "Interbedded",
    lithology: "Interbedded pairs, contact holds both ways",
    tone: "interbed",
  },
  {
    id: "laminated",
    sample: "CRN-04-B3",
    top: 340,
    bottom: 500,
    year: "2023",
    name: "Laminated",
    lithology: "Fine laminae, legible throughout including scans",
    tone: "laminated",
  },
  {
    id: "graded",
    sample: "CRN-04-B4",
    top: 500,
    bottom: 660,
    year: "2022",
    name: "Graded",
    lithology: "Graded bedding, every earlier grain retained",
    tone: "graded",
  },
  {
    id: "unconformity",
    sample: "CRN-04-B5",
    top: 660,
    bottom: 830,
    year: "2019",
    name: "Unconformity",
    lithology: "Buried contact, re-exposed on demand",
    tone: "unconformity",
  },
  {
    id: "bedrock",
    sample: "CRN-04-B6",
    top: 830,
    bottom: 900,
    year: "2017",
    name: "Bedrock",
    lithology: "Plain markdown basement, no cement",
    tone: "bedrock",
  },
  {
    id: "core-catcher",
    sample: "CRN-04-B7",
    top: 900,
    bottom: 940,
    year: "2016",
    name: "Core catcher",
    lithology: "Base of recovery, terms of the sample",
    tone: "catcher",
  },
];

export const CORE_ID = "CRN-2026-04";
export const CORE_BASE = 940;

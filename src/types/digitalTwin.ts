export interface GovernedRecord<TType extends string, TMetadata> {
  id: string;
  entity: "LA84_LENS_STANDALONE";
  type: TType;
  name: string;
  status: "draft" | "review" | "approved" | "published" | "archived";
  owner: string;
  updatedAt: string;
  metadata: TMetadata;
}

export interface HistoricalSceneMetadata {
  year: number;
  locationZone: string;
  privacySafetyLabel: "PUBLIC_SAFE" | "REVIEW_REQUIRED" | "RESTRICTED_DO_NOT_PUBLISH";
  rightsStatus: "MOCK_SYNTHETIC" | "PUBLIC_DOMAIN_CANDIDATE" | "LICENSE_REQUIRED" | "APPROVED_FOR_PROTOTYPE" | "NOT_APPROVED";
}

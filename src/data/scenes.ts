import { GovernedRecord, HistoricalSceneMetadata } from '../types/digitalTwin';

export const mockScenes: GovernedRecord<"historicalScene", HistoricalSceneMetadata>[] = [
  {
    id: "scene-1984-jetpack-arrival",
    entity: "LA84_LENS_STANDALONE",
    type: "historicalScene",
    name: "1984 Jetpack Arrival",
    status: "review",
    owner: "prototype-team",
    updatedAt: "2026-05-20T00:00:00.000Z",
    metadata: {
      year: 1984,
      locationZone: "Peristyle arrival corridor",
      privacySafetyLabel: "PUBLIC_SAFE",
      rightsStatus: "MOCK_SYNTHETIC"
    }
  }
];

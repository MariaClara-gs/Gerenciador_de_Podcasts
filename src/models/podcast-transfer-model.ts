import { Podcast } from "./podcast-models";

export interface PodcastTransferModel {
  statusCode: number;
  body: Podcast[];
}

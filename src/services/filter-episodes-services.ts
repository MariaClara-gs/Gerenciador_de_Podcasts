import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (podcastName: String) => {
  const data = await repositoryPodcast(podcastName);

  return data;
};

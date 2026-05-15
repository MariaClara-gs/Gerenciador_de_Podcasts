import fs from "fs"; //file system para ler e escrever em arquivos de sistema
import path from "path"; //le diretorios especificos
import { Podcast } from "../models/podcast-models";
import { json } from "stream/consumers";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

//esta função tme opção de receber ou não um parâmetro (?)
export const repositoryPodcast = async (
  podcastName?: String,
): Promise<Podcast[]> => {
  const language = "utf-8";
  const data = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(data); //convertendo o arquivo em json

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: Podcast) => podcast.podcastName === podcastName,
    );
  }

  return jsonFile;
};

import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/http-status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined,
): Promise<PodcastTransferModel> => {
  //define interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  //buscando dados
  const queryString = podcastName?.split("?p=")[1] || ""; //vai pegar o "flow" que esta na posicao 1
  const data = await repositoryPodcast(queryString);

  //verifica se tem conteudo
  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }

  responseFormat.body = data;

  return responseFormat;
};

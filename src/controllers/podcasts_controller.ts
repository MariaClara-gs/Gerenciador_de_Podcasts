import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-services";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content = await serviceListEpisodes();
  res.writeHead(200, { "content-type": "application/json" }); //cabecalho
  res.end(
    JSON.stringify(
      //converter para string porque é a forma como navegador entende
      content,
    ),
  ); //conteudo
};

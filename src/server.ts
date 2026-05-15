import * as http from "http";

import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts_controller";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    //queryString
    //http://localhost:3333/api/episode?p=flow
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

    //listar podcasts
    if (request.method === "GET" && baseUrl === "/api/list") {
      await getListEpisodes(request, response);
    }

    //filtrar episodios
    if (request.method === "GET" && baseUrl === "/api/episode") {
      await getFilterEpisodes(request, response);
    }
  },
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}!`);
});

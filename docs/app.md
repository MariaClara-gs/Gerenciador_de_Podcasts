# Podcast Manager

### Descrição

Um app ao estilo netflix, aonde possa centralizar diferentes episódios de podcasts separados por categoria.

### Domínio

Podcasts feitos em vídeo.

### Features

- Listar os episódios de podcasts em sessões de categorias
  - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de Podcast

### Como?

#### Feature:

- Listar os episódios de podcasts em sessões de categorias

#### Como vou implementar:

Vou retornar em uma API REST (JSON) o nome do podcast, o nome do episódio, a imagem da capa e o link.

```js
[
  {
    podcast_name: "Flow Podcast",
    episode: "FABIO AKITA - Flow #588",
    videoId: "4c7pbOxYn_A",
    cover_image:
      "https://i.ytimg.com/vi/4c7pbOxYn_A/maxresdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDN87f2Cl_upIBTMt7bOJbhGgbRGw",
    link: "https://www.youtube.com/watch?v=4c7pbOxYn_A",
    categories: ["ia", "tecnologia"],
  },
  {
    podcast_name: "Flow Podcast",
    episode: "RUBENS BARRICHELLO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover_image:
      "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCo-uZ33SCqtk_5hv2UQSQ8X052zg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: ["esporte", "corrida"],
  },
];
```

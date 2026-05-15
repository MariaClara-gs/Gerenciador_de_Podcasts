# 🎙️ Podcast Manager

Uma API para centralização e organização de episódios de podcasts em vídeo, inspirada na interface de navegação por categorias de serviços de streaming como a Netflix.

## 📌 Descrição

O **Podcast Manager** é um agregador de conteúdos focado em produtividade e entretenimento. Ele permite que o usuário visualize episódios categorizados por temas (saúde, tecnologia, humor, etc.) e realize buscas específicas por nome do podcast, facilitando a curadoria de conteúdo em vídeo.

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **TypeScript**: Superset para tipagem e segurança de código.
- **HTTP Nativo**: Utilização do módulo `http` do Node para criação do servidor.
- **TSX**: Executor de TypeScript veloz para desenvolvimento.
- **TSUP**: Ferramenta de build para empacotar o projeto.

## 🛠️ Funcionalidades

- [x] **Listar Episódios**: Retorna todos os podcasts agrupados por categorias.
- [x] **Filtragem por Nome**: Busca refinada de episódios através de Query Params.
- [x] **Categorias Suportadas**: Saúde, Fitness, Mentalidade, Humor, IA, Tecnologia e mais.

## 📦 Estrutura de Dados (JSON)

A API retorna os dados seguindo o contrato abaixo:

```json
[
  {
    "podcast_name": "Flow Podcast",
    "episode": "FABIO AKITA - Flow #588",
    "videoId": "4c7pbOxYn_A",
    "categories": ["ia", "tecnologia"]
  }
]
```

## 📡 Endpoints

### Listar episódios de podcasts

- **Endpoint:** `GET /list`
- **Descrição:** Retorna uma lista de episódios de podcasts organizados por categorias.

#### Exemplo de resposta

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

---

### Filtrar episódios por nome do podcast

- **Endpoint:** `GET /episode?podcastName={nome}`
- **Descrição:** Retorna episódios com base no nome do podcast informado.

#### Exemplo de requisição

```http
GET /episode?podcastName=flow
```

## 💻 Como Utilizar

1. Clone este repositório.
2. Instale as dependências utilizando:

```bash
npm install
```

3. Inicie o servidor executando:

```bash
npm run start:dev
```

4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.

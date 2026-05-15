export enum ContentType {
  // Application
  JSON = "application/json",
  XML = "application/xml",
  PDF = "application/pdf",
  ZIP = "application/zip",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  OCTET_STREAM = "application/octet-stream",

  // Text
  TEXT = "text/plain",
  HTML = "text/html",
  CSS = "text/css",
  CSV = "text/csv",
  JAVASCRIPT = "text/javascript",

  // Multipart
  FORM_DATA = "multipart/form-data",

  // Image
  PNG = "image/png",
  JPEG = "image/jpeg",
  GIF = "image/gif",
  SVG = "image/svg+xml",
  WEBP = "image/webp",
  ICO = "image/x-icon",

  // Audio
  MP3 = "audio/mpeg",
  WAV = "audio/wav",
  OGG_AUDIO = "audio/ogg",

  // Video
  MP4 = "video/mp4",
  WEBM = "video/webm",
  OGG_VIDEO = "video/ogg",

  // Font
  WOFF = "font/woff",
  WOFF2 = "font/woff2",
  TTF = "font/ttf",

  // Others
  JSON_UTF8 = "application/json; charset=utf-8",
  HTML_UTF8 = "text/html; charset=utf-8",
}

export const MainCategories = [ 'documents', 'images', 'videos', 'audios', 'fonts', 'codes' ];

export const SubCategories: Record<string, string[]> = {
  documents: [
    "csv", "djuv", "doc", "docx", "odp", "ods", "odt", "ott", "pdf", "ppt", "rtf", "txt", "xls", "xlsx"
  ],
  images: [
    "bmp", "cur", "dds", "dng", "erf", "exr", "fts", "gif", "hdr",
    "heic", "heif", "ico", "jfif", "jp2", "jpe", "jpeg", "jpg", "jps", "mng",
    "pam", "pbm", "pcd", "pcx", "pes", "pfm", "pgm",
    "picon", "pict", "png", "pnm", "ppm", "psd", "ras", "sgi",
    "svg", "tga", "tiff", "wbmp", "webp", "xbm", "xpm", "xwd"
  ],
  videos: [ "mp4", "avi", "mkv", "mov", "webm" ],
  audios: [ "mp3", "wav", "flac", "aac", "ogg" ],
  fonts: [ "ttf", "otf", "woff" ],
  codes: [ "py", "c", "cpp", "js", "html", "java" ],
}

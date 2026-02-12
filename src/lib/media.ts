const HTTP_PATTERN = /^https?:\/\//i;

function sanitizeBase(base: string) {
  return base.trim().replace(/\/+$/, "");
}

function sanitizePath(path: string) {
  return path.trim().replace(/^\/+/, "");
}

function resolveBlobAlias(source: string) {
  const blobBase = process.env.NEXT_PUBLIC_BLOB_BASE_URL;
  if (!blobBase) {
    return source;
  }

  const base = sanitizeBase(blobBase);
  const path = sanitizePath(source.replace(/^blob:(\/\/)?/, ""));

  if (!path) {
    return source;
  }

  return `${base}/${path}`;
}

export function resolveMediaSrc(source: string) {
  const src = source.trim();

  if (!src) {
    return src;
  }

  if (src.startsWith("blob:")) {
    return resolveBlobAlias(src);
  }

  if (HTTP_PATTERN.test(src) || src.startsWith("/") || src.startsWith("data:")) {
    return src;
  }

  return src;
}

const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;

function normalizeId(value: string | null): string | null {
  if (!value) {
    return null;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return null;
  }

  if (YOUTUBE_ID_PATTERN.test(trimmed)) {
    return trimmed;
  }

  const matched = trimmed.match(/[A-Za-z0-9_-]{11}/);
  return matched ? matched[0] : null;
}

export function extractYouTubeVideoId(input: string): string | null {
  const direct = normalizeId(input);
  if (direct) {
    return direct;
  }

  const raw = input.trim();

  try {
    const url = new URL(raw);
    const host = url.hostname.replace(/^www\./, "").replace(/^m\./, "");
    const segments = url.pathname.split("/").filter(Boolean);

    if (host === "youtu.be") {
      return normalizeId(segments[0] ?? null);
    }

    if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      if (url.pathname === "/watch") {
        return normalizeId(url.searchParams.get("v"));
      }

      const prefixedSegment =
        (segments[0] === "shorts" || segments[0] === "embed" || segments[0] === "live" || segments[0] === "v")
          ? segments[1]
          : null;

      return normalizeId(prefixedSegment);
    }
  } catch {
    // URL parse failed, continue to regex fallback.
  }

  return normalizeId(raw);
}

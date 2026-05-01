/**
 * Normalize list payloads from getData() — axios already returns response.data,
 * but backends vary: { data: { results } }, { results }, or { data: [] }.
 */
export function extractResultsList(payload) {
  if (!payload) return [];
  if (Array.isArray(payload)) return payload;
  const nested = payload.data?.results ?? payload.results;
  if (Array.isArray(nested)) return nested;
  if (Array.isArray(payload.data)) return payload.data;
  if (Array.isArray(payload.results)) return payload.results;
  return [];
}

/** Human-readable API error for axios errors */
export function getApiErrorMessage(error, fallback = "Something went wrong") {
  const d = error?.response?.data;
  if (!d) return error?.message || fallback;
  if (typeof d.detail === "string") return d.detail;
  if (Array.isArray(d.detail)) {
    const first = d.detail[0];
    if (typeof first === "string") return first;
    if (first?.msg) return first.msg;
  }
  if (d.message) return d.message;
  if (typeof d === "string") return d;
  return fallback;
}

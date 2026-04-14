/**
 * Google Maps JavaScript API loader URL.
 * Set in .env.local (see .env.example). Client-side requires NEXT_PUBLIC_*.
 */
export function getGoogleMapsScriptUrl() {
  const key =
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
    process.env.NEXT_PUBLIC_GOOGLE_API_KEY ||
    "";
  return `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
    key
  )}&libraries=places`;
}

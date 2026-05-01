import { postData } from "@/app/API/method";

/** POST /listing/flip/status — body: { listing_id, status, category } */
export async function postListingFlipStatus(listingId, status, category) {
  return postData("/listing/flip/status", {
    listing_id: String(listingId),
    status,
    category,
  });
}

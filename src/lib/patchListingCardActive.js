/** Updates local card state after PUT `is_active` (string vs boolean `card.status` per view). */
export function patchListingCardActive(
  setData,
  listingId,
  nextActive,
  statusMode = "string"
) {
  setData((prev) =>
    prev.map((c) => {
      const oid = c.originalData?.listing_id || c.originalData?.id;
      if (oid !== listingId) return c;
      const nextStatus =
        statusMode === "boolean"
          ? nextActive
          : nextActive
            ? "active"
            : "inactive";
      return {
        ...c,
        status: nextStatus,
        originalData: c.originalData
          ? { ...c.originalData, is_active: nextActive }
          : c.originalData,
      };
    })
  );
}

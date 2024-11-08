import React, { useState } from "react";
import CardToggle from "./CardToggle";
import ListingCard from "./LisitngCard";
import DeleteListingModal from "./DeleteLisitngModal";
import EditListingModal from "./EditLisitngModal";
import LisitngDetailModal from "./LisitngDetailModal";

const data = [
  {
    image: "/img1.png",
    icons: ["/g1.png", "/g2.png", "/g3.png"], // g1: edit, g2: delete, g3: details
    title: "Landscaping Palm Beach",
    description: "Listing ID BRLO20230915 October 12, 2023 at 2:43 pm",
    price: "$180.00",
    status: "inactive",
  },
  {
    image: "/img2.png",
    icons: ["/g1.png", "/g2.png", "/g3.png"],
    title: "Landscaping Palm Beach",
    description: "Listing ID BRLO20230915 October 12, 2023 at 2:43 pm",
    price: "$180.00",
    status: "active",
  },
  {
    image: "/img2.png",
    icons: ["/g1.png", "/g2.png", "/g3.png"],
    title: "Landscaping Palm Beach",
    description: "Listing ID BRLO20230915 October 12, 2023 at 2:43 pm",
    price: "$180.00",
    status: "active",
  },
  {
    image: "/img2.png",
    icons: ["/g1.png", "/g2.png", "/g3.png"],
    title: "Landscaping Palm Beach",
    description: "Listing ID BRLO20230915 October 12, 2023 at 2:43 pm",
    price: "$180.00",
    status: "active",
  },
  {
    image: "/img2.png",
    icons: ["/g1.png", "/g2.png", "/g3.png"],
    title: "Landscaping Palm Beach",
    description: "Listing ID BRLO20230915 October 12, 2023 at 2:43 pm",
    price: "$180.00",
    status: "active",
  },
  {
    image: "/img2.png",
    icons: ["/g1.png", "/g2.png", "/g3.png"],
    title: "Landscaping Palm Beach",
    description: "Listing ID BRLO20230915 October 12, 2023 at 2:43 pm",
    price: "$180.00",
    status: "active",
  },
  {
    image: "/img2.png",
    icons: ["/g1.png", "/g2.png", "/g3.png"],
    title: "Landscaping Palm Beach",
    description: "Listing ID BRLO20230915 October 12, 2023 at 2:43 pm",
    price: "$180.00",
    status: "active",
  },
  {
    image: "/img2.png",
    icons: ["/g1.png", "/g2.png", "/g3.png"],
    title: "Landscaping Palm Beach",
    description: "Listing ID BRLO20230915 October 12, 2023 at 2:43 pm",
    price: "$180.00",
    status: "active",
  },

  // More cards...
];

const Vehicles = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [OpenDetail, setOpenDetail] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleDeleteClick = (card) => {
    setSelectedCard(card);
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = (card) => {
    setSelectedCard(card);
    setIsEditModalOpen(true);
  };

  const handleOpenDetail = (card) => {
    setSelectedCard(card);
    setOpenDetail(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedCard(null);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedCard(null);
  };

  const handleCloseDetailModal = () => {
    setOpenDetail(false);
    setSelectedCard(null);
  };

  return (
    <div className="grid grid-cols-4 gap-3">
      {data.map((card, index) => (
        <ListingCard
          key={index}
          image={card.image}
          icons={card.icons}
          price={card.price}
          title={card.title}
          description={card.description}
          toggle={<CardToggle status={card.status === "active"} />}
          onIconClick={(icon) => {
            if (icon === "/g1.png") handleEditClick(card);
            if (icon === "/g2.png") handleDeleteClick(card);
            if (icon === "/g3.png") handleOpenDetail(card); // Open detail modal
          }}
        />
      ))}
      <LisitngDetailModal
        isOpen={OpenDetail}
        closeModal={handleCloseDetailModal}
        title={selectedCard?.title} // Pass title or any other relevant data
        description={selectedCard?.description}
        price={selectedCard?.price}
      />
      {/* Delete Modal */}
      {isDeleteModalOpen && (
        <DeleteListingModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          onConfirm={() => {
            console.log("Deleted:", selectedCard);
            handleCloseDeleteModal();
          }}
        />
      )}

      {/* Edit Modal */}
      {isEditModalOpen && (
        <EditListingModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          card={selectedCard} // Pass the selected card to display the details
        />
      )}
    </div>
  );
};

export default Vehicles;

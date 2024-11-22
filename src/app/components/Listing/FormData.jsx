export const FormData = {
  vehicles: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Make", type: "text", name: "make" },
      { label: "Price", type: "number", name: "price" },
      { label: "Model", type: "text", name: "model" },
      { label: "Year", type: "number", name: "year" },
      { label: "Color", type: "text", name: "color" },
      { label: "Fuel Type", type: "text", name: "fuelType" },
      { label: "Description", type: "textarea", name: "description" },
    ],
    cars: {
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Number of Doors", options: ["1/3", "4", "3"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    motorcycle: {
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    truck: {
      fields: [{ label: "Load Capcity", type: "text", name: "loadcapcity" }],
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    bike: {
      fields: [{ label: "Type", type: "text", name: "type" }],
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    boat: {
      fields: [{ label: "Length", type: "text", name: "length" }],
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    van: {
      fields: [{ label: "Passenger Capacity", type: "text", name: "length" }],
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    scooter: {
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    partsandaccessories: {
      fields: [{ label: "Part Name", type: "text", name: "partname" }],
      chips: [
        { label: "Condition", options: ["New", "Used"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    rentals: {
      fields: [
        { label: "Vehicle Type", type: "text", name: "vehicletype" },
        { label: "Rental Duration", type: "text", name: "duration" },
      ],
      chips: [
        { label: "Transmission", options: ["Manual", "Automatic"] },
        { label: "Condition", options: ["New", "Used"] },
        { label: "Purpose", options: ["Sale", "Rental"] },
        { label: "For Sale", options: ["Yes", "No"] },
        { label: "Rentals", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
  },
  realestate: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Property Type", type: "text", name: "propertytype" },
      { label: "No of Bedrooms", type: "number", name: "noofbedrooms" },
      { label: "Year Built", type: "number", name: "yearbuilt" },
      { label: "Size", type: "text", name: "size" },
      { label: "Description", type: "textarea", name: "description" },
    ],
    house: {
      fields: [
        { label: "Parking Availability and Cost", type: "text", name: "cost" },
        {
          label: "Maintenance and Repair Policy",
          type: "text",
          name: "maintainace",
        },
        { label: "Other (Specify)", type: "text", name: "other" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Basement", options: ["YES", "NO"] },
        { label: "Furnished", options: ["UNFURNISHED", "FURNISHED"] },
        { label: "Lease Terms", options: ["DURATION", "RENWAL"] },
        { label: "Credit Score Requirement", options: ["YES", "NO"] },
        {
          label: "Utilities Included",
          options: ["WATER", "GAS", "ELECTRICITY"],
        },
        { label: "Access to Amenities", options: ["POOL", "GYM", "LAUNDARY"] },
        {
          label: "Additional Fees",
          options: ["APPLICATION FEE", "SECURITY DEPOSIT", "MOVE-INFEE"],
        },
        {
          label: "Pet Policy",
          options: [
            "ALLOWED",
            "Not ALLOWED",
            "ADDITIONAL PET FEE",
            "RESTRICTIONS",
          ],
        },
        {
          label: "Renter's Insurance Requirement",
          options: ["REQUIRED", "NOT REQUIRED"],
        },
        {
          label: "Security Measures",
          options: ["GATED COMMUNITY", "SECURITY CAMERAS"],
        },
        { label: "Lease Managed By", options: ["OWNER", "AGENCY"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    apartment: {
      fields: [
        { label: "Parking Availability and Cost", type: "text", name: "cost" },
        {
          label: "Maintenance and Repair Policy",
          type: "text",
          name: "maintainace",
        },
        { label: "Other (Specify)", type: "text", name: "other" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Basement", options: ["YES", "NO"] },
        { label: "Furnished", options: ["UNFURNISHED", "FURNISHED"] },
        { label: "Lease Terms", options: ["DURATION", "RENWAL"] },
        { label: "Credit Score Requirement", options: ["YES", "NO"] },
        {
          label: "Utilities Included",
          options: ["WATER", "GAS", "ELECTRICITY"],
        },
        { label: "Access to Amenities", options: ["POOL", "GYM", "LAUNDARY"] },
        {
          label: "Additional Fees",
          options: ["APPLICATION FEE", "SECURITY DEPOSIT", "MOVE-INFEE"],
        },
        {
          label: "Pet Policy",
          options: [
            "ALLOWED",
            "Not ALLOWED",
            "ADDITIONAL PET FEE",
            "RESTRICTIONS",
          ],
        },
        {
          label: "Renter's Insurance Requirement",
          options: ["REQUIRED", "NOT REQUIRED"],
        },
        {
          label: "Security Measures",
          options: ["GATED COMMUNITY", "SECURITY CAMERAS"],
        },
        { label: "Lease Managed By", options: ["OWNER", "AGENCY"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    land: {
      fields: [
        { label: "Land Type", type: "text", name: "landtype" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Furnished", options: ["UNFURNISHED", "FURNISHED"] },
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    mobilehome: {
      fields: [
        { label: "Parking Availability and Cost", type: "text", name: "cost" },
        {
          label: "Maintenance and Repair Policy",
          type: "text",
          name: "maintainace",
        },
        { label: "Other (Specify)", type: "text", name: "other" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Basement", options: ["YES", "NO"] },
        { label: "Furnished", options: ["UNFURNISHED", "FURNISHED"] },
        { label: "Lease Terms", options: ["DURATION", "RENWAL"] },
        { label: "Credit Score Requirement", options: ["YES", "NO"] },
        {
          label: "Utilities Included",
          options: ["WATER", "GAS", "ELECTRICITY"],
        },
        { label: "Access to Amenities", options: ["POOL", "GYM", "LAUNDARY"] },
        {
          label: "Additional Fees",
          options: ["APPLICATION FEE", "SECURITY DEPOSIT", "MOVE-INFEE"],
        },
        {
          label: "Pet Policy",
          options: [
            "ALLOWED",
            "Not ALLOWED",
            "ADDITIONAL PET FEE",
            "RESTRICTIONS",
          ],
        },
        {
          label: "Renter's Insurance Requirement",
          options: ["REQUIRED", "NOT REQUIRED"],
        },
        {
          label: "Security Measures",
          options: ["GATED COMMUNITY", "SECURITY CAMERAS"],
        },
        { label: "Lease Managed By", options: ["OWNER", "AGENCY"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    commercial: {
      fields: [
        { label: "No of Floors", type: "text", name: "nooffloors" },
        { label: "HOA Fees", type: "text", name: "cost" },
        {
          label: "Maintenance and Repair Policy",
          type: "text",
          name: "maintainace",
        },
        { label: "Other (Specify)", type: "text", name: "other" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Basement", options: ["YES", "NO"] },
        { label: "Furnished", options: ["UNFURNISHED", "FURNISHED"] },
        { label: "Lease Terms", options: ["DURATION", "RENWAL"] },
        { label: "Credit Score Requirement", options: ["YES", "NO"] },
        {
          label: "Utilities Included",
          options: ["WATER", "GAS", "ELECTRICITY"],
        },
        {
          label: "Additional Fees",
          options: ["APPLICATION FEE", "SECURITY DEPOSIT", "MOVE-INFEE"],
        },
        {
          label: "Renter's Insurance Requirement",
          options: ["REQUIRED", "NOT REQUIRED"],
        },
        {
          label: "Security Measures",
          options: ["GATED COMMUNITY", "SECURITY CAMERAS"],
        },
        { label: "Lease Managed By", options: ["OWNER", "AGENCY"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    bedroom: {
      fields: [
        {
          label: "Rent Price and What's Included",
          type: "text",
          name: "nooffloors",
        },
        { label: "Lease Terms", type: "text", name: "cost" },
        {
          label: "Parking Availability and Cost",
          type: "text",
          name: "maintainace",
        },
        {
          label: "Security Deposit and Any Additional Fees)",
          type: "text",
          name: "other",
        },
        { label: "House Rules", type: "text", name: "price" },
        { label: "Location Details", type: "text", name: "price" },
        { label: "Availability Date", type: "date", name: "price" },
        {
          label: "Number of Current Occupants and Type",
          type: "text",
          name: "price",
        },
        { label: "Other (Specify)", type: "text", name: "other" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Bathroom Type", options: ["PRIVATE", "SHARED"] },
        { label: "Kitchen Access and Type", options: ["YES", "NO"] },
        {
          label: "Laundry Facilities",
          options: ["IN-UNIT", "ON-SITE", "OFF-SITE"],
        },
        { label: "Pet Policy", options: ["ALLOWED", "Not ALLOWED"] },
        { label: "Additional Fees", options: ["YES", "NO"] },
        { label: "Smoking Policy", options: ["ALLOWED", "Not ALLOWED"] },
        { label: "Security Features", options: ["LOCKS", "CAMERAS"] },
        {
          label: "Preferred Occupants",
          options: [
            "MEN ONLY",
            "WOMEN ONLY",
            "COUPLES WELCOME",
            "SINGLE OCCUPENCY",
          ],
        },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    suite: {
      fields: [{ label: "Price", type: "text", name: "price" }],
      chips: [
        { label: "Furnished", options: ["UNFURNISHED", "FURNISHED"] },
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    studio: {
      fields: [{ label: "Price", type: "text", name: "price" }],
      chips: [
        { label: "Furnished", options: ["UNFURNISHED", "FURNISHED"] },
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    vacationhome: {
      fields: [
        { label: "Rental Price", type: "text", name: "price" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Furnished", options: ["UNFURNISHED", "FURNISHED"] },
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    basement: {
      fields: [{ label: "Price", type: "text", name: "price" }],
      chips: [
        { label: "Furnished", options: ["UNFURNISHED", "FURNISHED"] },
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
  },
  electronics: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Brand", type: "text", name: "brand" },
      { label: "Model", type: "number", name: "Model" },
      { label: "Warranty", type: "number", name: "Warranty" },
      { label: "Description", type: "textarea", name: "description" },
    ],
    smartphones: {
      fields: [
        { label: "Operating System", type: "text", name: "os" },
        { label: "Carrier Lock", type: "text", name: "lock" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    computers: {
      fields: [
        { label: "Processor", type: "text", name: "processor" },
        { label: "RAM", type: "text", name: "ram" },
        { label: "Storage Type", type: "text", name: "stype" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    appliances: {
      fields: [
        { label: "Energy Rating", type: "text", name: "processor" },
        { label: "Dimensions", type: "text", name: "ram" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    games: {
      fields: [
        { label: "Platforms", type: "text", name: "processor" },
        { label: "Jenry", type: "text", name: "ram" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    servicesandparts: {
      fields: [
        { label: "Part Type", type: "text", name: "processor" },
        { label: "Compatible Model", type: "text", name: "ram" },
        { label: "Price", type: "text", name: "price" },
      ],
      chips: [
        { label: "Condition", options: ["NEW", "USED"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
  },
  events: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Event Date & Time", type: "date", name: "brand" },
      { label: "Expected Audience", type: "text", name: "Model" },
      { label: "Special Feature", type: "text", name: "Warranty" },
      { label: "Description", type: "textarea", name: "description" },
      { label: "Ticket Price", type: "text", name: "price" },
    ],
    networkingevents: {
      fields: [
        { label: "Industry Focus", type: "text", name: "processor" },
        { label: "Speaker List", type: "text", name: "ram" },
      ],
      chips: [{ label: "Negotiable", options: ["Yes", "No"] }],
    },
    concert: {
      fields: [
        { label: "Performer", type: "text", name: "processor" },
        { label: "Genre", type: "text", name: "ram" },
      ],
      chips: [{ label: "Negotiable", options: ["Yes", "No"] }],
    },
    festival: {
      fields: [
        { label: "No of Days", type: "text", name: "processor" },
        { label: "Theme", type: "text", name: "ram" },
        { label: "Major Attraction", type: "text", name: "ram" },
      ],
      chips: [{ label: "Negotiable", options: ["Yes", "No"] }],
    },
  },
  jobs: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Job Title", type: "date", name: "brand" },
      { label: "Required Skills", type: "text", name: "Model" },
      { label: "Experience Level", type: "text", name: "Warranty" },
      { label: "Employment Type", type: "textarea", name: "description" },
      { label: "Salary Range", type: "text", name: "price" },
    ],
    fulltime: {
      fields: [
        { label: "Working Hours", type: "text", name: "processor" },
        { label: "Benefits offered", type: "text", name: "ram" },
        { label: "Benefits offered", type: "text", name: "ram" },
      ],

      chips: [
        { label: "Work Permit", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    parttime: {
      fields: [
        { label: "Working Hours", type: "text", name: "processor" },
        { label: "Flexibility", type: "text", name: "ram" },
      ],

      chips: [
        { label: "Work Permit", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    freelancer: {
      fields: [
        { label: "Project Type", type: "text", name: "processor" },
        { label: "Contact Duration", type: "text", name: "ram" },
      ],

      chips: [{ label: "Negotiable", options: ["Yes", "No"] }],
    },
    helper: {
      fields: [
        { label: "Duties", type: "text", name: "processor" },
        { label: "Accommodation Provided", type: "text", name: "ram" },
      ],

      chips: [
        { label: "Own Tools Needed", options: ["Yes", "No"] },
        { label: "Car Needed", options: ["Yes", "No"] },
        { label: "Permit Work", options: ["Yes", "No"] },
        { label: "Pay", options: ["HOUR", "DAY", "TASKS", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    homeoffice: {
      fields: [
        {
          label: "Remote Work Tools Provided",
          type: "text",
          name: "processor",
        },
        { label: "Work Hours", type: "text", name: "ram" },
      ],

      chips: [{ label: "Negotiable", options: ["Yes", "No"] }],
    },
  },
  furniture: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Material Type", type: "date", name: "brand" },
      { label: "Color", type: "text", name: "Model" },
      { label: "Dimension", type: "text", name: "Warranty" },
      { label: "Price", type: "text", name: "price" },
      { label: "Description", type: "textarea", name: "price" },
    ],
    couch: {
      fields: [
        { label: "Seating Capacity", type: "text", name: "processor" },
        { label: "Upholstery Material", type: "text", name: "ram" },
        { label: "Benefits offered", type: "text", name: "ram" },
      ],

      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    tables: {
      fields: [
        { label: "Table Type", type: "text", name: "processor" },
        { label: "Shape", type: "text", name: "ram" },
      ],

      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    chairs: {
      fields: [
        { label: "Chair Type", type: "text", name: "processor" },
        { label: "Weight Capacity", type: "text", name: "ram" },
      ],

      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    beds: {
      fields: [{ label: "Bed Size", type: "text", name: "processor" }],

      chips: [
        { label: "Mattress Included", options: ["Yes", "No"] },
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    customfurniture: {
      fields: [
        { label: "Customization", type: "text", name: "processor" },
        { label: "Lead Time", type: "text", name: "ram" },
      ],

      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
  },
  fashion: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Brand", type: "text", name: "location" },
      { label: "Size", type: "text", name: "location" },
      { label: "Color", type: "text", name: "Model" },
      { label: "Material Type", type: "date", name: "brand" },
      { label: "Description", type: "textarea", name: "price" },
    ],
    clothes: {
      fields: [{ label: "Gender", type: "text", name: "processor" }],

      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    shoes: {
      fields: [{ label: "Shoe Type", type: "text", name: "processor" }],

      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    accessories: {
      fields: [{ label: "Type", type: "text", name: "processor" }],

      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    beautyproducts: {
      fields: [
        { label: "Skin Type", type: "text", name: "processor" },
        { label: "Expiry Date", type: "text", name: "processor" },
      ],

      chips: [
        { label: "Mattress Included", options: ["Yes", "No"] },
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    jewelry: {
      fields: [{ label: "Gem Stone", type: "text", name: "processor" }],

      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
  },
  kids: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Age Range", type: "text", name: "location" },
      { label: "Description", type: "textarea", name: "price" },
      { label: "Price", type: "text", name: "price" },
    ],
    health: {
      fields: [
        { label: "Product Type", type: "text", name: "processor" },
        { label: "Expiry Date", type: "date", name: "processor" },
      ],

      chips: [
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    toys: {
      fields: [
        { label: "Toy Type", type: "text", name: "processor" },
        { label: "Safety Standard", type: "text", name: "processor" },
      ],

      chips: [
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    transport: {
      fields: [
        { label: "Vehicle Type", type: "text", name: "processor" },
        { label: "Weight Capacity", type: "text", name: "processor" },
      ],

      chips: [
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    accessories: {
      fields: [{ label: "Type", type: "text", name: "processor" }],

      chips: [
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    classes: {
      fields: [
        { label: "Subject", type: "text", name: "processor" },
        { label: "Duration", type: "text", name: "processor" },
        { label: "Level", type: "text", name: "processor" },
      ],

      chips: [
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    babysitter: {
      fields: [{ label: "Experience Level", type: "text", name: "processor" }],

      chips: [
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    daycare: {
      fields: [
        { label: "No of Children", type: "text", name: "processor" },
        { label: "Age Group", type: "text", name: "processor" },
      ],

      chips: [
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    schooloffices: {
      chips: [
        {
          label: "Grades",
          options: [
            "KINDERGARTEN",
            "ELEMENTARY SCHOOL",
            "MIDDLE SCHOOL",
            "HIGH SCHOOL",
            "COLLEGE",
            "UNIVERSITY",
          ],
        },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    afterschoolprogram: {
      fields: [
        { label: "Activities Offered", type: "text", name: "processor" },
        { label: "Duration", type: "text", name: "processor" },
      ],
      chips: [
        {
          label: "Grades",
          options: [
            "KINDERGARTEN",
            "ELEMENTARY SCHOOL",
            "MIDDLE SCHOOL",
            "HIGH SCHOOL",
            "COLLEGE",
            "UNIVERSITY",
          ],
        },
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    activities: {
      fields: [
        { label: "Type of Activity", type: "text", name: "processor" },
        { label: "Equipment Required", type: "text", name: "processor" },
      ],
      chips: [
        { label: "Donation", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
  },
  sportsandhobby: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Item Type", type: "text", name: "location" },
      { label: "Description", type: "textarea", name: "price" },
      { label: "Price", type: "text", name: "price" },
    ],
    sportsequipment: {
      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    musicalinstruments: {
      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    collecteditems: {
      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    games: {
      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    camping: {
      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    outdooractivities: {
      fields: [{ label: "Activity Type", type: "text", name: "processor" }],
      chips: [
        { label: "Condition", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
  },
  services: {
    commonFields: [
      { label: "Choose Image", type: "file", name: "image" },
      { label: "Ad Title", type: "text", name: "title" },
      { label: "Location", type: "text", name: "location" },
      { label: "Availability", type: "text", name: "make" },
      ,
      {
        label: "Description of Services Offered",
        type: "textarea",
        name: "description",
      },
      { label: "Service Fee", type: "text", name: "description" },
    ],
    cleaning: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Cleaning Type", type: "text", name: "loadcapcity" },
      ],
      chips: [
        { label: "Insurance", options: ["REQUIRED", "NOT REQUIRED"] },
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Cleaning Offered",
          options: [
            "DEEP CLEANING",
            "4STANDARD CLEANING",
            "MOVE-IN/MOVE-OUT",
            "POST CONSTRUCTION",
            "ORGANIZATION",
            "UPHOLSTERY CLEANING",
            "PRESSURE WASHING",
            "PRESSURE WASHING",
          ],
        },
        {
          label: "Eco-Friendly or Chemical-Free Product",
          options: ["YES", "NO"],
        },
        { label: "Equipment Provided", options: ["Yes", "No"] },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    handyman: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Specific Services Offered",
          options: [
            "PLUMBING",
            "ELECTRICAL",
            "CARPENTARY",
            "GENERAL REPAIRS",
            "OTHER SPECIFIC SERVICES (SPECIFY)",
          ],
        },
        {
          label: "Emergency or Same-Day Service Availability",
          options: ["Yes", "No"],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    drivers: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Insurance and Bonding Status",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Additional Services Provided",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Driving Services Offered",
          options: [
            "PERSONAL DRIVERS",
            "DELIVERIES",
            "AIRPORT TRANSFERS",
            "LONG TRIP AVAILABILITY",
            "RECURRING RIDES",
          ],
        },
        {
          label: "Types of Vehicles Available",
          options: ["SEDAN", "SUV", "LUXURY CAR", "VAN", "OTHER (SPECIFY)"],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    landscaping: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Landscaping Services Provided",
          options: [
            "MOWING DRIVERS",
            "PLANTING",
            "DESIGN",
            "IRRIGATION",
            "LIGHTING",
            "SNOW REMOVAL",
            "OTHER (SPECIFY)",
          ],
        },
        {
          label: "Regular Maintenance Service Availability",
          options: ["Yes", "No"],
        },
        {
          label: "Seasonal or One-Time Services",
          options: ["SESONAL SERVICES", "ONE-TIME SERVICES"],
        },

        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    consultancy: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Process for Initial Consultation",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Landscaping Services Provided",
          options: ["BUSINESS", "MARKETING", "FINANCE", "OTHER (SPECIFY)"],
        },
        {
          label: "Services Available",
          options: ["IN-PERSON", "REMOTELY", "REMOTELY"],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    homeautomation: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Brands or Products Supported",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Home Automation Services Offered",
          options: [
            "SECURITY",
            "LIGHTING",
            "ENTERTAINMENT",
            "CLIMATE CONTROL",
            "OTHER (SPECIFY)",
          ],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    classesandcourses: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Subjects or Skills", type: "text", name: "loadcapcity" },
        {
          label: "Duration and Format of the Classes",
          type: "text",
          name: "loadcapcity",
        },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Duration and Format of the Classes",
          options: ["ONLINE", "IN-PERSON", "BOTH"],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    personaltraining: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Training Offered",
          options: [
            "FITNESS",
            "WEIGHT LOSS",
            "STRENGTH TRAINING",
            "DANCE",
            "CIRCUIT TRAINING",
            "OTHER (SPECIFY)",
          ],
        },
        {
          label: "Session Format",
          options: ["IN-PERSON", "ONLINE", "BOTH", "DANCE"],
        },
        {
          label: "Personalized Fitness Plan",
          options: ["INCLUDED", "NOT INCLUDED"],
        },
        { label: "Group Sessions Availability", options: ["Yes", "No"] },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    construction: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Construction Services Offered",
          options: [
            "RESIDENTIAL",
            "COMMERCIAL",
            "RENOVATION",
            "OTHER (SPECIFY)",
          ],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    technology: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Expertise Level",
          options: ["BEGINNER", "INTERMEDIATE", "ADVANCED"],
        },
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Technology Services Offered",
          options: [
            "IT SUPPORT",
            "SOFTWARE DEVELOPMENT",
            "HARDWARE REPAIR",
            "OTHER (SPECIFY)",
          ],
        },
        {
          label: "Service Delivery Method",
          options: ["ON-SITE", "REMOTELY", "BOTH"],
        },
        { label: "Ongoing Support and Maintenance", options: ["Yes", "No"] },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    immigrationandvisa: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Travel and Visa Services Offered",
          options: [
            "VISA APPLICATIONS",
            "GREEN CARD APPLICATIONS",
            "NATURALIZATION SERVICES",
            "STUDENT VISA SERVICES",
            "INVESTOR VISA SERVICES",
            "WORK PERMIT APPLICATIONS",
            "FAMILY SPONSERSHIP",
            "ASYLUM",
            "CITIZENSHIP",
          ],
        },
        {
          label: "Service Delivery Method",
          options: ["ON-SITE", "REMOTELY", "BOTH"],
        },
        { label: "Ongoing Support and Maintenance", options: ["Yes", "No"] },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    eventservices: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Portfolio or Gallery of Past Events",
          type: "file",
          name: "loadcapcity",
        },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Events",
          options: [
            "WEDDINGS",
            "CORPORATE EVENTS",
            "PARTIES",
            "OTHER (SPECIFY)",
          ],
        },
        {
          label: "Specific Services Offered",
          options: ["PLANNING", "CATTERING", "DECORATION"],
        },
        { label: "Customizable Packages", options: ["Yes", "No"] },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    moversandpackers: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Moving Services Offered",
          options: [
            "LOCAL",
            "LOCAL-DISTANCE",
            "RESIDENTIAL",
            "COMMERCIAL",
            "STORAGE",
            "INTERNATIONALLY",
          ],
        },
        {
          label: "Specific Services Offered",
          options: ["PLANNING", "CATTERING", "DECORATION"],
        },
        { label: "Packing Materials Provided", options: ["Yes", "No"] },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    farmandfreshfood: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Delivery Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Products Available",
          options: [
            "VEGETABLES",
            "FRUITS",
            "DAIRY",
            "FAIR",
            "LUNCH",
            "CLONIAL COFFEE",
            "OTHER (SPECIFY)",
          ],
        },
        {
          label: "Specific Services Offered",
          options: ["PLANNING", "CATTERING", "DECORATION"],
        },
        { label: "Delivery Availability", options: ["Yes", "No"] },
        {
          label: "Products Organic or Sustainably Sourced",
          options: ["Yes", "No"],
        },
        {
          label: "Subscription or Regular Delivery Option",
          options: ["Yes", "No"],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    videoandphotography: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Photography or Videography Services Offered",
          options: [
            "WEDDINGS",
            "CORPORATE",
            "PORTRAIT",
            "COMMERCIAL",
            "DRONE",
            "OTHER (SPECIFY)",
          ],
        },
        {
          label: "Specific Services Offered",
          options: ["PLANNING", "CATTERING", "DECORATION"],
        },
        { label: "Different Packages Available", options: ["Yes", "No"] },
        {
          label: "Recurring Service Packages Available",
          options: ["Yes", "No"],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    interiordesign: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Initial Consultation Fee",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Interior Design Services Offered",
          options: ["RESIDENTIAL", "COMMERCIAL", "VIRTUAL", "OTHER (SPECIFY)"],
        },
        {
          label: "Material and Furniture Selections Included",
          options: ["Yes", "No"],
        },
        {
          label: "3D Renderings or Visualizations Provided",
          options: ["Yes", "No"],
        },
        {
          label: "Recurring Service Packages Available",
          options: ["Yes", "No"],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    homemadefood: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Homemade Food Available",
          options: [
            "BAKED GOODS",
            "MEALS",
            "SNACKS",
            "PERSONAL CHEF",
            "OTHER (SPECIFY)",
          ],
        },
        {
          label: "Service Availability",
          options: ["DELIVERY", "PICKUP", "AT-HOME PREP", "ALL OF THE ABOVE"],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    insuranceservices: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Insurance Services Offered",
          options: [
            "HEALTH",
            "AUTO",
            "HOME",
            "LIFE",
            "BUSINESS",
            "OTHER (SPECIFY)",
          ],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    homecarehealth: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Pricing Structure", type: "text", name: "loadcapcity" },
        {
          label: "Service Area or Travel Radius",
          type: "text",
          name: "loadcapcity",
        },
        {
          label: "Experience and Qualifications",
          type: "text",
          name: "loadcapcity",
        },
        { label: "Other (Specify)", type: "text", name: "loadcapcity" },
      ],
      chips: [
        {
          label: "Payment Options",
          options: ["CASH", "CREDIT CARD", "ZELLE", "VENMO", "PAYPAL", "PIX"],
        },
        {
          label: "Types of Home Care Services Provided",
          options: [
            "NURSING",
            "PHYSICAL THERAPY",
            "COMPANIANSHIP",
            "PERSONAL CARE",
            "HOME MAKING",
            "OTHER (SPECIFY)",
          ],
        },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    catering: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Cuisine Type", type: "text", name: "loadcapcity" },
        { label: "Services Offered", type: "text", name: "loadcapcity" },
      ],
      chips: [
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    chef: {
      fields: [
        { label: "Service Type", type: "text", name: "loadcapcity" },
        { label: "Cuisine Specialty", type: "text", name: "loadcapcity" },
      ],
      chips: [
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    influencer: {
      fields: [
        { label: "Platform", type: "text", name: "loadcapcity" },
        { label: "Audience Size", type: "text", name: "loadcapcity" },
      ],
      chips: [
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    acservices: {
      fields: [
        { label: "Services Offered", type: "text", name: "loadcapcity" },
        { label: "Brand Specialization", type: "text", name: "loadcapcity" },
      ],
      chips: [
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    personaltrainer: {
      fields: [{ label: "Specialization", type: "text", name: "loadcapcity" }],
      chips: [
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    cake: {
      fields: [{ label: "Types", type: "text", name: "loadcapcity" }],
      chips: [
        { label: "Customization", options: ["Yes", "No"] },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    fingerfood: {
      fields: [
        { label: "Cuisine Type", type: "text", name: "loadcapcity" },
        { label: "Menu", type: "text", name: "loadcapcity" },
      ],
      chips: [
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    buffet: {
      fields: [{ label: "Cuisine Type", type: "text", name: "loadcapcity" }],
      chips: [
        { label: "Menu Customization", options: ["Yes", "No"] },
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
    transportservices: {
      fields: [
        { label: "Vehicle Type", type: "text", name: "loadcapcity" },
        { label: "Distance", type: "text", name: "loadcapcity" },
      ],
      chips: [
        { label: "Certification", options: ["Yes", "No"] },
        { label: "Negotiable", options: ["Yes", "No"] },
      ],
    },
  },
};

export const Update_data={
    "Fashion" : [
      { "name": "title", "label": "Title", "type": "text", "required": true },
      { "name": "description", "label": "Description", "type": "textarea", "required": true },
      { "name": "price", "label": "Price", "type": "number", "required": true },
      { 
        "name": "negotiable", 
        "label": "Negotiable", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
      { 
        "name": "condition", 
        "label": "Condition", 
        "type": "select", 
        "options": ["NEW", "USED"],
        "required": true 
      },
      { "name": "color", "label": "Color", "type": "text", "required": true },
      { "name": "material_type", "label": "Material Type", "type": "text", "required": true },
      { "name": "size", "label": "Size", "type": "text", "required": true },
      { "name": "brand", "label": "Brand", "type": "text", "required": true },
      { 
        "name": "subcategory", 
        "label": "Subcategory", 
        "type": "select",
        "options": ["Jewelry", "Clothing", "Accessories", "Footwear", "Watches"],
        "required": true 
      },
      { 
        "name": "donation", 
        "label": "Donation", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
    //   { 
    //     "name": "from_business", 
    //     "label": "From Business", 
    //     "type": "select", 
    //     "options": ["true", "false"],
    //     "required": true 
    //   },
      { "name": "keywords", "label": "Keywords (comma separated)", "type": "text", "required": false }
    ],
    "Sports & Hobby": [
      { "name": "title", "label": "Title", "type": "text", "required": true },
      { "name": "description", "label": "Description", "type": "textarea", "required": true },
      { "name": "price", "label": "Price", "type": "number", "required": true },
      { 
        "name": "negotiable", 
        "label": "Negotiable", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
      { 
        "name": "condition", 
        "label": "Condition", 
        "type": "select", 
        "options": ["NEW", "USED"],
        "required": true 
      },
      { "name": "material_type", "label": "Material Type", "type": "text", "required": true },
      { "name": "color", "label": "Color", "type": "text", "required": true },
      { "name": "size", "label": "Size", "type": "text", "required": true },
      { "name": "brand", "label": "Brand", "type": "text", "required": true },
      { 
        "name": "subcategory", 
        "label": "Subcategory", 
        "type": "select",
        "options": ["Sports Equipment", "Fitness Gear", "Outdoor Activities", "Team Sports", "Water Sports"],
        "required": true 
      },
      { 
        "name": "donation", 
        "label": "Donation", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
    //   { 
    //     "name": "from_business", 
    //     "label": "From Business", 
    //     "type": "select", 
    //     "options": ["true", "false"],
    //     "required": true 
    //   },
      { "name": "keywords", "label": "Keywords (comma separated)", "type": "text", "required": false }
    ],
    "Furniture": [
      { "name": "title", "label": "Title", "type": "text", "required": true },
      { "name": "description", "label": "Description", "type": "textarea", "required": true },
      { "name": "price", "label": "Price", "type": "number", "required": true },
      { 
        "name": "negotiable", 
        "label": "Negotiable", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
      { 
        "name": "condition", 
        "label": "Condition", 
        "type": "select", 
        "options": ["NEW", "USED"],
        "required": true 
      },
      { "name": "material_type", "label": "Material Type", "type": "text", "required": true },
      { "name": "color", "label": "Color", "type": "text", "required": true },
      { "name": "dimensions", "label": "Dimensions", "type": "text", "required": true },
      { 
        "name": "donation", 
        "label": "Donation", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
    //   { 
    //     "name": "from_business", 
    //     "label": "From Business", 
    //     "type": "select", 
    //     "options": ["true", "false"],
    //     "required": true 
    //   },
      { 
        "name": "subcategory", 
        "label": "Subcategory", 
        "type": "select", 
        "options": ["Custom Furniture", "Sofas & Couches", "Tables & Chairs", "Beds & Mattresses", "Wardrobes & Storage", "Office Furniture", "Other Furniture"],
        "required": true 
      },
      { "name": "category", "label": "category (comma separated)", "type": "text", "required": true },
      { "name": "keywords", "label": "Keywords (comma separated)", "type": "text", "required": false }
    ],
    "Electronics": [
      { "name": "title", "label": "Title", "type": "text", "required": true },
      { "name": "description", "label": "Description", "type": "textarea", "required": true },
      { "name": "price", "label": "Price", "type": "number", "required": true },
      { 
        "name": "negotiable", 
        "label": "Negotiable", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
      { 
        "name": "condition", 
        "label": "Condition", 
        "type": "select", 
        "options": ["NEW", "USED"],
        "required": true 
      },
      { 
        "name": "warranty", 
        "label": "Warranty", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
      { "name": "model", "label": "Model", "type": "text", "required": true },
      { "name": "brand", "label": "Brand", "type": "text", "required": true },
      { "name": "service_type", "label": "Service Type", "type": "text", "required": true },
      { "name": "category", "label": "category ", "type": "text", "required": true },
      { 
        "name": "subcategory", 
        "label": "Subcategory", 
        "type": "select", 
        "options": ["Smartphones", "Computers & Tablets", "TV & Home Theater", "Cameras & Camcorders", "Audio", "Services & Parts", "Other Electronics"],
        "required": true 
      },
    //   { 
    //     "name": "from_business", 
    //     "label": "From Business", 
    //     "type": "select", 
    //     "options": ["true", "false"],
    //     "required": true 
    //   },
      { "name": "keywords", "label": "Keywords (comma separated)", "type": "text", "required": false }
    ],
    "Jobs": [
      { "name": "title", "label": "Job Title", "type": "text", "required": true },
      { "name": "description", "label": "Job Description", "type": "textarea", "required": true },
      { "name": "company", "label": "Company", "type": "text", "required": true },
      { "name": "experience_level", "label": "Experience Level", "type": "text", "required": true },
      { "name": "job_tittle", "label": "Job tittle", "type": "text", "required": true },
      { "name": "required_skills", "label": "Required Skills", "type": "text", "required": true },
      { "name": "employment_type", "label": "Employment Type ", "type": "text", "required": true },
      { "name": "salary_range", "label": "Salary", "type": "text", "required": true },
      { "name": "working_hours", "label": "working hours", "type": "number", "required": true },
      { 
        "name": "negotiable", 
        "label": "Negotiable", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
      { 
        "name": "job_type", 
        "label": "Job Type", 
        "type": "select", 
        "options": ["FULL_TIME", "PART_TIME", "CONTRACT", "TEMPORARY", "INTERNSHIP", "VOLUNTEER"],
        "required": true 
      },
      { "name": "keywords", "label": "Keywords (comma separated)", "type": "text", "required": false },
      { "name": "category", "label": "Category", "type": "text", "required": true },
      { "name": "subcategory", "label": "Subcategory", "type": "text", "required": true }
    ],
    "Vehicles": [
      { "name": "title", "label": "Title", "type": "text", "required": true },
      { "name": "description", "label": "Description", "type": "textarea", "required": true },
      { "name": "make", "label": "Make", "type": "text", "required": true },
      { "name": "model", "label": "Model", "type": "text", "required": true },
      { "name": "year", "label": "Year", "type": "number", "required": true },
      { "name": "color", "label": "Color", "type": "text", "required": true },
      { "name": "price", "label": "Price", "type": "number", "required": true },
      { 
        "name": "negotiable", 
        "label": "Negotiable", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
      { 
        "name": "condition", 
        "label": "Condition", 
        "type": "select", 
        "options": ["NEW", "USED"],
        "required": true 
      },
      { "name": "keywords", "label": "Keywords (comma separated)", "type": "text", "required": false },
      { "name": "category", "label": "Category", "type": "text", "required": true },
      { "name": "subcategory", "label": "Subcategory", "type": "text", "required": true }
    ],
    "Kids": [
      { "name": "title", "label": "Title", "type": "text", "required": true },
      { "name": "description", "label": "Description", "type": "textarea", "required": true },
      { "name": "price", "label": "Price", "type": "number", "required": true },
      { 
        "name": "negotiable", 
        "label": "Negotiable", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
      { 
        "name": "donation", 
        "label": "Donation", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
      { "name": "age_range", "label": "Age Range", "type": "text", "required": true },
      { "name": "keywords", "label": "Keywords (comma separated)", "type": "text", "required": false },
      { 
        "name": "subcategory", 
        "label": "Subcategory", 
        "type": "select",
        "options": ["Activities", "Clothing", "Toys", "Education", "Other"],
        "required": true 
      },
    //   { 
    //     "name": "from_business", 
    //     "label": "From Business", 
    //     "type": "checkbox", 
    //     "required": false 
    //   },
      { "name": "category", "label": "Category", "type": "text", "required": true }
    ],
    "Events": [
      { "name": "title", "label": "Title", "type": "text", "required": true },
      { "name": "description", "label": "Description", "type": "textarea", "required": true },
      { "name": "location", "label": "Location", "type": "text", "required": true },
      { "name": "event_type", "label": "Event Type", "type": "text", "required": true },
      { "name": "event_date", "label": "Event Date", "type": "datetime-local", "required": true },
      { "name": "expected_audience", "label": "Expected Audience", "type": "number", "required": true },
      { "name": "special_feature", "label": "Special Feature", "type": "text", "required": true },
      { "name": "ticket_price", "label": "Ticket Price", "type": "number", "required": true },
      { 
        "name": "negotiable", 
        "label": "Negotiable", 
        "type": "select", 
        "options": ["YES", "NO"],
        "required": true 
      },
      { "name": "industry_focus", "label": "Industry Focus", "type": "text", "required": true },
      { "name": "keywords", "label": "Keywords (comma separated)", "type": "text", "required": false },
    //   { 
    //     "name": "from_business", 
    //     "label": "From Business", 
    //     "type": "checkbox", 
    //     "required": false 
    //   },
      { "name": "category", "label": "Category", "type": "text", "required": true },
      { "name": "subcategory", "label": "Subcategory", "type": "text", "required": true }
    ],
    "Real Estate": [
      { "name": "title", "label": "Title", "type": "text", "required": true },
      { "name": "description", "label": "Description", "type": "text", "required": true },
      { "name": "price", "label": "Price", "type": "number", "required": true },
      {
        "name": "negotiable",
        "label": "Negotiable",
        "type": "select",
        "options": ["YES", "NO"],
        "required": true
      },
      {
        "name": "condition",
        "label": "Condition",
        "type": "select",
        "options": ["NEW", "USED"],
        "required": true
      },
      { "name": "property_type", "label": "Property Type", "type": "text", "required": true },
      { "name": "size", "label": "Size", "type": "text", "required": true },
      {
        "name": "lease_terms",
        "label": "Lease Terms",
        "type": "select",
        "options": ["LONG-TERM", "SHORT-TERM"],
        "required": true
      },
      {
        "name": "land_type",
        "label": "Land Type",
        "type": "select",
        "options": ["Rural", "Urban"],
        "required": true
      },
      { "name": "number_of_floors", "label": "Number of Floors", "type": "number", "required": true },
      { "name": "bathrooms", "label": "Bathrooms", "type": "number", "required": true },
      { "name": "bedrooms", "label": "Bedrooms", "type": "number", "required": true },
      { "name": "subcategory", "label": "Subcategory", "type": "text", "required": true },
      { "name": "category", "label": "Category", "type": "text", "required": true },
      //{ "name": "from_business", "label": "From Business", "type": "text", "required": true }
    ]
  }
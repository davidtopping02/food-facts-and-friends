export interface DonationCategory {
    title: string;
    items: string[];
  }
  
  export const donationItems: DonationCategory[] = [
    {
      title: "Food Items",
      items: [
        "Diluting Juice",
        "Long Life or Powdered Milk",
        "Soup",
        "Rice",
        "Pasta / Sauce",
        "Beans / Spaghetti",
        "Tinned Tomatoes",
        "Tinned Meat",
        "Tinned Fish",
        "Tinned Pies",
        "Puddings",
      ],
    },
    {
      title: "Toiletries",
      items: [
        "Deodorant",
        "Toilet Paper",
        "Shower Gel",
        "Shaving Gel",
        "Shampoo",
        "Soap",
        "Toothbrushes",
        "Toothpaste",
        "Hand Wipes",
      ],
    },
    {
      title: "Household Items",
      items: ["Laundry Liquid Detergent", "Laundry Powder", "Washing Up Liquid"],
    },
    {
      title: "Baby Supplies",
      items: ["Nappies", "Baby Wipes", "Baby Food"],
    },
    {
      title: "Feminine Products",
      items: ["Sanitary towels and tampons"],
    },
    {
      title: "Health & Safety Supplies",
      items: ["Face Masks", "Hand Sanitiser"],
    },
  ];
  
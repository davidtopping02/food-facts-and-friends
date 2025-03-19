export interface DonationOption {
    title: string;
    link: string;
    description: string;
    iconClass: string;
  }
  
  export const donationOptions: DonationOption[] = [
    {
      title: "Donate Money",
      link: "/donate/money",
      description: "Contribute financially to support our mission.",
      iconClass: "bi-cash-stack",
    },
    {
      title: "Donate Time",
      link: "/donate/time",
      description: "Volunteer your time and make a difference.",
      iconClass: "bi-clock",
    },
    {
      title: "Donate Items",
      link: "/donate/items",
      description: "Help us by donating non-perishable items.",
      iconClass: "bi-basket",
    },
    {
      title: "Donate Recycle Items",
      link: "/donate/recycle",
      description: "Donate recyclable items and help the environment.",
      iconClass: "bi-recycle",
    },
  ];
  
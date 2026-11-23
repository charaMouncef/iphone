export const navLinks = [
  { label: "Store", link: "#" },
  { label: "Mac", link: "https://macbook3d-mouncef.netlify.app" },
  { label: "iPhone", link: "#" },
  { label: "Watch", link: "https://watch3d-mouncef.netlify.app" },
  { label: "Vision", link: "#" },
  { label: "AirPods", link: "https://airpods-mouncef.netlify.app" },
];

// Model parts that keep their original material when the iPhone color changes:
// glass, lenses, sensors, speakers, ports and the display itself.
export const noChangeParts = [
  "Front_Cam_Lens",
  "Front_Cam_Glass",
  "Front_Cam_Inset",
  "Front_Cam_Base",
  "Front_Speaker",
  "Front_Sensor",
  "Front_Screen",
  "Front_Panel",
  "Back_Cam_Lens",
  "Back_Cam_Lens_02",
  "Back_Cam_Lens_03",
  "Back_Cam_Lens_Outer",
  "Back_Cam_Aperture",
  "Back_Cam_Black",
  "Back_Cam_Base",
  "Back_Cam_Base001",
  "Back_Cam_Edge_black",
  "Back_Cam_Glass",
  "Back_Flash_Glass",
  "Back_Flash_Glass_Matte",
  "Back_Flash_Base",
  "Back_Flash_Light",
  "Back_Flash_Ref",
  "Gradient",
  "Back_IR_Glass",
  "Back_Mic",
  "Holes",
  "Side_Panel_Speakers",
  "USB_Metal",
  "USB_Pin",
];

export const iphoneColors = [
  { name: "burgundy", label: "Burgundy", value: "#6b1f2e", bg: "bg-red-900" },
  { name: "black", label: "Black", value: "#1d1d1f", bg: "bg-black" },
  { name: "white", label: "White", value: "#f5f5f7", bg: "bg-white" },
  { name: "silver", label: "Silver", value: "#c7c7cc", bg: "bg-gray-400" },
];

export const cameraFocus = [
  {
    focus: "f/1.48",
    title: "Maximum light.",
    image: "/max_light.jpg",
    description:
      "Around 50 percent better low-light performance — great for indoor \n scenes.5 Take better-quality Night mode photos faster.",
  },
  {
    focus: "f/1.8",
    title: "Default.",
    image: "/balance.jpg",
    description: "A versatile balance between low light and depth.",
  },
  {
    focus: "f/2.8",
    title: "More depth.",
    image: "/depth.jpg",
    description:
      "A narrow aperture lets you capture detail farther back in the scene.",
  },
  {
    focus: "f/4.0",
    title: "Maximum depth.",
    image: "/max_depth.jpg",
    description:
      "Use Pro controls to create artful effects manually, like a luminous \n starburst from bright light.",
  },
];

export const cardsList = [
  {
    id: "upgrade",
    title: "Apple Upgrade",
    description: "Love it. Lease it. Upgrade it.",
    img: "/features/apple_upgrade.jpg",
    alt: "Apple Upgrade",
  },
  {
    id: "deals",
    title: "Carrier Deals",
    description: "Apple. Your one‑stop shop for incredible carrier deals.",
    img: "/features/carrier_deals.jpg",
    alt: "Carrier Deals",
  },
  {
    id: "trade-in",
    title: "Apple Trade In",
    description: "Save on a new iPhone with trade-in.",
    img: "/features/apple_trade_in.jpg",
    alt: "Apple Trade In",
  },
  {
    id: "ways-to-buy",
    title: "Ways to Buy",
    description: "Pay over time, interest-free.",
    img: "/features/card.jpg",
    alt: "Apple Ways to Buy",
  },
  {
    id: "personal-setup",
    title: "Personal Setup",
    description: "Meet your new iPhone with Personal Setup.",
    img: "/features/personal_setup.jpg",
    alt: "Apple Personal Setup",
  },
  {
    id: "delivery-and-pickup",
    title: "Delivery and Pickup",
    description: "Get your order quickly and easily.",
    img: "/features/delivery_and_pickup.jpg",
    alt: "Apple Delivery and Pickup",
  },
  {
    id: "store-app",
    title: "Apple Store App",
    description: "Explore a shopping experience designed around you.",
    img: "/features/apple_store_app.jpg",
    alt: "Apple Store App",
  },
];
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
    title : "Default.",
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

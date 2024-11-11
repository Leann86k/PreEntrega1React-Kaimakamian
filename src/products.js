const products = [
  {
    id: 1,
    title: "Planta de Interior",
    price: 1500,
    description: "Una planta perfecta para interiores.",
    imagen: "src/assets/Cactus Opuntia.jpg",
    category: "semilla",
  },
  {
    id: 2,
    title: "Maceta de Cerámica",
    price: 3800,
    description: "Una maceta decorativa ideal para cualquier planta.",
    imagen:
      "https://www.dimensi-on.com/wp-content/uploads/2019/03/plantas_interior_3.jpg",
    category: "semilla",
  },
  {
    id: 3,
    title: "Kit de Jardinería",
    price: 2500,
    description: "Todo lo necesario para empezar a cultivar en casa.",
    imagen: "src/assets/portamaceta interior.webp",
    category: "maceta",
  },

  {
    id: 4,
    title: "Planta de Interior",
    price: 1500,
    description: "Una planta perfecta para interiores.",
    imagen: "src/assets/Cactus Opuntia.jpg",
    category: "maceta",
  },

  {
    id: 5,
    title: "Planta de Interior",
    price: 1500,
    description: "Una planta perfecta para interiores.",
    imagen: "src/assets/Cactus Opuntia.jpg",
    category: "libro",
  },

  {
    id: 6,
    title: "Planta de Interior",
    price: 1500,
    description: "Una planta perfecta para interiores.",
    imagen: "src/assets/Cactus Opuntia.jpg",
    category: "libro",
  },

  {
    id: 7,
    title: "Planta de Interior",
    price: 1500,
    description: "Una planta perfecta para interiores.",
    imagen: "src/assets/Cactus Opuntia.jpg",
    category: "kit inicales",
  },

  {
    id: 8,
    title: "Planta de Interior",
    price: 1500,
    description: "Una planta perfecta para interiores.",
    imagen: "src/assets/Cactus Opuntia.jpg",
    category: "kit iniciales",
  },

  {
    id: 9,
    title: "Planta de Interior",
    price: 1500,
    description: "Una planta perfecta para interiores.",
    imagen: "src/assets/Cactus Opuntia.jpg",
    category: "planta",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};
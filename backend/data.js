import bcrypt from 'bcryptjs';

const data = {
    products: [
      {
        name: 'Project Vayne',
        category: 'Skins',
        image: '/images/p1.jpg',
        price: 120,
        countInStock: 15,
        brand: 'Riot',
        rating: 4.5,
        numReviews: 10,
        description: 'second best skin',
      },
      {
        name: 'Soulstealer Vayne',
        category: 'Skins',
        image: '/images/p2.jpg',
        price: 500,
        countInStock: 1,
        brand: 'Riot',
        rating: 5.0,
        numReviews: 72,
        description: 'THE BEST SKIN',
      },
      {
        name: 'Spirit Blossom Vayne',
        category: 'Skins',
        image: '/images/p3.jpg',
        price: 150,
        countInStock: 3,
        brand: 'Riot',
        rating: 5.0,
        numReviews: 20,
        description: 'My favourite one',
      },
      {
        name: 'Sentinel of the Light Vayne',
        category: 'Skins',
        image: '/images/p4.jpg',
        price: 99,
        countInStock: 11,
        brand: 'Riot',
        rating: 3.5,
        numReviews: 10,
        description: 'Nah',
      },
      {
        name: 'FPX Vayne',
        category: 'Skins',
        image: '/images/p5.jpg',
        price: 109,
        countInStock: 14,
        brand: 'Riot',
        rating: 4.0,
        numReviews: 24,
        description: 'Pretty good',
      },
      {
        name: 'Firecracker Vayne Prestige Edition',
        category: 'Skins',
        image: '/images/p6.jpg',
        price: 129,
        countInStock: 17,
        brand: 'Riot',
        rating: 3.0,
        numReviews: 23,
        description: 'Dunno honestly',
      },
    ],
  users: [
    {
      name: 'Vonlex',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234',8),
      isAdmin: true,
    },
    {
      name: 'Pheeder',
      email: 'adasfad@example.com',
      password: bcrypt.hashSync('4567',8),
      isAdmin: false,
    }
  ]
}

export default data;
const menuData = {
  categories: [
    {
      id: 'sandwiches',
      name: 'Sandwiches',
      description: 'Layered favorites with fresh greens and house sauces.',
      items: [
        {
          id: 1,
          category: 'Sandwiches',
          name: 'Smokehouse Club',
          description: 'Smoked turkey, cheddar and tangy slaw on toasted sourdough.',
          price: 15,
          image: '/images/food/sandwich-smokehouse.jpg',
          bestseller: true,
          spicy: false,
          vegetarian: false,
          available: true
        },
        {
          id: 2,
          category: 'Sandwiches',
          name: 'Garden Glow',
          description: 'Roasted vegetables, whipped feta and basil aioli.',
          price: 13,
          image: '/images/food/sandwich-garden.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        }
      ]
    },
    {
      id: 'burgers',
      name: 'Burgers',
      description: 'Char-grilled patties with bold toppings and rich sauces.',
      items: [
        {
          id: 3,
          category: 'Burgers',
          name: 'Ranka Smash',
          description: 'Double patty, caramelized onion and truffle aioli.',
          price: 16,
          image: '/images/food/burger-ranka.jpg',
          bestseller: true,
          spicy: false,
          vegetarian: false,
          available: true
        },
        {
          id: 4,
          category: 'Burgers',
          name: 'Spicy Sunset',
          description: 'Pepper jack, jalapeño jam and crispy onions.',
          price: 15,
          image: '/images/food/burger-sunset.jpg',
          bestseller: false,
          spicy: true,
          vegetarian: false,
          available: true
        }
      ]
    },
    {
      id: 'submarines',
      name: 'Submarines',
      description: 'Hearty rolls packed with premium fillings.',
      items: [
        {
          id: 5,
          category: 'Submarines',
          name: 'Italian Press',
          description: 'Prosciutto, mozzarella and roasted peppers.',
          price: 14,
          image: '/images/food/sub-italian.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: false,
          available: true
        },
        {
          id: 6,
          category: 'Submarines',
          name: 'Herb Melt',
          description: 'Roasted chicken, pesto and greens.',
          price: 13,
          image: '/images/food/sub-herb.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: false,
          available: true
        }
      ]
    },
    {
      id: 'wraps',
      name: 'Wraps',
      description: 'Portable favorites with bright textures and balanced flavor.',
      items: [
        {
          id: 7,
          category: 'Wraps',
          name: 'Crispy Caesar Wrap',
          description: 'Chicken, romaine and parmesan in a warm tortilla.',
          price: 12,
          image: '/images/food/wrap-caesar.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: false,
          available: true
        },
        {
          id: 8,
          category: 'Wraps',
          name: 'Mediterranean Glow',
          description: 'Falafel, pickled cucumber and tahini drizzle.',
          price: 12,
          image: '/images/food/wrap-mediterranean.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        }
      ]
    },
    {
      id: 'croissants',
      name: 'Croissants',
      description: 'Flaky pastry layers with elegant fillings.',
      items: [
        {
          id: 9,
          category: 'Croissants',
          name: 'Ham & Gruyère',
          description: 'Buttery croissant with ham, cheese and Dijon.',
          price: 11,
          image: '/images/food/croissant-ham.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: false,
          available: true
        },
        {
          id: 10,
          category: 'Croissants',
          name: 'Berry Dream',
          description: 'Vanilla cream and berry compote.',
          price: 10,
          image: '/images/food/croissant-berry.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        }
      ]
    },
    {
      id: 'savoury-waffles',
      name: 'Savoury Waffles',
      description: 'Golden waffles finished with rich savory toppings.',
      items: [
        {
          id: 11,
          category: 'Savoury Waffles',
          name: 'Chicken & Maple',
          description: 'Crisp chicken and maple glaze over a warm waffle.',
          price: 14,
          image: '/images/food/waffle-chicken.jpg',
          bestseller: true,
          spicy: false,
          vegetarian: false,
          available: true
        },
        {
          id: 12,
          category: 'Savoury Waffles',
          name: 'Spinach Melt',
          description: 'Soft greens, egg and herbed cream cheese.',
          price: 13,
          image: '/images/food/waffle-spinach.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        }
      ]
    },
    {
      id: 'sweet-waffles',
      name: 'Sweet Waffles',
      description: 'Soft waffle bases crowned with indulgent toppings.',
      items: [
        {
          id: 13,
          category: 'Sweet Waffles',
          name: 'Cocoa Cloud',
          description: 'Chocolate sauce, cream and hazelnut crunch.',
          price: 12,
          image: '/images/food/waffle-cocoa.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        },
        {
          id: 14,
          category: 'Sweet Waffles',
          name: 'Berry Bliss',
          description: 'Vanilla cream and berry compote drizzle.',
          price: 11,
          image: '/images/food/waffle-berry.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        }
      ]
    },
    {
      id: 'milkshakes',
      name: 'Milkshakes',
      description: 'Velvety shakes finished with premium toppings.',
      items: [
        {
          id: 15,
          category: 'Milkshakes',
          name: 'Salted Caramel',
          description: 'Rich caramel shake with sea salt cream.',
          price: 9,
          image: '/images/food/shake-salted-caramel.jpg',
          bestseller: true,
          spicy: false,
          vegetarian: true,
          available: true
        },
        {
          id: 16,
          category: 'Milkshakes',
          name: 'Vanilla Velvet',
          description: 'Classic vanilla with whipped topping.',
          price: 8,
          image: '/images/food/shake-vanilla.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        }
      ]
    },
    {
      id: 'fresh-juices',
      name: 'Fresh Juices',
      description: 'Bright citrus blends and cold-pressed refreshers.',
      items: [
        {
          id: 17,
          category: 'Fresh Juices',
          name: 'Citrus Spark',
          description: 'Orange, grapefruit and lime with a fresh finish.',
          price: 7,
          image: '/images/food/juice-citrus.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        },
        {
          id: 18,
          category: 'Fresh Juices',
          name: 'Green Lift',
          description: 'Apple, cucumber and mint.',
          price: 8,
          image: '/images/food/juice-green.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        }
      ]
    },
    {
      id: 'mojitos',
      name: 'Mojitos',
      description: 'Cool and citrusy blends with a refreshing finish.',
      items: [
        {
          id: 19,
          category: 'Mojitos',
          name: 'Classic Mojito',
          description: 'Mint, lime and sparkling sugar.',
          price: 10,
          image: '/images/food/mojito-classic.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        },
        {
          id: 20,
          category: 'Mojitos',
          name: 'Berry Mojito',
          description: 'Berry notes with mint and lime.',
          price: 11,
          image: '/images/food/mojito-berry.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        }
      ]
    },
    {
      id: 'sides',
      name: 'Sides',
      description: 'Crisp accompaniments for every main.',
      items: [
        {
          id: 21,
          category: 'Sides',
          name: 'Truffle Fries',
          description: 'Crispy fries finished with truffle salt.',
          price: 6,
          image: '/images/food/sides-fries.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        },
        {
          id: 22,
          category: 'Sides',
          name: 'Garden Slaw',
          description: 'A bright, crunchy side with citrus dressing.',
          price: 5,
          image: '/images/food/sides-slaw.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        }
      ]
    },
    {
      id: 'breakfast',
      name: 'Breakfast',
      description: 'Elevated morning favorites with comfort and style.',
      items: [
        {
          id: 23,
          category: 'Breakfast',
          name: 'Morning Stack',
          description: 'Eggs, avocado and roasted tomato on sourdough.',
          price: 13,
          image: '/images/food/breakfast-stack.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        },
        {
          id: 24,
          category: 'Breakfast',
          name: 'Honey Toast',
          description: 'Warm brioche with honey glaze and fruit.',
          price: 10,
          image: '/images/food/breakfast-toast.jpg',
          bestseller: false,
          spicy: false,
          vegetarian: true,
          available: true
        }
      ]
    }
  ]
};

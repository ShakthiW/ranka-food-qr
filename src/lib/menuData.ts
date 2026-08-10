type MenuItem = {
  id: number;
  name: string;
  price: string;
};

const makeItems = (items: string): MenuItem[] =>
  items
    .trim()
    .split("\n")
    .map((line, index) => {
      const [name, price = "Price on request"] = line.split("|");
      return { id: index + 1, name, price };
    });

const category = (
  id: string,
  name: string,
  description: string,
  items: string,
  availability?: string,
) => ({
  id,
  name,
  description,
  availability,
  items: makeItems(items),
});

export const menuData = {
  categories: [
    category("hot-drinks", "Hot Drinks", "Warm drinks made to order.", `
Plain Tea|80
Milk Tea|200
Coffee|200
Nescaffe Hot|160
Nestea|160
Cardamon Tea|160
Milo Hot|160
Cappuccino|350
Americano|320
Caffelatte|300
Caffe Mocha|300
Hot Chocolate|300`),
    category("drinks", "Drinks", "Cold drinks and refreshments.", `
Ice Coffee|260
Ice Milo|260
Water Bottle (500ml)|80
Water Bottle (1000ml)|120
Water Bottle (1500ml)|150
Red Bull|750`),
    category("sandwiches", "Sandwiches", "Layered favourites with rich cheese and savoury fillings.", `
Tandoori Chicken and Cheese Melt Sandwich|900
Grilled Vegetable and Cheese Sandwich|700
Grilled Chicken Beacon and Cheese Sandwich|800
Brown Deker With Cheese & Tomato Sandwich|800
Grilled Tuna Salad with Cheese Melt Sandwich|800
Egg & Cheese Grilled Sandwich|800
Grilled Chicken Salad with Cheese Sandwich|800
Club Sandwich Stacked with Layers of Flavor|1200
Devilled Chicken Sausage and Cheese Melt|900`),
    category("burgers", "Burger", "Premium burgers with indulgent toppings.", `
Crispy Chicken & Cheese Burger|1200
Chicken Blockbuster|1300
Fried Fish Fillet With Cheese|1300
Golden Batter Fried Prawns & Cheese Burger|1300`),
    category("submarine", "Submarine", "Submarine rolls filled with savoury cheese and protein.", `
Mexican Chicken & Cheese Submarine|1400
Mongolina Chicken & Cheese Submarine|1400
Devillled Chicken & Cheese Submarine|1300
Hot Butter Prawns & Cheese Submarine|1450
Jumbo Hotdog With Cheese Submarine|1300`),
    category("wraps", "Wraps", "Soft wraps loaded with cheese and flavourful fillings.", `
Mexican Chicken & Cheese Wraps|1200
Mongolian Chicken & Mozzarella Wraps|1200
BBQ Prawns Wrap|1300
Hot Battered Cuttlefish Wrap|1000`),
    category("croissants", "Crossaints", "Buttery croissants filled with cheese and savoury proteins.", `
Egg & Mayo With Cheese Croissants|600
Tandoori Chicken & Cheese Croissants|700
Chicken Bacon & Cheese Croissants|650
Tuna Salad & Cheese Croissants|700
Chicken Salad & Cheese Croissants|900`),
    category("waffles", "Waffles", "Sweet and savoury waffles finished with premium toppings.", `
Chicken Bacon & Cheese Waffle|800
Smoked Chicken & Cheese Waffle|900
Egg & Cheese Waffle|700
Tandoori Chicken Waffle|800
Banana Waffle|600
Strawberry & Whipped Cream|700
Fruity Waffle|900
Waffle Surprise|700
Waffle with any topping (Chocolate/ Strawberry/ Blueberry)|600`),
    category("milkshakes-juice-mojito", "Milkshake / Fresh Juice / Mojito", "Chilled shakes, fresh juices, and mojitos.", `
Vanilla Milkshake|800
Chocolate Milkshake|800
Strawberry Milkshake|800
Cookie Cream Milkshake|900
Choco Chip Milkshake|900
Rocky Road Milkshake (Nuts & Marshmellows)|900
Avacado|800
Papaya|500
Orange|800
Passion|600
Watermelon|500
Lime|600
Lemon & Mint Mojito|600
Strawberry Mojito|600
Passion Mojito|600
Caramel Mojito|600
Kivi Mojito|600
Blue Curacao Mojito|800
Lime & Mint Iced Tea|500
Peach Tea Iced Tea|600`),
    category("special-dishes", "Special Dishes", "Shareable and indulgent dishes.", `
Fish & Chips|1500
Chicken & Chips|1500
Hot Honey Crsipy Chicken Wings (6pcs)|1100
Chicken Nuggets|900`),
    category("breakfast", "Breakfast", "Breakfast classics with hearty, comforting flavour.", `
Milk Rice With Lunu Miris|300
Kadala With Egg & Cheese|300
English Breafast|1600
Roast Bread with Coconut Sambol|150`, "6:00 a.m. – 10:00 a.m."),
    category("a-la-carte", "A la Carte Menu", "Individual dishes for a tailored dining experience.", `
Loaded Fries|1300
Cream Of Vegetable Soup|500
Egg Soup|550
Cream Of Chicken Soup|650
Seafood Soup|650
Sweet Corn Soup|600
Chicken Lasagna|950
Egg Kottu|1100
Chicken Kottu|1200
Roast Chicken Kottu|1400
Cheese & Chicken Kottu|1600
Mongolian Chicken Kottu|1400
Mongolian Seafood Kottu|1400
Vegetable Fried Rice|950
Egg Fried Rice|1100
Chicken Fried Rice|1250
Prawn Fried Rice|1250
Seafood Fried Rice|1350
Mixed Fried Rice|1500
Vegetable Fried Noodles|950
Egg Fried Noodles|1100
Chicken Fried Noodles|1250
Prawn Fried Noodles|1250
Seafood Fried Noodles|1350
Mixed Fried Noodles|1500
Chicken Set Menu|1350
Chicken Briyani|1400
Nasi Goreng|1500
Mongolian Rice Chicken|1200
Mongolian Rice Seafood|1300
Marinara Chicken Pasta|1500
Marinara Seafood Pasta|1500
Spicy Mozza Chicken Pasta|1300
Spicy Mozza Seafood Pasta|1300
Creamy Mayo Chicken Pasta|1300
Creamy Mayo Seafood Pasta|1300`),
  ],
};

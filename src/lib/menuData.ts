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

const category = (id: string, name: string, description: string, items: string) => ({
  id,
  name,
  description,
  items: makeItems(items),
});

export const menuData = {
  categories: [
    category("bread", "Bread", "Freshly baked everyday essentials.", `
Sandwich Bread|250
Butter Bread|200
Tea Bun|75
Suger Bun|80
Multi Bun|80
Wiyan Roll|100
Cream Bun|180`),
    category("buns", "Buns", "Fresh bakery favourites and savoury bites.", `
Fish Bun|160
Seeni Sambal Bun|160
Sausage Roll Bun|160
Chicken Bun|250
Mayo Bun|260
Chicken Pizza|380
Sausage Pizza|380
Bullseye Bun|200
Saman Bun|210
Devilled Chicken Bun|320
Cheese Chicken Bun|360
Ciabatta Crispy Chicken|450
Ciabatta Egg & Cheese|450
Crispy Chicken Buger|450
Focaccia Cheese & Ham|450
Focaccia Tandoori|450
Cheese & Ham Crossaints|360
Egg Bun|170
Prawns Bun|330
Curry Prawns Bun|320
Hotdog|210
Jumbo Bun|330
Pol Roti|140
Submarin Bun|380
Fish Sandwich|310
Chicken Sandwich|310
Cheese Sandwich|300`),
    category("pastry", "Pastry", "Flaky, savoury pastry selections.", `
Vegetable Pastry|230
Fish Pastry|260
Egg Pastry|260
Sausage Pastry|260
Chicken Pastry|280
Chicken Pie|320`),
    category("shorteats", "Shorteats", "Quick, savoury snack favourites.", `
Fish Paties|150
Chicken Paties|160
Vegetable Roll|200
Fish Roll|220
Chicken Roll|240
Egg Roll|230
Prawns Roll|280
Cheese Chicken Roll|280
Fish Cutlet|190
Winglet|260
Vegetable Samosa|200
Drumstick|240
Fish Roti|230
Chicken Roti|250
Egg Roti|220
Vegetable Roti|200`),
    category("cakes-desserts", "Cakes & Desserts", "Celebration cakes, slices, and sweet treats.", `
Ribbon Icing 1500|3500
Ribbon Icing 1000|2200
Ribbon Icing 750|1650
Chocolate Icing 1500|3800
Chocolate Icing 1000|2400
Chocolate Icing 750|1850
Chocolate Gateau 750g|3100
White Gateau 750g|3100
Blueberry Gateau 750g|3300
Caramel Gateau 750g|3300
Strawberry Gateau 750g|3300
Red Velvet Gateau 750g|3300
Pineapple Gateau 750g|3300
Florida Gateau 750g|3300
Black Forest Gateau 750g|3300
Chocolate Gateau 1kg|4200
White Gateau 1kg|4200
Blueberry Gateau 1kg|4500
Caramel Gateau 1kg|4500
Strawberry Gateau 1kg|4500
Red Velvet Gateau 1kg|4500
Pineapple Gateau 1kg|4500
Florida Gateau 1kg|4500
Black Forest Gateau 1kg|4500
Butter Cake 500|750
Chocolate Cake 500|850
Coconut Cake 500|950
Date Cake 500|1000
Cristmas Cake|Price on request
Bento Cake|Price on request
Chocolate Roll|750
Swiss Roll|700
Ribbon Delight|800
Chocolate Delight|900
Petty Cake|500
Chocolate Gateau (p)|380
White Gateau (p)|380
Blueberry Gateau (p)|400
Strawberry Gateau (p)|400
Pineapple Gateau (p)|400
Nuga Gateau (p)|400
Caramel Gateau (p)|400
Red Velvet Gateau (p)|400
Kiwi Gateau (p)|400
Black Forest Gateau (p)|400
Chocolate Brownies|340
Swiss Roll Pieces|340
Popsicals|250
Vanilla Eclairs|280
Chocolate Eclairs|280
Strawberry Eclairs|280
Vanilla Dounut|260
Chocolate Dounut|260
Strawberry Dounut|260
Brownies|230
Cinnamon Roll|250
Crossaints|260
Butter Cookies|300
Chocolate Cookies|320
Chocolate Chip Cookies|360
Red Velvet Cookies|450
Oatmeal Cookies|450
Kisses|260
Coconut Toffee|400
Fruit Trifle|220
Chocolate Mousse|220
Panna Cotta|250
Watalappan|220
Cream Caramel|220
Lava Cake|260`),
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
Red Bull|750
Smak Packet|140
Smak Bottles|150
Smak (200ml)|160
Smak Necta (500ml)|320
Smak Necta (1000ml)|570
Milo Milk|130
Nescaffe Ice Coffee|150
Richlife Milk Packet|140
Yogurt Drink|170
Yogurt|80
Kothmale Milk|140
Sunquick Packet|140
MD Necta|140
Leon Milk|230`),
    category("elephant-house", "Elephant House", "Elephant House soft drinks and mixers.", `
Elephant Drinks 1500ml|420
E.G.B. 1500ml|420
Soda 1500ml|250
Elephant Drinks 500ml|200
E.G.B. 500ml|200
Soda 500ml|150
Elephant Drinks 400ml|160
E.G.B. 400ml|160
Soda 400ml|110
Elephant Drinks 200ml|110
E.G.B. 200ml|110
Elephant Drinks 250ml|120
Fito Apple|130
Elephant Drinks Cane|180`),
    category("lion", "Lion", "Lion beverages and energy drinks.", `
Lion Drinks (1500ml)|420
Lion Drinks (1050ml)|300
Lion Drinks (400ml)|200
Lion Drinks (300ml)|190
Lion Drinks (175ml)|110
Lion Drink Cane|300
Monster Cane|900`),
    category("other", "Other", "Other available items.", `
Goldleaf|160
Dunhill|170`),
    category("order-cake", "Order Cake", "Custom cake orders and finishing options.", `
Gateau 750g|4100
Gateau 1kg|5500
Gateau 1.5kg|7000
NAME EMBROSS|250
Ribbon Icing 750 - 1|2000
Ribbon Icing 750 - 2|2400
Ribbon Icing 1000 - 1|2700
Ribbon Icing 1000 - 2|3200
Ribbon Icing 1500 - 1|4000
Ribbon Icing 1500 - 2|4800
Ribbon Icing 2500 - 1|6000
Ribbon Icing 2500 - 2|7000
Chocolate Icing 750 - 1|2150
Chocolate Icing 750 - 2|2700
Chocolate Icing 1000 - 1|2900
Chocolate Icing 1000 - 2|3400
Chocolate Icing 1500 - 1|4300
Chocolate Icing 1500 - 2|5000
Chocolate Icing 2500|6500`),
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
Hot Cake With Chocolate Sauce|350
English Breafast|1600
Roast Bread with Coconut Sambol|150`),
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

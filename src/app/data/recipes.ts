export interface Recipe {
    id: string;
    title: string;
    description : string;
    imageUrl: string;
    ingredients: string[];
    type : string;
}
export interface User{
  id: string;
  name: string;
  email: string;
  password: string;
}
export interface Video{
  id: string;
  title: string;
  url: string;
}
export interface Comment{
  user: User;
  text: string;
}
  
  // Dummy data
  export const RECIPES: Recipe[] = [
    {
      id: '1',
      title: 'Loaded baked Caprese pizza',
      description: "Caprese is a very simple, yet absolutely amazing pizza. It's generously loaded with tomato sauce and cheese, topped with extra tomatoes, and finished off with basil and a drizzle of balsamic vinegar.",
      imageUrl: 'images/tepsis-cuccos.jpg',
      ingredients: ['300 ml water', '25 g fresh yeast', '1 tsp granulated sugar', '500 g pizza flour', '2 tbsp olive oil', '1 tsp salt','4 tbsp cornmeal','200 g canned San Marzano tomatoes',
        '3 tbsp olive oil','Salt, pepper','2 tsp oregano','2 tsp dried basil','250 g shredded pizza mozzarella','1 tomato (100 g each)','30 ml thick balsamic vinegar','5–6 fresh basil leaves'],
      type: "pizza",
    },
    {
      id: '2',
      title: 'Salami and corn pizza',
      description: "Sometimes we're not craving the most authentic Italian pizza—especially when we're making it for the kids. And this one is exactly that!",
      imageUrl: 'images/szalamis-kukoricas-pizza.jpg',
      ingredients: ['650 ml water', '4 g yeast', '1 kg pizza flour', '25 g salt', '2 tbsp pastry flour for proofing', '600 g canned peeled and chopped tomatoes', '½ bunch basil', '50 ml olive oil',
        '1 can of corn (285 g)','300 g sliced spicy salami','600 g pizza mozzarella'
      ],
      type: "pizza",
    },
    {
      id: '3',
      title: 'Baked Bolognese pizza',
      description: "If the goal is a relatively quick, satisfying comfort food that the kids will love, then this recipe is for you!",
      imageUrl: 'images/tepsis-bolognai-ragus-pizza.jpg',
      ingredients: ['350 ml lukewarm water', '12 g fresh yeast', '500 g pizza flour', '5 g salt', '2 tbsp vegetable oil', '1 jar meat Bolognese sauce (425g)',
        '200 g cheddar cheese'],
      type: "pizza",
    },
    {
      id: '4',
      title: 'Arrabbiata pizza',
      description: "Amazing things always come out of fusing two favorite recipes. All we did was swap the penne for pizza dough, and tadaa… the magic is ready!",
      imageUrl: 'images/arrabbiata-pizza.jpg',
      ingredients: ['500 g pizza flour', '2 g fresh yeast', '325 ml lukewarm water', '½ tsp salt', '2 tbsp olive oil', '100 g pastry flour',
        '460 g peeled tomatoes','5 basil leaves','2 chilies','1 tsp salt','6 tbsp olive oil','4 packs of wet mozzarella (100 g each)','4 cloves garlic', '200 g black olives'],
      type: "pizza",
    },
    {
      id: '5',
      title: 'Homemade pizza sauce',
      description: "The saying 'less is more' applies here too! You can spice up the pizza sauce with all sorts of herbs or even tomato paste, but in my opinion, there's no need to overdo it because the toppings on the pizza will bring in all the extra flavors.",
      imageUrl: 'images/pizzaszosz-hazilag.jpg',
      ingredients: ['720 g canned whole peeled tomatoes', '5 basil sprigs', '1 tsp salt', '50 ml olive oil'],
      type: "pizza",
    },
    {
      id: '6',
      title: 'Artichoke and pesto pizza',
      description: "Is there anything better than pizza? In my opinion, there isn't! When you make it at home, you can put anything on it, and with a little attention to detail, you can achieve a truly amazing result.",
      imageUrl: 'images/articsokas-pizza-pesztos-alappal.jpg',
      ingredients: ['450 g water', '4 g fresh yeast', '700 g pizza flour', '20 g salt','10 ml olive oil','100 g pastry flour for shaping','60 g pine nuts','1 bunch basil','1 clove garlic'
        ,'180 g parmesan','150 ml olive oil','1 jar sun-dried tomatoes in oil (280 g)','1 jar artichokes in oil (270 g)','180 g cherry tomatoes','100 g arugula'
      ],
      type: "pizza",
    },
    {
      id: '7',
      title: 'Teriyaki chicken wing',
      description: "This is a deliciously crispy, Asian-flavored chicken wing! I dont think there's much more to say. Fly high with me!",
      imageUrl: 'images/teriyaki-csirkeszarny.jpg',
      ingredients: ['4 cloves garlic', '2 cm ginger', '3 tbsp brown sugar', '100 ml soy sauce', '40 ml rice vinegar', '40 ml white wine', '10 chicken wings', '2 tbsp cornstarch', '2 tbsp all-purpose flour', 'Plenty of oil for frying'],
      type: "junk",
    },
    {
      id: '8',
      title: 'Simple Corn Dog',
      description: "Corn dogs are a true American fairground classic - nothing more, nothing less. But one thing's for sure: there’s a reason why people across the ocean absolutely love them!",
      imageUrl: 'images/egyszeru-corn-dog.jpg',
      ingredients: ['120 g cornmeal', '170 g all-purpose flour', '20 g granulated sugar', '1 tsp baking powder', '1 tsp salt', 'Salt, pepper', '¼ tsp ground pepper', ' 1 egg',
        '240 ml milk','4 frankfurter sausages','plenty of vegetable oil for frying',
      ],
      type: "junk",
    },
    {
      id: '9',
      title: 'Onion Rings',
      description: "The onion ring is the superstar of crispy snacks! Golden-brown coating, sweet and tender onion inside. Perfect for dipping, snacking on its own, or sneaking into a burger for that extra crunch.",
      imageUrl: 'images/rantott-hagymakarika.jpg',
      ingredients: ['2 red onions (160 g each)', 'Salt ', '100 g all-purpose flour', '3 eggs', '100 g breadcrumbs', 'Oil for deep frying', '250 g sour cream', '1 clove garlic',
        '240 ml milk','4 frankfurter sausages','plenty of vegetable oil for frying',
      ],
      type: "junk",
    },
    {
      id: '10',
      title: 'Cottage Cheese Filled Donuts',
      description: "Soft and Fluffy Donuts with Lemon Cottage Cheese Filling These cloud-like donuts have a perfectly tender dough that's already delightful on its own — but fill them with a zesty lemon-flavored cottage cheese cream, and they become absolutely irresistible!",
      imageUrl: 'images/turoval-toltott-fank.jpg',
      ingredients: ['300 ml milk', '30 g fresh yeast ', '500 g all-purpose flour (+ extra for rolling)', '30 g powdered sugar', '1 pinch of salt', '50 g room temperature butter', '5 ml dark rum', '5 egg yolks',
        'Plenty of oil for frying','300 g cottage cheese','2-3 tbsp sour cream','2 tbsp powdered sugar','Zest of ½ lemon','A few drops of vanilla extract'
      ],
      type: "junk",
    },
    {
      id: '11',
      title: 'Wimpi',
      description: "This recipe is something that I think my four-year-old son could manage to make, though maybe you haven't heard of it. And yes, I believe he could even handle the slashing of the croissants. Although I know, knives, forks, and scissors are not meant for kids.",
      imageUrl: 'images/wimpi.jpg',
      ingredients: ['2 hot dog buns', '2 sausages','1 tbsp ketchup', '1 tbsp mustard', '½ red onion (100 g)', '4 cocktail tomatoes', '4 sprigs chives'],
      type: "junk",
    },
    {
      id: '12',
      title: 'Full-loaded fries plate',
      description: "This loaded fries plate was one of my first dorm meals, which is super simple, and it's still one of my favorites to this day.",
      imageUrl: 'images/extras-sult-krumpli-tal-mirelit-krumplibo.jpg',
      ingredients: ['200 g bacon', '½ head of red onion (100 g/head)','2 tomatoes (90 g each)', '3 tbsp mayonnaise', '2 tbsp ketchup', '1 tbsp mustard', 'oil for frying',
        '600 g frozen french fries', '150 g cheddar cheese', 'salt'],
      type: "junk",
    },
    {
      id: '13',
      title: 'Chicken quesadilla in the air fryer',
      description: "If you only have an air fryer and want to cook more than just fries or breaded meat, you've come to the right place.",
      imageUrl: 'images/quesadilla.jpg',
      ingredients: ['250 g chicken breast fillet', '½ kápia pepper (100 g/each)', '½ red onion (100 g/each)', '4 cloves garlic', '4 tbsp olive oil', 'Salt, pepper', '2 x 20 cm tortilla wraps', '50 g cheddar cheese'],
      type: "airfryer",
    },
    {
      id: '14',
      title: 'Mixed roasted vegetable side dish in the air fryer',
      description: "The air fryer is one of the most useful kitchen tools you can get, as it allows you to make almost any dish without filling the whole house with the smell of oil. And although I've chosen these vegetables that you'll find in the recipe, almost any vegetable from any season can be prepared in a similar way.",
      imageUrl: 'images/vegyes-sult-zoldsegkoret-airfryerben.jpg',
      ingredients: ['2 beets', '2 potatoes (200 g each)', '1 sweet potato', '6 shiitake mushrooms', '1 red onion (100 g each)', '6 cocktail tomatoes', '1 bunch of asparagus', '1 zucchini',
        '200 g frozen Brussels sprouts', '200 g baby carrots (frozen)', 'salt, pepper', '½ tsp smoked paprika', '½ tsp garlic granules', '3 cm ginger', '4 cloves garlic',
        '1-2 tsp chili flakes', '240 ml water', '100 ml rice vinegar', '115 g granulated sugar', '2 tbsp tomato paste'],
      type: "airfryer",
    },
    {
      id: '15',
      title: 'Bacon-wrapped stuffed chicken breast with steamed green beans',
      description: "If you're craving a truly awesome stuffed chicken breast with a filling that takes it to the next level, and it's wrapped in bacon, then this air fryer recipe will be your go-to! To keep it diet-friendly, the side dish is steamed lemon green beans.",
      imageUrl: 'images/baconbe-tekert-toltott-csirke.jpg',
      ingredients: ['80 g diced bacon', '120 g cream cheese', '120 g mozzarella', '40 g spring onion', '1 clove garlic', 'Salt, pepper', '2 tsp thyme', '2 tsp marjoram',
        '700 g chicken breast (4 pieces)', '12 - 14 slices of bacon','20 g butter','300 g green beans','1 lemon (juice)'],
      type: "airfryer",
    },
    {
      id: '16',
      title: 'Mushroom cream hot sandwich in the air fryer',
      description: "Fullos házi gombakrémmel megkent kovászos kenyér, telepakolva sok-soook reszelt sajttal! Egy laza és gyors recept következik, amivel a reggeleidet vagy a snackidődet a következő szintre emelheted. Készülj fel a roppanós külsőre és az ízorgia belsőre!",
      imageUrl: 'images/gombakremes-melegszendvics-air-fryben.jpg',
      ingredients: ['400 g button mushrooms', '1 onion (130 g)', '2 garlic cloves', '2 tbsp vegetable oil', '2 tsp paprika', '1 tsp smoked paprika', '1 tsp thyme', 'salt, pepper',
        '100 g butter', '2 tbsp all-purpose flour','6 slices sourdough bread','200 g grated cheese (Trappist cheese)'],
      type: "airfryer",
    },
    {
      id: '17',
      title: 'Bacon-wrapped stuffed chicken breast with steamed green beans',
      description: "If you're craving a truly awesome stuffed chicken breast with a filling that takes it to the next level, and it's wrapped in bacon, then this air fryer recipe will be your go-to! To keep it diet-friendly, the side dish is steamed lemon green beans.",
      imageUrl: 'images/baconbe-tekert-toltott-csirke.jpg',
      ingredients: ['80 g diced bacon', '120 g cream cheese', '120 g mozzarella', '40 g spring onion', '1 clove garlic', 'Salt, pepper', '2 tsp thyme', '2 tsp marjoram','700 g chicken breast (4 pieces)', '12 - 14 slices of bacon','20 g butter','300 g green beans','1 lemon (juice)'],
      type: "airfryer",
    },
  ];
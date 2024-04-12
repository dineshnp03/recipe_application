// Global properties - Declaration
window.__storageKeys = {
  user: "user",
  isLoggerIn: "isLoggedIn",
};

// Global variable for the Recipes
window.__recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients:
      "Spaghetti, Pancetta or guanciale, Eggs, Parmesan cheese, Black pepper, Salt",
    instructions:
      "Cook spaghetti according to package instructions. In a skillet, cook pancetta or guanciale until crispy. Beat eggs, Parmesan cheese, black pepper, and salt in a bowl. Drain spaghetti and toss with pancetta. Add egg mixture and toss until coated. Serve hot.",
    category: "Main Dish",
    origin: "Italy",
  },
  {
    id: 2,
    title: "Chicken Tikka Masala",
    ingredients:
      "Chicken breasts, Yogurt, Lemon juice, Ginger garlic paste, Garam masala, Paprika, Turmeric, Cumin, Tomato sauce, Heavy cream, Onion, Butter, Vegetable oil, Salt",
    instructions:
      "Marinate chicken breasts in yogurt, lemon juice, ginger garlic paste, garam masala, paprika, turmeric, cumin, and salt. Grill or bake chicken until cooked through. In a skillet, sauté chopped onion in butter and vegetable oil until translucent. Add tomato sauce and heavy cream. Simmer until sauce thickens. Slice cooked chicken and add to the sauce. Serve hot with rice or naan.",
    category: "Main Dish",
    origin: "India",
  },
  {
    id: 3,
    title: "Caesar Salad",
    ingredients:
      "Romaine lettuce, Croutons, Parmesan cheese, Caesar dressing (anchovies, Garlic, Dijon mustard, Worcestershire sauce, Lemon juice, Olive oil, Salt, Black pepper)",
    instructions:
      "Tear Romaine lettuce into bite-sized pieces. Toss with croutons, shaved Parmesan cheese, and Caesar dressing made with mashed anchovies, minced garlic, Dijon mustard, Worcestershire sauce, lemon juice, olive oil, salt, and black pepper. Serve immediately.",
    category: "Salad",
    origin: "Italy",
  },
  {
    id: 4,
    title: "Sushi Rolls",
    ingredients:
      "Sushi rice, Nori seaweed sheets, Fish (such as tuna, salmon, or yellowtail), Vegetables (such as cucumber, avocado, or carrot), Soy sauce, Wasabi, Pickled ginger",
    instructions:
      "Cook sushi rice according to package instructions and let it cool. Place a sheet of nori on a bamboo sushi mat. Spread rice evenly over the nori, leaving a small border. Arrange sliced fish and vegetables on top of the rice. Roll the sushi tightly using the bamboo mat. Slice into bite-sized pieces. Serve with soy sauce, wasabi, and pickled ginger.",
    category: "Appetizer",
    origin: "Japan",
  },
  {
    id: 5,
    title: "Beef Stroganoff",
    ingredients:
      "Beef sirloin, Mushrooms, Onion, Garlic, Beef broth, Sour cream, Dijon mustard, Worcestershire sauce, Egg noodles, Butter, Olive oil, Salt, Black pepper",
    instructions:
      "Slice beef sirloin thinly. Sauté sliced mushrooms, chopped onion, and minced garlic in butter and olive oil until softened. Remove from skillet. Sear beef slices until browned. Add beef broth, Dijon mustard, and Worcestershire sauce. Simmer until sauce thickens. Stir in sour cream. Serve over cooked egg noodles.",
    category: "Main Dish",
    origin: "Russia",
  },
  {
    id: 6,
    title: "Guacamole",
    ingredients:
      "Avocado, Lime juice, Tomato, Red onion, Jalapeno pepper, Garlic, Cilantro, Salt, Black pepper",
    instructions:
      "Cut avocados in half, remove pits, and scoop out the flesh into a bowl. Mash with a fork until smooth but still chunky. Finely chop tomato, red onion, jalapeno pepper, and garlic cloves. Chop fresh cilantro leaves. Add chopped vegetables to the mashed avocado. Stir in lime juice, salt, and black pepper to taste. Mix until well combined. Serve guacamole immediately with tortilla chips or as a topping for tacos, nachos, or salads.",
    category: "Appetizer",
    origin: "Mexico",
  },
  {
    id: 7,
    title: "Tiramisu",
    ingredients:
      "Ladyfingers, Espresso coffee, Mascarpone cheese, Eggs, Sugar, Cocoa powder, Marsala wine (optional)",
    instructions:
      "Brew espresso coffee and let it cool to room temperature. Separate egg yolks from whites. Beat egg yolks with sugar until thick and pale. Fold mascarpone cheese into the egg yolk mixture until smooth. In a separate bowl, beat egg whites until stiff peaks form. Gently fold them into the mascarpone mixture. Dip ladyfingers into the cooled espresso and arrange them in a single layer in a serving dish. Spread half of the mascarpone mixture over the ladyfingers. Repeat layers with remaining ladyfingers and mascarpone mixture. Dust the top with cocoa powder. Chill in the refrigerator for at least 4 hours, preferably overnight, before serving.",
    category: "Dessert",
    origin: "Italy",
  },
  {
    id: 8,
    title: "Moussaka",
    ingredients:
      "Eggplant, Potatoes, Ground beef or lamb, Onion, Garlic, Tomato sauce, Red wine (optional), Cinnamon, Nutmeg, All-purpose flour, Milk, Butter, Parmesan cheese, Salt, Black pepper, Olive oil",
    instructions:
      "Slice eggplant and potatoes thinly. Brush with olive oil and roast until tender. In a skillet, cook ground beef or lamb with chopped onion and minced garlic until browned. Stir in tomato sauce, red wine (optional), cinnamon, nutmeg, salt, and black pepper. Simmer until thickened. In a saucepan, make béchamel sauce by melting butter, stirring in flour, and gradually adding milk. Cook until thickened. Stir in grated Parmesan cheese. Layer roasted vegetables and meat sauce in a baking dish. Pour béchamel sauce over the top. Bake until golden brown and bubbly.",
    category: "Main Dish",
    origin: "Greece",
  },
  {
    id: 9,
    title: "Pad Thai",
    ingredients:
      "Rice noodles, Shrimp, Tofu, Eggs, Bean sprouts, Garlic, Shallots, Peanuts, Green onions, Vegetable oil, Tamarind paste, Fish sauce, Soy sauce, Sugar, Chili flakes, Lime",
    instructions:
      "Soak rice noodles in warm water until softened. Drain and set aside. In a wok or skillet, heat vegetable oil over medium heat. Sauté minced garlic and chopped shallots until fragrant. Add diced tofu and cook until golden brown. Push tofu to one side and crack eggs into the pan. Scramble until set, then mix with tofu. Add shrimp and cook until pink. Stir in soaked rice noodles. Add tamarind paste, fish sauce, soy sauce, sugar, and chili flakes. Toss everything together until well combined and heated through. Stir in bean sprouts and chopped green onions. Cook for another minute, then remove from heat. Serve hot, garnished with crushed peanuts and lime wedges for squeezing over the top.",
    category: "Main Dish",
    origin: "Thailand",
  },
  {
    id: 10,
    title: "Ratatouille",
    ingredients:
      "Eggplant, Zucchini, Bell peppers, Onion, Garlic, Tomato sauce, Tomatoes, Olive oil, Herbs de Provence, Salt, Black pepper",
    instructions:
      "Preheat oven to 375°F (190°C). Slice eggplant, zucchini, bell peppers, and tomatoes into thin rounds. Finely chop onion and mince garlic. Spread a layer of tomato sauce on the bottom of a baking dish. Arrange sliced vegetables in an alternating pattern. Drizzle olive oil over the vegetables and sprinkle with herbs de Provence, salt, and black pepper. Cover the baking dish with foil and bake in the preheated oven for 45-60 minutes, or until vegetables are tender. Serve hot as a side dish or main course, optionally garnished with fresh herbs.",
    category: "Side Dish",
    origin: "France",
  },
  {
    id: 11,
    title: "Pho",
    ingredients:
      "Beef bones, Beef brisket or steak, Rice noodles, Onion, Ginger, Star anise, Cinnamon stick, Cloves, Cardamom pods, Fish sauce, Sugar, Lime, Bean sprouts, Thai basil, Cilantro, Jalapeno peppers",
    instructions:
      "Roast beef bones in the oven until browned. Transfer to a large pot and cover with water. Bring water to a boil, then reduce heat to a simmer. Add sliced onion, ginger slices, star anise, cinnamon stick, cloves, and cardamom pods. Simmer for at least 4 hours, skimming off any impurities that rise to the surface. Strain the broth and return it to the pot. Season with fish sauce, sugar, and lime juice to taste. Cook rice noodles according to package instructions. Thinly slice beef brisket or steak. Divide cooked noodles and sliced beef among serving bowls. Pour hot broth over the top. Serve hot, garnished with bean sprouts, Thai basil, cilantro, sliced jalapeno peppers, and lime wedges.",
    category: "Soup",
    origin: "Vietnam",
  },
  {
    id: 12,
    title: "Shakshuka",
    ingredients:
      "Eggs, Tomato sauce, Bell peppers, Onion, Garlic, Cumin, Paprika, Chili flakes, Olive oil, Salt, Black pepper, Parsley",
    instructions:
      "Heat olive oil in a skillet over medium heat. Add chopped onion, sliced bell peppers, and minced garlic. Cook until vegetables are softened. Stir in cumin, paprika, and chili flakes. Pour tomato sauce into the skillet and simmer for 10-15 minutes, until the sauce thickens. Using a spoon, make small wells in the tomato sauce. Crack an egg into each well. Cover the skillet and cook until the egg whites are set but the yolks are still runny, about 5-7 minutes. Season with salt and black pepper. Garnish with chopped parsley before serving.",
    category: "Breakfast",
    origin: "Middle East",
  },
  {
    id: 13,
    title: "Gyoza",
    ingredients:
      "Gyoza wrappers, Ground pork, Cabbage, Garlic, Ginger, Soy sauce, Sesame oil, Green onions, Salt, Black pepper, Dipping sauce (soy sauce, rice vinegar, sesame oil, chili oil)",
    instructions:
      "Finely chop cabbage, garlic, ginger, and green onions. In a bowl, mix ground pork with chopped vegetables, soy sauce, sesame oil, salt, and black pepper. Place a spoonful of filling in the center of a gyoza wrapper. Moisten the edges with water and fold the wrapper in half, pleating the edges to seal tightly. Heat vegetable oil in a skillet over medium heat. Arrange gyoza in the skillet in a single layer. Cook until the bottoms are golden brown. Carefully pour water into the skillet and cover immediately to steam the gyoza. Cook for 5-7 minutes, or until the water evaporates and the wrappers are translucent. Serve hot with dipping sauce.",
    category: "Appetizer",
    origin: "Japan",
  },
  {
    id: 14,
    title: "Chicken Curry",
    ingredients:
      "Chicken thighs, Curry powder, Onion, Garlic, Ginger, Coconut milk, Tomato paste, Potatoes, Carrots, Green peas, Vegetable oil, Salt, Black pepper, Rice",
    instructions:
      "Cut chicken thighs into bite-sized pieces. Season with curry powder, salt, and black pepper. In a large skillet or pot, heat vegetable oil over medium heat. Add chopped onion, minced garlic, and grated ginger. Cook until softened and fragrant. Add chicken pieces and cook until browned on all sides. Stir in coconut milk and tomato paste. Bring to a simmer, then add diced potatoes and carrots. Simmer until the chicken is cooked through and the vegetables are tender. Stir in green peas and cook for a few more minutes. Serve hot over cooked rice.",
    category: "Main Dish",
    origin: "India",
  },
  {
    id: 15,
    title: "Hamburger",
    ingredients:
      "Ground beef, Hamburger buns, Lettuce, Tomato, Onion, Pickles, Cheese slices, Ketchup, Mustard, Mayonnaise, Salt, Black pepper",
    instructions:
      "Divide ground beef into equal portions and shape them into patties. Season both sides with salt and black pepper. Preheat grill or skillet over medium-high heat. Cook patties for 3-4 minutes on each side, or until desired doneness. Toast hamburger buns on the grill or in a toaster until lightly browned. Assemble burgers with lettuce, tomato slices, onion slices, pickles, and cheese slices. Spread ketchup, mustard, and mayonnaise on the buns. Place cooked patties on top. Serve hot, optionally with additional condiments on the side.",
    category: "Main Dish",
    origin: "United States",
  },
  {
    id: 16,
    title: "Tandoori Chicken",
    ingredients:
      "Chicken drumsticks or thighs, Yogurt, Lemon juice, Ginger garlic paste, Tandoori masala, Turmeric, Red chili powder, Cumin powder, Coriander powder, Garam masala, Salt, Vegetable oil",
    instructions:
      "In a bowl, mix yogurt, lemon juice, ginger garlic paste, tandoori masala, turmeric, red chili powder, cumin powder, coriander powder, garam masala, and salt to make the marinade. Score chicken pieces with a sharp knife. Coat them in the marinade, making sure to rub it into the cuts. Cover and refrigerate chicken for at least 4 hours, preferably overnight, to marinate. Preheat grill to medium-high heat. Brush chicken pieces with vegetable oil. Grill chicken for 20-25 minutes, turning occasionally, until cooked through and charred in spots. Serve hot, garnished with lemon wedges and fresh cilantro.",
    category: "Main Dish",
    origin: "India",
  },
  {
    id: 17,
    title: "Paella",
    ingredients:
      "Rice, Chicken thighs, Chorizo sausage, Shrimp, Clams, Mussels, Onion, Garlic, Bell peppers, Tomato, Saffron threads, Smoked paprika, Chicken broth, Olive oil, Lemon wedges, Parsley",
    instructions:
      "Heat olive oil in a large paella pan or skillet over medium heat. Brown chicken thighs and chorizo sausage slices. Remove and set aside. In the same pan, sauté chopped onion, minced garlic, and diced bell peppers until softened. Stir in chopped tomato, smoked paprika, and saffron threads. Add rice to the pan and cook for a few minutes until lightly toasted. Pour in chicken broth and bring to a simmer. Return chicken and chorizo to the pan. Arrange shrimp, clams, and mussels on top of the rice. Cover and simmer until seafood is cooked through and rice is tender. Garnish with lemon wedges and chopped parsley before serving.",
    category: "Main Dish",
    origin: "Spain",
  },
  {
    id: 18,
    title: "Risotto",
    ingredients:
      "Arborio rice, Chicken or vegetable broth, Onion, Garlic, White wine, Parmesan cheese, Butter, Olive oil, Salt, Black pepper",
    instructions:
      "Heat chicken or vegetable broth in a saucepan and keep it warm over low heat. In a large skillet, heat olive oil and butter over medium heat. Sauté finely chopped onion and minced garlic until translucent. Add arborio rice to the skillet and toast for a few minutes until lightly golden. Pour in white wine and cook until it's absorbed by the rice. Begin adding warm broth to the skillet, one ladleful at a time, stirring constantly and allowing each addition to be absorbed before adding more. Continue this process until the rice is creamy and cooked to al dente, about 18-20 minutes. Stir in grated Parmesan cheese and season with salt and black pepper to taste. Serve hot, optionally garnished with additional grated Parmesan and chopped parsley.",
    category: "Side Dish",
    origin: "Italy",
  },
  {
    id: 19,
    title: "Falafel",
    ingredients:
      "Chickpeas, Onion, Garlic, Fresh parsley, Cilantro, Cumin, Coriander, Baking powder, Salt, Black pepper, Flour, Vegetable oil (for frying)",
    instructions:
      "Soak chickpeas in water overnight. Drain well. In a food processor, combine chickpeas, chopped onion, minced garlic, fresh parsley, fresh cilantro, cumin, coriander, baking powder, salt, and black pepper. Process until the mixture is finely ground and holds together when squeezed. Transfer the mixture to a bowl and stir in flour until it forms a dough-like consistency. Shape the mixture into small balls or patties. Heat vegetable oil in a deep fryer or skillet to 350°F (175°C). Fry falafel in batches until golden brown and crispy, about 4-5 minutes per batch. Remove falafel from the oil and drain on paper towels. Serve hot with tahini sauce or hummus.",
    category: "Appetizer",
    origin: "Middle East",
  },
  {
    id: 20,
    title: "Philly Cheesesteak Sandwich",
    ingredients:
      "Ribeye steak, Hoagie rolls, Bell peppers, Onion, Mushrooms, Provolone cheese, Olive oil, Salt, Black pepper",
    instructions:
      "Slice ribeye steak thinly against the grain. Season with salt and black pepper. Heat olive oil in a skillet over medium-high heat. Add sliced bell peppers, onions, and mushrooms. Cook until vegetables are softened and slightly caramelized. Remove from skillet and set aside. In the same skillet, cook sliced ribeye steak until browned and cooked to desired doneness. Split hoagie rolls and place slices of provolone cheese on one side of each roll. Top the cheese with cooked steak and sautéed vegetables. Close the sandwiches with the other halves of the rolls. Wrap each sandwich in foil and place them in a preheated oven at 350°F (175°C) for a few minutes to melt the cheese. Serve hot, optionally with ketchup, mustard, or mayonnaise.",
    category: "Main Dish",
    origin: "United States",
  },
  {
    id: 21,
    title: "Beef Wellington",
    ingredients:
      "Beef tenderloin, Puff pastry, Prosciutto, Mushroom duxelles, Egg, Butter, Olive oil, Salt, Black pepper",
    instructions:
      "Season beef tenderloin with salt and black pepper. Sear on all sides in a hot skillet with olive oil and butter. Remove from heat and let it cool. Wrap the beef in prosciutto slices. Spread mushroom duxelles over puff pastry. Place the wrapped beef on top and wrap the pastry around it. Brush with beaten egg. Bake in a preheated oven at 400°F (200°C) for 25-30 minutes, or until the pastry is golden brown and the beef is cooked to desired doneness. Let it rest before slicing and serving.",
    category: "Main Dish",
    origin: "United Kingdom",
  },
  {
    id: 22,
    title: "Peking Duck",
    ingredients:
      "Duck, Soy sauce, Honey, Hoisin sauce, Rice vinegar, Garlic, Ginger, Star anise, Cinnamon stick, Scallions, Cucumber, Pancakes",
    instructions:
      "Clean duck and pat dry. In a bowl, mix soy sauce, honey, hoisin sauce, rice vinegar, minced garlic, grated ginger, star anise, and cinnamon stick to make the marinade. Rub the marinade all over the duck, including inside the cavity. Let it marinate in the refrigerator for at least 24 hours. Preheat oven to 350°F (175°C). Place duck on a rack in a roasting pan. Roast for 2-3 hours, basting with marinade every 30 minutes, until skin is crispy and duck is cooked through. Let it rest before carving. Serve with sliced scallions, cucumber, and pancakes for wrapping.",
    category: "Main Dish",
    origin: "China",
  },
  {
    id: 23,
    title: "Goulash",
    ingredients:
      "Beef chuck, Onion, Garlic, Bell peppers, Carrots, Potatoes, Tomato paste, Paprika, Caraway seeds, Beef broth, Sour cream, Flour, Olive oil, Salt, Black pepper",
    instructions:
      "Cut beef chuck into cubes. Season with salt, black pepper, and flour. In a Dutch oven, heat olive oil over medium heat. Sear beef until browned on all sides. Remove from pot and set aside. In the same pot, sauté chopped onion, minced garlic, sliced bell peppers, and diced carrots until softened. Stir in tomato paste, paprika, and caraway seeds. Return beef to the pot and add beef broth. Bring to a simmer, then cover and cook over low heat for 1.5-2 hours, or until beef is tender. Add diced potatoes and continue cooking until potatoes are cooked through. Stir in sour cream before serving. Serve hot, optionally garnished with chopped parsley.",
    category: "Main Dish",
    origin: "Hungary",
  },
  {
    id: 24,
    title: "Samosa",
    ingredients:
      "Potatoes, Peas, Onion, Garlic, Ginger, Green chili, Coriander seeds, Cumin seeds, Garam masala, Turmeric, Coriander powder, Salt, Black pepper, Pastry dough (flour, water, salt, oil)",
    instructions:
      "Boil potatoes until tender. Mash coarsely and set aside. In a skillet, heat oil and add crushed coriander seeds, cumin seeds, minced garlic, grated ginger, and chopped green chili. Sauté until fragrant. Add diced onion and cook until softened. Stir in mashed potatoes, green peas, garam masala, turmeric, coriander powder, salt, and black pepper. Cook until mixture is well combined and heated through. Roll out pastry dough and cut into circles. Place a spoonful of potato filling in the center of each circle. Fold over and seal tightly. Deep fry in hot oil until golden brown and crispy. Serve hot with chutney or sauce.",
    category: "Appetizer",
    origin: "India",
  },
  {
    id: 25,
    title: "Ratatouille",
    ingredients:
      "Eggplant, Zucchini, Bell peppers, Onion, Garlic, Tomato sauce, Tomatoes, Olive oil, Herbs de Provence, Salt, Black pepper",
    instructions:
      "Preheat oven to 375°F (190°C). Slice eggplant, zucchini, bell peppers, and tomatoes into thin rounds. Finely chop onion and mince garlic. Spread a layer of tomato sauce on the bottom of a baking dish. Arrange sliced vegetables in an alternating pattern. Drizzle olive oil over the vegetables and sprinkle with herbs de Provence, salt, and black pepper. Cover the baking dish with foil and bake in the preheated oven for 45-60 minutes, or until vegetables are tender. Serve hot as a side dish or main course, optionally garnished with fresh herbs.",
    category: "Side Dish",
    origin: "France",
  },
  {
    id: 26,
    title: "Pav Bhaji",
    ingredients:
      "Potatoes, Cauliflower, Green peas, Bell peppers, Onion, Tomato, Garlic, Ginger, Green chili, Pav buns, Butter, Olive oil, Pav bhaji masala, Salt, Black pepper, Lemon wedges, Cilantro",
    instructions:
      "Boil potatoes, cauliflower, and green peas until tender. Mash coarsely and set aside. In a skillet, heat butter and olive oil over medium heat. Sauté chopped onion, minced garlic, grated ginger, and chopped green chili until softened. Add diced bell peppers and tomatoes. Cook until vegetables are softened and mashed. Stir in mashed potato mixture. Add pav bhaji masala, salt, and black pepper. Cook until flavors are well combined and mixture is heated through. Toast pav buns with butter on a griddle until golden brown. Serve hot pav bhaji with lemon wedges and chopped cilantro.",
    category: "Main Dish",
    origin: "India",
  },
  {
    id: 27,
    title: "Tom Yum Soup",
    ingredients:
      "Shrimp, Lemongrass, Galangal, Kaffir lime leaves, Thai chili peppers, Mushrooms, Tomato, Onion, Fish sauce, Lime juice, Sugar, Cilantro",
    instructions:
      "Bruise lemongrass stalks and slice them into 2-inch pieces. Slice galangal thinly. Tear kaffir lime leaves. Halve Thai chili peppers. Bring water to a boil in a pot. Add lemongrass, galangal, kaffir lime leaves, and Thai chili peppers. Simmer for 10 minutes. Add sliced mushrooms, diced tomato, and chopped onion. Cook until vegetables are tender. Add cleaned shrimp and cook until pink. Season with fish sauce, lime juice, sugar, and salt to taste. Serve hot, garnished with chopped cilantro.",
    category: "Soup",
    origin: "Thailand",
  },
  {
    id: 28,
    title: "Biryani",
    ingredients:
      "Basmati rice, Chicken or mutton, Yogurt, Onion, Tomato, Garlic, Ginger, Green chili, Mint leaves, Cilantro, Garam masala, Turmeric, Saffron, Milk, Ghee, Salt",
    instructions:
      "Soak basmati rice in water for 30 minutes. Drain and set aside. Marinate chicken or mutton in yogurt, minced onion, chopped tomato, minced garlic, grated ginger, chopped green chili, chopped mint leaves, chopped cilantro, garam masala, turmeric, and salt. Heat ghee in a large pot over medium heat. Sauté sliced onion until golden brown. Remove half of the fried onions and set aside. Layer marinated meat over the remaining onions. Top with soaked rice. Dissolve saffron in warm milk and pour over the rice. Cover and cook on low heat until rice is cooked and meat is tender. Garnish with reserved fried onions before serving.",
    category: "Main Dish",
    origin: "India",
  },
  {
    id: 29,
    title: "Pasta Carbonara",
    ingredients:
      "Spaghetti, Pancetta or guanciale, Eggs, Parmesan cheese, Black pepper, Salt",
    instructions:
      "Cook spaghetti according to package instructions. In a skillet, cook pancetta or guanciale until crispy. Beat eggs, Parmesan cheese, black pepper, and salt in a bowl. Drain spaghetti and toss with pancetta. Add egg mixture and toss until coated. Serve hot.",
    category: "Main Dish",
    origin: "Italy",
  },
  {
    id: 30,
    title: "Chicken Alfredo",
    ingredients:
      "Fettuccine pasta, Chicken breasts, Heavy cream, Parmesan cheese, Butter, Garlic, Olive oil, Salt, Black pepper, Parsley",
    instructions:
      "Cook fettuccine pasta according to package instructions. Season chicken breasts with salt and black pepper. Heat olive oil in a skillet over medium-high heat. Add chicken and cook until browned and cooked through. Remove from skillet and set aside. In the same skillet, melt butter and sauté minced garlic until fragrant. Stir in heavy cream and grated Parmesan cheese. Cook until sauce thickens. Slice cooked chicken and add it back to the skillet. Toss with the sauce until heated through. Serve hot over cooked fettuccine. Garnish with chopped parsley.",
    category: "Main Dish",
    origin: "Italy",
  },
];

window.__category = [
  "Main Dish",
  "Salad",
  "Appetizer",
  "Dessert",
  "Side Dish",
  "Soup",
  "Breakfast",
];

window.__origins = [
  "Italy",
  "India",
  "Japan",
  "Mexico",
  "Russia",
  "Greece",
  "Thailand",
  "France",
  "Vietnam",
  "Middle East",
  "United States",
  "United Kingdom",
  "China",
  "Hungary",
];


// banana blueberry mango apple pineapple strawberry orange grape watermelon tomato
const products = [
  {
    name: 'Banana',
    image: '/images/banana.jpg',
    brand: 'Brand B',
    category: 'Fruit',
    price: 1.99,
    description:
      'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant.',
    countInStock: 1000,
    rating: 4.5,
    numReviews: 100,
  },

  {
    name: 'Blueberry',
    image: '/images/blueberry.jpg',
    brand: 'Brand B',
    category: 'Fruit',
    price: 3.99,
    description:
      'Blueberries are perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries. Commercial blueberries—both wild (lowbush) and cultivated (highbush)—are all native to North America. The highbush varieties were introduced into Europe during the 1930s.',
    countInStock: 500,
    rating: 5.0,
    numReviews: 10,
  },

  {
    name: 'Mango',
    image: '/images/mango.jpg',
    brand: 'Brand M',
    category: 'Fruit',
    price: 3.49,
    description:
      'A mango is a stone fruit produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. Most of these species are found in nature as wild mangoes. The genus belongs to the cashew family Anacardiaceae. Mangoes are native to South Asia,[1][2] from where the "common mango" or "Indian mango", Mangifera indica, has been distributed worldwide to become one of the most widely cultivated fruits in the tropics. Other Mangifera species (e.g. horse mango, Mangifera foetida) are grown on a more localized basis.Fresh certified organic banana',
    countInStock: 200,
    rating: 4.0,
    numReviews: 90,
  },

  {
    name: 'Apple',
    image: '/images/apple.jpg',
    brand: 'Brand A',
    category: 'Fruit',
    price: 1.49,
    description:
      'An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.',
    countInStock: 800,
    rating: 4.5,
    numReviews: 20,
  },

  {
    name: 'Pineapple',
    image: '/images/pineapple.jpg',
    brand: 'Brand P',
    category: 'Fruit',
    price: 5.99,
    description:
      'The pineapple (Ananas comosus) is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries. The introduction of the pineapple to Europe in the 17th century made it a significant cultural icon of luxury.',
    countInStock: 700,
    rating: 3.5,
    numReviews: 80,
  },

  {
    name: 'Strawberry',
    image: '/images/strawberry.jpg',
    brand: 'Brand S',
    category: 'Fruit',
    price: 3.49,
    description:
      'The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as jam, juice, pies, ice cream, milkshakes, and chocolates.',
    countInStock: 0,
    rating: 4.0,
    numReviews: 30,
  },

  {
    name: 'Orange',
    image: '/images/orange.jpg',
    brand: 'Brand B',
    category: 'Fruit',
    price: 1.95,
    description:
      'The orange is the fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.',
    countInStock: 400,
    rating: 4.5,
    numReviews: 70,
  },

  {
    name: 'Grape',
    image: '/images/grape.jpg',
    brand: 'Brand B',
    category: 'Fruit',
    price: 1.95,
    description:
      'A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, grape juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters.',
    countInStock: 0,
    rating: 4.0,
    numReviews: 40,
  },

  {
    name: 'Watermelon',
    image: '/images/watermelon.jpg',
    brand: 'Brand B',
    category: 'Fruit',
    price: 1.95,
    description:
      'Watermelon is a scrambling and trailing vine in the flowering plant family Cucurbitaceae. There is evidence from seeds in Pharaoh tombs of watermelon cultivation in Ancient Egypt. Watermelon is grown in favorable climates from tropical to temperate regions worldwide for its large edible fruit, which is a berry with a hard rind and no internal divisions, and is botanically called a pepo. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties exist.',
    countInStock: 1000,
    rating: 3.5,
    numReviews: 60,
  },

  {
    name: 'Tomato',
    image: '/images/tomato.jpg',
    brand: 'Brand B',
    category: 'Fruit',
    price: 1.95,
    description:
      'The tomato is the edible berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America. The Nahuatl (the language used by the Aztecs) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived. Its domestication and use as a cultivated food may have originated with the indigenous peoples of Mexico.',
    countInStock: 1000,
    rating: 4.5,
    numReviews: 50,
  },

  {
    name: 'Baby spinach',
    image: '/images/babyspinach.jpg',
    brand: 'Brand S',
    category: 'Vegetable',
    price: 5.95,
    description:
      'Spinach (Spinacia oleracea) is a leafy green flowering plant native to central and western Asia. It is of the order Caryophyllales, family Amaranthaceae, subfamily Chenopodioideae. Its leaves are a common edible vegetable consumed either fresh, or after storage using preservation techniques by canning, freezing, or dehydration. It may be eaten cooked or raw, and the taste differs considerably; the high oxalate content may be reduced by steaming',
    countInStock: 1000,
    rating: 4.5,
    numReviews: 120,
  },

  {
    name: 'Broccoli',
    image: '/images/broccoli.jpg',
    brand: 'Brand B',
    category: 'Vegetable',
    price: 3.95,
    description:
      'Broccoli (Brassica oleracea var. italica) is an edible green plant in the cabbage family (family Brassicaceae, genus Brassica) whose large flowering head, stalk and small associated leaves are eaten as a vegetable. The word broccoli comes from the Italian plural of broccolo, which means "the flowering crest of a cabbage", and is the diminutive form of brocco, meaning "small nail" or "sprout".',
    countInStock: 1000,
    rating: 3.0,
    numReviews: 200,
  },

  {
    name: 'Chive',
    image: '/images/chive.jpg',
    brand: 'Brand C',
    category: 'Vegetable',
    price: 3.99,
    description:
      'Chives, scientific name Allium schoenoprasum, is a species of flowering plant in the family Amaryllidaceae that produces edible leaves and flowers. Their close relatives include the common onions, garlic, shallot, leek, scallion, and Chinese onion. A perennial plant, it is widespread in nature across much of Europe, Asia, and North America. A. schoenoprasum is the only species of Allium native to both the New and the Old Worlds.',
    countInStock: 0,
    rating: 4.0,
    numReviews: 150,
  },

  {
    name: 'Cabbage',
    image: '/images/cabbage.jpg',
    brand: 'Brand C',
    category: 'Vegetable',
    price: 5.95,
    description:
      'Cabbage (comprising several cultivars of Brassica oleracea) is a leafy green, red (purple), or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads. It is descended from the wild cabbage (B. oleracea var. oleracea), and belongs to the "cole crops" or brassicas, meaning it is closely related to broccoli and cauliflower (var. botrytis); Brussels sprouts (var. gemmifera); and Savoy cabbage (var. sabauda).',
    countInStock: 1000,
    rating: 4.5,
    numReviews: 200,
  },

  {
    name: 'Cucumber',
    image: '/images/cucumber.jpg',
    brand: 'Brand C',
    category: 'Vegetable',
    price: 4.99,
    description:
      'Cucumber (Cucumis sativus) is a widely-cultivated creeping vine plant in the Cucurbitaceae gourd family that bears cucumiform fruits, which are used as vegetables.[1] There are three main varieties of cucumber—slicing, pickling, and burpless/seedless—within which several cultivars have been created. The cucumber originates from South Asia, but now grows on most continents, as many different types of cucumber are traded on the global market. In North America, the term wild cucumber refers to plants in the genera Echinocystis and Marah, though the two are not closely related.',
    countInStock: 1000,
    rating: 4.0,
    numReviews: 180,
  },

  {
    name: 'Carrot',
    image: '/images/carrot.jpg',
    brand: 'Brand C',
    category: 'Vegetable',
    price: 3.99,
    description:
      'The carrot (Daucus carota subsp. sativus) is a root vegetable, usually orange in color, though purple, black, red, white, and yellow cultivars exist.[2][3][4] They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia. The plant probably originated in Persia and was originally cultivated for its leaves and seeds. The most commonly eaten part of the plant is the taproot, although the stems and leaves are also eaten. The domestic carrot has been selectively bred for its greatly enlarged, more palatable, less woody-textured taproot.',
    countInStock: 0,
    rating: 3.5,
    numReviews: 80,
  },

  {
    name: 'Mushroom',
    image: '/images/mushroom.jpg',
    brand: 'Brand M',
    category: 'Vegetable',
    price: 4.49,
    description:
      'A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source. The standard for the name "mushroom" is the cultivated white button mushroom, Agaricus bisporus; hence the word "mushroom" is most often applied to those fungi (Basidiomycota, Agaricomycetes) that have a stem (stipe), a cap (pileus), and gills (lamellae, sing. lamella) on the underside of the cap. "Mushroom" also describes a variety of other gilled fungi, with or without stems, therefore the term is used to describe the fleshy fruiting bodies of some Ascomycota. These gills produce microscopic spores that help the fungus spread across the ground or its occupant surface.',
    countInStock: 1000,
    rating: 4.5,
    numReviews: 300,
  },

  {
    name: 'Onion',
    image: '/images/onion.jpg',
    brand: 'Brand O',
    category: 'Vegetable',
    price: 1.99,
    description:
      'The onion (Allium cepa L., from Latin cepa "onion"), also known as the bulb onion or common onion, is a vegetable that is the most widely cultivated species of the genus Allium. Its close relatives include the garlic, scallion, shallot, leek, chive, and Chinese onion. This genus also contains several other species variously referred to as onions and cultivated for food, such as the Japanese bunching onion (Allium fistulosum), the tree onion (A. ×proliferum), and the Canada onion (Allium canadense). The name "wild onion" is applied to a number of Allium species, but A. cepa is exclusively known from cultivation. Its ancestral wild original form is not known, although escapes from cultivation have become established in some regions. The onion is most frequently a biennial or a perennial plant, but is usually treated as an annual and harvested in its first growing season.',
    countInStock: 1000,
    rating: 4.0,
    numReviews: 130,
  },

  {
    name: 'Leek',
    image: '/images/leek.jpg',
    brand: 'Brand L',
    category: 'Vegetable',
    price: 2.99,
    description:
      'The leek is a vegetable, a cultivar of Allium ampeloprasum, the broadleaf wild leek. The edible part of the plant is a bundle of leaf sheaths that is sometimes erroneously called a stem or stalk. The genus Allium also contains the onion, garlic, shallot, scallion, chive,[1] and Chinese onion. Three closely related vegetables, elephant garlic, kurrat and Persian leek or tareh, are also cultivars of A. ampeloprasum, although different in their uses as food.',
    countInStock: 1000,
    rating: 4.0,
    numReviews: 90,
  },

  {
    name: 'Garlic',
    image: '/images/garlic.jpg',
    brand: 'Brand G',
    category: 'Vegetable',
    price: 3.99,
    description:
      "Garlic (Allium sativum) is a species in the onion genus, Allium. Its close relatives include the onion, shallot, leek, chive, and Chinese onion. It is native to Central Asia and northeastern Iran and has long been a common seasoning worldwide, with a history of several thousand years of human consumption and use.[4][5] It was known to ancient Egyptians and has been used as both a food flavoring and a traditional medicine. China produces some 80% of the world's supply of garlic.",
    countInStock: 1000,
    rating: 4.5,
    numReviews: 200,
  },
];

export default products;

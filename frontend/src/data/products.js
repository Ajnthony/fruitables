// banana blueberry mango apple pineapple strawberry orange grape watermelon tomato
const products = [
  {
    _id: '1',
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
    _id: '2',
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
    _id: '3',
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
    _id: '4',
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
    _id: '5',
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
    _id: '6',
    name: 'Strawberry',
    image: '/images/strawberry.jpg',
    brand: 'Brand S',
    category: 'Fruit',
    price: 3.49,
    description:
      'The garden strawberry (or simply strawberry; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness. It is consumed in large quantities, either fresh or in such prepared foods as jam, juice, pies, ice cream, milkshakes, and chocolates.',
    countInStock: 1000,
    rating: 4.0,
    numReviews: 30,
  },

  {
    _id: '7',
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
    _id: '8',
    name: 'Grape',
    image: '/images/grape.jpg',
    brand: 'Brand B',
    category: 'Fruit',
    price: 1.95,
    description:
      'A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, grape juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters.',
    countInStock: 600,
    rating: 4.0,
    numReviews: 40,
  },

  {
    _id: '9',
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
    _id: '10',
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
];

export default products;

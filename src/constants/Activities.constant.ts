import { Category } from "../enums/Category.enum";
import { Tag } from "../enums/Tag.enum";
import { MarkerElement } from "../types/MarkerElement.type";

export const Activities: MarkerElement[] = [
  {
    id: "3090f656-faba-4b49-99ec-d41b2103945f",
    position: [44.86306643931905, -0.5729916056103233],
    category: Category.ACTIVITY,
    title: "Arkose Bordeaux",
    description: "1,387 boulders climbed since 2022, with no end in sight!",
    tags: [Tag.CLIMBING],
  },
  {
    id: "e2629ec5-6abb-4160-a9fe-4d4b2953e1c2",
    position: [39.768902221767334, 2.8191569033896706],
    category: Category.ACTIVITY,
    title: "La Ruta de Pedra en Sec",
    description:
      "My first GR! Now I know why it is considered one of the most beautiful GRs in Europe.",
    tags: [Tag.HIKING],
  },
  {
    id: "75aad4fe-e6f1-4ead-a061-72ef1614ba4c",
    position: [52.51885994282435, 13.378160081172163],
    category: Category.ACTIVITY,
    title: "Generali Berlin Half Marathon",
    description:
      "My first half marathon! What could be better than discovering" +
      " a city for the first time by running through it?",
    tags: [Tag.RUNNING],
  },
  {
    id: "3e4920cc-1036-43b4-ba96-5c7c8ac79a59",
    position: [48.86379818312746, 2.3811918118067434],
    category: Category.ACTIVITY,
    title: "Delhi Bazaar",
    description:
      "My favorite Indian kitchen in Paris! A subtle blend of " +
      "tradition and modernity in a tastefully decorated setting.",
    tags: [Tag.RESTAURANT],
  },
  {
    id: "cf6545d9-659b-4463-ac06-ac0daf663e95",
    position: [44.83195735295052, -0.5653045191067184],
    category: Category.ACTIVITY,
    title: "Samos Greek Food",
    description:
      "One of my favorite Greek food restaurants in Bordeaux!" +
      " If you love Greek food and want to share a meal with" +
      " friends or your partner, that's a perfect place.",
    tags: [Tag.RESTAURANT],
  },
  {
    id: "f3dca3ef-56aa-43c1-bf00-6b3c5c8433f0",
    position: [40.99636811318397, 17.219795485664953],
    category: Category.ACTIVITY,
    title: "MINT cucina fresca",
    description:
      "What a place! If you're ever in Polignana a Mare, I can't" +
      "recommend this place enough. The food is mainly vegetarian" +
      " and there are vegan options too, but what a taste!",
    tags: [Tag.RESTAURANT],
  },
];
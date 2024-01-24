import { Skill } from "../enums/Skill.enum";
import { Tag } from "../enums/Tag.enum";
import { MarkerElement } from "../types/MarkerElement.type";

export const Markers: MarkerElement[] = [
  {
    id: "3090f656-faba-4b49-99ec-d41b2103945f",
    position: [44.86306643931905, -0.5729916056103233],
    title: "Arkose Bordeaux",
    description: "1,387 boulders climbed since 2022, with no end in sight!",
    tag: Tag.ACTIVITY,
  },
  {
    id: "e2629ec5-6abb-4160-a9fe-4d4b2953e1c2",
    position: [39.768902221767334, 2.8191569033896706],
    title: "La Ruta de Pedra en Sec",
    description:
      "My first GR! Now I know why it is considered one of the most beautiful GRs in Europe.",
    tag: Tag.ACTIVITY,
  },
  {
    id: "75aad4fe-e6f1-4ead-a061-72ef1614ba4c",
    position: [52.51885994282435, 13.378160081172163],
    title: "Generali Berlin Half Marathon",
    description:
      "My first half marathon! What could be better than discovering" +
      " a city for the first time by running through it?",
    tag: Tag.ACTIVITY,
  },
  {
    id: "3e4920cc-1036-43b4-ba96-5c7c8ac79a59",
    position: [48.86379818312746, 2.3811918118067434],
    title: "Delhi Bazaar",
    description:
      "My favorite Indian kitchen in Paris! A subtle blend of " +
      "tradition and modernity in a tastefully decorated setting.",
    tag: Tag.ACTIVITY,
  },
  {
    id: "cf6545d9-659b-4463-ac06-ac0daf663e95",
    position: [44.83195735295052, -0.5653045191067184],
    title: "Samos Greek Food",
    description:
      "One of my favorite Greek food restaurants in Bordeaux!" +
      " If you love Greek food and want to share a meal with" +
      " friends or your partner, that's a perfect place.",
    tag: Tag.ACTIVITY,
  },
  {
    id: "f3dca3ef-56aa-43c1-bf00-6b3c5c8433f0",
    position: [40.99636811318397, 17.219795485664953],
    title: "MINT cucina fresca",
    description:
      "What a place! If you're ever in Polignana a Mare, I can't" +
      "recommend this place enough. The food is mainly vegetarian" +
      " and there are vegan options too, but what a taste!",
    tag: Tag.ACTIVITY,
  },
  {
    id: "1b86a084-9cb4-4804-83e8-6734259ff9e3",
    position: [44.85973864639567, -0.5653868677258469],
    title: "Fullstack web & data developer",
    subtitle: "Solinum",
    description:
      "It's definitely the place that launched me into the dev. I had the opportunity" +
      " to join the Tech team and hold a fullstack developer role combined with a data" +
      " developer role for more than two years. I developed many features on the " +
      "organization's main project and rebuilt the stack as a modern data stack with the" +
      " help of my former CTO. The greatest experience of my young career so far!",
    startDate: new Date(2021, 5, 1),
    endDate: new Date(2023, 8, 1),
    skills: [
      Skill.AIRBYTE,
      Skill.AIRTABLE,
      Skill.ANGULAR,
      Skill.BOOTSTRAP,
      Skill.CSS,
      Skill.DAGSTER,
      Skill.EXPRESS,
      Skill.GIT,
      Skill.HTML,
      Skill.JAVASCRIPT,
      Skill.JEST,
      Skill.METABASE,
      Skill.MONGO,
      Skill.MONGOOSE,
      Skill.NODE,
      Skill.POSTGRES,
      Skill.PYTHON,
      Skill.SUPERSET,
      Skill.TYPESCRIPT,
    ],
    tag: Tag.WORK,
  },
  {
    id: "42d9e2b8-3e84-46d4-8824-8319826caaa5",
    position: [44.84231665523534, -0.5828558839964763],
    title: "Regional developer assistant",
    subtitle: "Solinum",
    description:
      "After my unsuccessful thesis, I wanted to take a break and do something " +
      "completely outside my field of action, but which was close to my heart. " +
      "So I joined an organization fighting against poverty. It changed my life" +
      " and I'm very grateful to the people I met.",
    startDate: new Date(2020, 8, 1),
    endDate: new Date(2021, 2, 1),
    skills: [Skill.AIRTABLE],
    tag: Tag.WORK,
  },
  {
    id: "ff7397ce-448d-4186-9e3b-9b9d1091b482",
    position: [44.80874320544104, -0.5952598747277164],
    title: "Ph.D student",
    subtitle: "Thales",
    description:
      "I started a PhD in AI and RADAR signal processing after engineering school, " +
      "but dropped out after just one year. I didn't feel comfortable in the role " +
      "and I think I hadn't prepared myself well enough to do it properly. Today, " +
      "I have no regrets, as it taught me a lot. Publication: Bondu, J., Grivel," +
      " E., Giremus, A., Legrand, P., Corretja, V. & Pommier, M. (2020, August). " +
      "Sea Target Classification Based On A Priori Motion Model. In 2020 28th European" +
      " Signal Processing Conference (EUSIPCO) (pp. 2478-2482). IEEE.",
    startDate: new Date(2019, 8, 1),
    endDate: new Date(2020, 5, 1),
    skills: [Skill.MATLAB, Skill.PYTHON, Skill.KERAS],
    tag: Tag.WORK,
  },
  {
    id: "bb6b34a8-acb9-4368-9b18-1d75e0f6678f",
    position: [44.80652054200112, -0.6060959991467378],
    title: "Teaching assistant",
    subtitle: "ENSEIRB-MATMECA",
    description:
      "Conducted signal processing exercises for first-year engineering students.",
    startDate: new Date(2019, 8, 1),
    endDate: new Date(2020, 2, 1),
    tag: Tag.WORK,
  },
  {
    id: "4af4c139-1000-4b3b-b969-852e21c84aad",
    position: [44.85455703447405, -0.7008204189687955],
    title: "Research engineer intern",
    subtitle: "Thales",
    description:
      "One of my favorite internships! I worked on Generative Adversarial Networks to" +
      " generate RADAR images of sea clutter. I was very well supervised by Marie and" +
      " Vincent, who gave me a lot of freedom to explore a multitude of solutions.",
    startDate: new Date(2019, 1, 1),
    endDate: new Date(2019, 6, 1),
    skills: [Skill.PYTHON, Skill.KERAS],
    tag: Tag.WORK,
  },
  {
    id: "a2154780-c20f-41e5-8088-a08d8ccd60ca",
    position: [48.681395982670224, 2.1971129444267032],
    title: "Research engineer intern",
    subtitle: "Zodiac Data Systems",
    description:
      "An interesting internship on digital communications. More specifically, " +
      "it involved working on a new way of demodulating a signal more quickly " +
      "by dividing it into pieces and then grouping them together.",
    startDate: new Date(2018, 4, 1),
    endDate: new Date(2018, 7, 1),
    skills: [Skill.CPP, Skill.PYTHON],
    tag: Tag.WORK,
  },
  {
    id: "2d3c6dfc-da08-4403-9dc3-768be930d98a",
    position: [45.46094694989969, -73.56275673256626],
    title: "Kitchen crew member",
    subtitle: "McDonald's",
    description:
      "It's all in the name. A part-time job to pay for my studies in Canada.",
    startDate: new Date(2017, 11, 1),
    endDate: new Date(2018, 3, 1),
    tag: Tag.WORK,
  },
  {
    id: "28e188fc-5cf2-452b-a0c2-9e9dbd57bb54",
    position: [26.864221162283865, 75.81075611299492],
    title: "Research engineer intern",
    subtitle: "Malaviya National Institute of Technology",
    description:
      "My first internship as a research engineer. It was difficult because of the subject " +
      "matter, but also because of getting used to the Indian work culture. Publication:" +
      " Bondu, J., Mishra, A., Laxmi, V., & Gaur, M. S. (2017, October). Flooding In Secure" +
      " Wireless Sensor Networks: Student Contribution. In Proceedings of the 10th " +
      "International Conference on Security of Information and Networks (pp. 151-156).",
    startDate: new Date(2018, 4, 1),
    endDate: new Date(2018, 7, 1),
    skills: [Skill.CPP, Skill.PYTHON],
    tag: Tag.WORK,
  },
  {
    id: "4207369d-1a18-4a29-a19e-2b3be7bb5416",
    position: [45.49499654534455, -73.56228295955358],
    title: "Double degree",
    subtitle: "ÉTS",
    description:
      "I wanted to try to get a double degree from a University" +
      " in Canada, but I had to give up after two semesters.",
    startDate: new Date(2013, 8, 1),
    endDate: new Date(2019, 8, 1),
    tag: Tag.EDUCATION,
  },
  {
    id: "fc76c940-d400-4ca9-89c9-d0865a879495",
    position: [44.806885917206515, -0.6051089462296996],
    title: "Engineering School",
    subtitle: "ENSEIRB-MATMECA",
    description:
      "I graduated with honors in telecommunications engineering, with a " +
      "specialization in signal and image processing. But what I enjoyed the" +
      " most was there was the hip-hop association, with which I had a lot of fun.",
    startDate: new Date(2013, 8, 1),
    endDate: new Date(2019, 8, 1),
    tag: Tag.EDUCATION,
  },
  {
    id: "6f000988-4d11-49a4-9bd6-fa276a001596",
    position: [48.88195321585527, 2.3196748780769245],
    title: "Classes Préparatoires",
    subtitle: "Lycée Chaptal",
    description:
      "That was hard! A 2-year intensive math and physics course in preparation" +
      " for the selective entrance examination to French engineering schools",
    startDate: new Date(2013, 8, 1),
    endDate: new Date(2015, 5, 1),
    tag: Tag.EDUCATION,
  },
  {
    id: "6af9dd9e-d5cd-4dca-a43e-2f9aa17b0903",
    position: [48.79819131604601, 2.649003436946309],
    title: "High School Diploma",
    subtitle: "Lycée Charles Le Chauve",
    description:
      "I graduated in sciences with honors and had pretty good times with friends.",
    startDate: new Date(2010, 8, 1),
    endDate: new Date(2013, 5, 1),
    tag: Tag.EDUCATION,
  },
];

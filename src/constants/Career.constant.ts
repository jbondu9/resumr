import { Category } from "../enums/Category.enum";
import { Tag } from "../enums/Tag.enum";
import { MarkerElement } from "../types/MarkerElement.type";

export const Career: MarkerElement[] = [
  {
    id: "1b86a084-9cb4-4804-83e8-6734259ff9e3",
    position: [44.85973864639567, -0.5653868677258469],
    category: Category.WORK,
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
    tags: [
      Tag.AIRBYTE,
      Tag.AIRTABLE,
      Tag.ANGULAR,
      Tag.BOOTSTRAP,
      Tag.CSS,
      Tag.DAGSTER,
      Tag.EXPRESS,
      Tag.GIT,
      Tag.HTML,
      Tag.JAVASCRIPT,
      Tag.JEST,
      Tag.METABASE,
      Tag.MONGO,
      Tag.MONGOOSE,
      Tag.NODE,
      Tag.POSTGRES,
      Tag.PYTHON,
      Tag.SUPERSET,
      Tag.TYPESCRIPT,
    ],
  },
  {
    id: "42d9e2b8-3e84-46d4-8824-8319826caaa5",
    position: [44.84231665523534, -0.5828558839964763],
    category: Category.WORK,
    title: "Regional developer assistant",
    subtitle: "Solinum",
    description:
      "After my unsuccessful thesis, I wanted to take a break and do something " +
      "completely outside my field of action, but which was close to my heart. " +
      "So I joined an organization fighting against poverty. It changed my life" +
      " and I'm very grateful to the people I met.",
    startDate: new Date(2020, 8, 1),
    endDate: new Date(2021, 2, 1),
    tags: [Tag.AIRTABLE],
  },
  {
    id: "ff7397ce-448d-4186-9e3b-9b9d1091b482",
    position: [44.80874320544104, -0.5952598747277164],
    category: Category.WORK,
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
    tags: [Tag.MATLAB, Tag.PYTHON, Tag.KERAS],
  },
  {
    id: "bb6b34a8-acb9-4368-9b18-1d75e0f6678f",
    position: [44.80652054200112, -0.6060959991467378],
    category: Category.WORK,
    title: "Teaching assistant",
    subtitle: "ENSEIRB-MATMECA",
    description:
      "Conducted signal processing exercises for first-year engineering students.",
    startDate: new Date(2019, 8, 1),
    endDate: new Date(2020, 2, 1),
    tags: [Tag.MATLAB],
  },
  {
    id: "4af4c139-1000-4b3b-b969-852e21c84aad",
    position: [44.85455703447405, -0.7008204189687955],
    category: Category.WORK,
    title: "Research engineer intern",
    subtitle: "Thales",
    description:
      "One of my favorite internships! I worked on Generative Adversarial Networks to" +
      " generate RADAR images of sea clutter. I was very well supervised by Marie and" +
      " Vincent, who gave me a lot of freedom to explore a multitude of solutions.",
    startDate: new Date(2019, 1, 1),
    endDate: new Date(2019, 6, 1),
    tags: [Tag.PYTHON, Tag.KERAS],
  },
  {
    id: "a2154780-c20f-41e5-8088-a08d8ccd60ca",
    position: [48.681395982670224, 2.1971129444267032],
    category: Category.WORK,
    title: "Research engineer intern",
    subtitle: "Zodiac Data Systems",
    description:
      "An interesting internship on digital communications. More specifically, " +
      "it involved working on a new way of demodulating a signal more quickly " +
      "by dividing it into pieces and then grouping them together.",
    startDate: new Date(2018, 4, 1),
    endDate: new Date(2018, 7, 1),
    tags: [Tag.CPP, Tag.PYTHON],
  },
  {
    id: "2d3c6dfc-da08-4403-9dc3-768be930d98a",
    position: [45.46094694989969, -73.56275673256626],
    category: Category.WORK,
    title: "Kitchen crew member",
    subtitle: "McDonald's",
    description:
      "It's all in the name. A part-time job to pay for my studies in Canada.",
    startDate: new Date(2017, 11, 1),
    endDate: new Date(2018, 3, 1),
  },
  {
    id: "28e188fc-5cf2-452b-a0c2-9e9dbd57bb54",
    position: [26.864221162283865, 75.81075611299492],
    category: Category.WORK,
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
    tags: [Tag.CPP, Tag.PYTHON],
  },
];

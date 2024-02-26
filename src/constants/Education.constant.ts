import { Category } from "../enums/Category.enum";
import { Tag } from "../enums/Tag.enum";

import { MarkerElement } from "../types/MarkerElement.type";

export const Education: MarkerElement[] = [
  {
    id: "4207369d-1a18-4a29-a19e-2b3be7bb5416",
    position: [45.49499654534455, -73.56228295955358],
    category: Category.EDUCATION,
    title: "Double degree",
    subtitle: "ÉTS",
    description:
      "I wanted to try to get a double degree from a University" +
      " in Canada, but I had to give up after two semesters.",
    startDate: new Date(2017, 8, 1),
    endDate: new Date(2018, 3, 1),
    tags: [Tag.MATLAB],
  },
  {
    id: "fc76c940-d400-4ca9-89c9-d0865a879495",
    position: [44.806885917206515, -0.6051089462296996],
    category: Category.EDUCATION,
    title: "Engineering School",
    subtitle: "ENSEIRB-MATMECA",
    description:
      "I graduated with honors in telecommunications engineering, with a " +
      "specialization in signal and image processing. But what I enjoyed the" +
      " most was the hip-hop association, with which I had a lot of fun.",
    startDate: new Date(2015, 8, 1),
    endDate: new Date(2019, 8, 1),
    tags: [Tag.MATLAB, Tag.C, Tag.JAVA],
  },
  {
    id: "6f000988-4d11-49a4-9bd6-fa276a001596",
    position: [48.88195321585527, 2.3196748780769245],
    category: Category.EDUCATION,
    title: "Classes Préparatoires",
    subtitle: "Lycée Chaptal",
    description:
      "That was hard! A 2-year intensive math and physics course in preparation" +
      " for the selective entrance examination to French engineering schools.",
    startDate: new Date(2013, 8, 1),
    endDate: new Date(2015, 5, 1),
    tags: [Tag.PYTHON],
  },
  {
    id: "6af9dd9e-d5cd-4dca-a43e-2f9aa17b0903",
    position: [48.79819131604601, 2.649003436946309],
    category: Category.EDUCATION,
    title: "High School Diploma",
    subtitle: "Lycée Charles Le Chauve",
    description:
      "I graduated in sciences with honors and had pretty good times with friends.",
    startDate: new Date(2010, 8, 1),
    endDate: new Date(2013, 5, 1),
    tags: [],
  },
];

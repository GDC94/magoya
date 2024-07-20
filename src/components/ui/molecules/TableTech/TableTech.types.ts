export interface Tool {
  name: string;
  id: number;
}

export const TOOLS_LEFT: Tool[] = [
  {
    name: "Next JS",
    id: 1,
  },
  {
    name: "React JS",
    id: 2,
  },
  {
    name: "Styled Components",
    id: 3,
  },
  {
    name: "Typescript",
    id: 4,
  },
  {
    name: "Redux",
    id: 5,
  },
];

export const TOOLS_RIGHT: Tool[] = [
  {
    name: "Tanstack Query",
    id: 6,
  },
  {
    name: "Zod",
    id: 8,
  },
  {
    name: "Emotion",
    id: 10,
  },
];

export const TOOLS_BACK: Tool[] = [
  {
    name: "Express",
    id: 11,
  },
  {
    name: "Node js",
    id: 12,
  },
  {
    name: "Postgres",
    id: 13,
  },
];

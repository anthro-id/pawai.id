import { createContext } from "react";

export const ToggleHeaderContext = createContext<boolean>(false);

export interface HeaderItemProp {
  name: string;
  url: string;
  imageUrl: string;
};

const items: Array<HeaderItemProp> = [
  {
    name: "Code of Conduct",
    url: "https://link.anthro.id/3QtdDQ",
    imageUrl: "https://canine.cdn.anthro.id/internal/03-09-26/46af3aa9-3db2-4683-ab48-b88ddadbe280"
  },
  {
    name: "Event Countdown",
    url: "/countdown",
    imageUrl: "https://canine.cdn.anthro.id/internal/03-09-26/07eb14dc-c98e-44d5-9422-c170430c8107"
  }
];

export default items;
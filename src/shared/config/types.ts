import { IconType } from "react-icons";

// Define interface for icons
export interface IconsTypes {
  [key: string]: IconType;
}

// define interface for String object
export interface StringObjectTypes {
  [key: string]: string;
}

// define interface for Nav data
export interface NavDataTypes {
  name: string;
  path: string;
}
// define interface for social links data
export interface socialLinksTypes {
  src: string;
  path: string;
}

// define interface for project data
export interface ProjectTypes {
  name: string;
  path: string;
}

// define type for skills
export type SkillsType = string[];

// define type for Service List
export type ServiceListType = string[];

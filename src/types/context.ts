import type { Dispatch, SetStateAction } from "react";
import type { Project } from "./project";

export interface AppContextValue {
  showIndicator: boolean;
  setShowIndicator: Dispatch<SetStateAction<boolean>>;
  selectedNav: string;
  setSelectedNav: Dispatch<SetStateAction<string>>;
  title: string;
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
  isMobileNavOpen: boolean;
  toggleDarkMode: () => void;
  handleOpenMenu: () => void;
  closeNavBar: (item: string) => void;
}

export interface ProjectsContextValue {
  projectsCategory: string[];
  selectItem: string;
  setSelectItem: Dispatch<SetStateAction<string>>;
  showList: boolean;
  setShowList: Dispatch<SetStateAction<boolean>>;
  handleSelectProject: (project: string) => void;
  projectsList: Project[];
  isLoading: boolean;
}

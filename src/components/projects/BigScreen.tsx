"use client";

import { useProjects } from "../../contexts/ProjectsContext";
import List from "../../ui/List";

import { FilterItem } from "./FilterItem";

export function BigScreen() {
  const { projectsCategory } = useProjects();

  return (
    <List
      item="filter"
      data={projectsCategory}
      renderItem={(project) => <FilterItem key={project} project={project} />}
    />
  );
}

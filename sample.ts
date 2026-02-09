interface Project {
  name: string;
  version: number;
}

const myProject: Project = {
  name: "COMP-3021 Assignment",
  version: 2.0,
};

console.log(`Project: ${myProject.name}, Version: ${myProject.version}`);

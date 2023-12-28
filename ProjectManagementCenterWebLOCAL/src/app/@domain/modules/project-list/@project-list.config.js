import { ProjectListPage } from './@project-list.page';

const ProjectListConfig = {
 settings: {
  layout: {
   config: {},
  },
 },
 routes: [
  {
   path: 'projectlist',
   element: <ProjectListPage />,
  },
 ],
};

export default ProjectListConfig;
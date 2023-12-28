import { DrillWellPage } from './@drill-well.page';

const DrillWellConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'drillwell',
      element: <DrillWellPage />,
    },
  ],
};

export default DrillWellConfig;


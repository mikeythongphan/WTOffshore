import { useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import FusePageCarded from 'src/app/@core/@fuse/FusePageCarded.FullWidth';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import DrillWellHeader from './drill-well.header';
import { DrillWellTable } from './drill-well.table';
import { DomainContext } from 'src/app/@domain/contexts/domain.context';
import { ModuleContext, initialModuleData, moduleDataContext } from 'src/app/@domain/contexts/module.context';
import { isUoN } from 'src/app/@core/common';

export const DrillWellPage = () => {

  const frmModel = useForm({ mode: 'onChange', defaultValues: {} });
  initialModuleData.loadFormModel(frmModel);

  const [store, setStore] = useState(initialModuleData);
  const [gvItems, setGvItems] = useState([]);

  /**
   * 
   */
  const loadData = () => {

    spinner.show(); 
    api.drillWellApi.getAll().then(result => {

      if (isUoN(result)) return;

      setGvItems(result);
      moduleDataContext.moduleGvData(result);
      
    }).finally(() => spinner.hide());

  }

  /**
   * 
   */
  const contextObj = useMemo(() => {

    moduleDataContext.bootstrap(store, setStore);
    moduleDataContext.loadModelDataFunc = loadData;

    return moduleDataContext

  }, [store]);

  const { api, spinner } = useContext(DomainContext);
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  /**
   * 
   */
  useEffect(() => {
    loadData();
    return () => {};
  }, [])

  /**
   * 
   */
  return <ModuleContext.Provider value={contextObj}>
    <FusePageCarded
      header={<DrillWellHeader gvItems={gvItems} />}
      content={<DrillWellTable gvItems={gvItems} setGvItems={setGvItems} />}
      scroll={isMobile ? 'normal' : 'content'
      }
    />
  </ModuleContext.Provider>

}


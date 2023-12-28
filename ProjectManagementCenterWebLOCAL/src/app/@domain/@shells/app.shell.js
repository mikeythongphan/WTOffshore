import { useMemo, useState } from "react";
import { DomainContext } from "src/app/@domain/contexts/domain.context";
import { SpinnerOverlay } from "src/app/@core/forms/components/spinner-overlay";
import { initiaDomainlData } from "src/app/@domain/contexts/domain.context";
import { doaminDataContext } from "src/app/@domain/contexts/domain.context";
import { ErrorBoundary } from "src/app/@core/forms/components/error-boundary";
import { ErrorOverlay } from "src/app/@core/forms/components/error-overlay";

export const AppShell = props => {

  const [store, setStore] = useState(initiaDomainlData);
  const contextObj = useMemo(() => { 
    doaminDataContext.bootstrap(store, setStore);
    return doaminDataContext
  }, [store]);

  return <DomainContext.Provider value={contextObj}>
    <SpinnerOverlay />
    <ErrorOverlay />
    <ErrorBoundary>
      {props.children}
    </ErrorBoundary>
  </DomainContext.Provider>
};

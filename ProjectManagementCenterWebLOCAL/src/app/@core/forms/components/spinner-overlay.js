import { useContext } from "react";
import FuseLoading from '@fuse/core/FuseLoading/FuseLoading';
import { DomainContext } from "src/app/@domain/contexts/domain.context";

export const SpinnerOverlay = props => {

  const {spinner} = useContext(DomainContext)

  return <>
    {
      spinner.visible() &&
      <div className="flex items-center justify-center h-full"
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: '#29292978', zIndex: 9000 }}>
        <div className="flex items-center justify-center h-full"
          style={{ backgroundColor: '#bfbfbf', height: 100, borderRadius: 8 }}>
          <FuseLoading />
        </div>
      </div>

    }
  </>

}
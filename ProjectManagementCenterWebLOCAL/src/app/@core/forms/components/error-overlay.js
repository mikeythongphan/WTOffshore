import { useContext } from "react";
import { Button } from "@mui/base";
import { Typography } from "@mui/material";
import { DomainContext } from "src/app/@domain/contexts/domain.context";

export const ErrorOverlay = props => {

  const { errorOverlay } = useContext(DomainContext)
  const { hasError, message, hide } = errorOverlay

  /**
   * 
   */
  const onClose = () => {
    hide();
  }

  return <>
    {
      hasError() &&
      <div className="flex items-center justify-center h-full"
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: '#29292978', zIndex: 9000 }}>
        <div style={{ backgroundColor: '#fff', borderRadius: 8, minWidth: 400, minHeight: 100 }}>
          <div style={{ padding: '20px 20px 10px 20px' }}>
            <Typography className="text-16 md:text-18 font-extrabold tracking-tight" style={{color: '#f00'}}>
              Error
            </Typography>
          </div>
          <hr />
          <div style={{ padding: 20 }}>
            {message()}
          </div>
          <hr />
          <div style={{ textAlign: 'right', padding: 20 }}>
            <Button variant="contained" color="secondary" onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    }
  </>
}
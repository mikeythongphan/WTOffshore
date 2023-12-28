import React from "react";
import { Button } from "@mui/base";
import { Typography } from "@mui/material";

export class ErrorBoundary extends React.Component {

  /**
   * 
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      message: ''
    };
  }

  /**
   * 
   * @param {*} error 
   * @returns 
   */
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      message: error.message
    };
  }

  /**
   * 
   * @param {*} error 
   * @param {*} errorInfo 
   */
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({ hasError: true })
    this.setState({ message: error.message })
  }

  /**
   * 
   */
  onClose = () => {
  }

  render = () => this.state.hasError ?
    <>
      <div className="flex items-center justify-center h-full"
        style={{ display: 'flex', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: '#29292978', zIndex: 9000 }}>
        <div style={{ backgroundColor: '#fff', borderRadius: 8, minWidth: 400, minHeight: 100, margin: 'auto' }}>
          <div style={{ padding: '20px 20px 10px 20px' }}>
            <Typography className="text-16 md:text-18 font-extrabold tracking-tight" style={{ color: '#f00' }}>
              Error
            </Typography>
          </div>
          <hr />
          <div style={{ padding: 20 }}>
            {this.state.message}
          </div>
          <hr />
          <div style={{ textAlign: 'right', padding: 20 }}>
            <Button variant="contained" color="secondary" onClick={this.onClose}>Close</Button>
          </div>
        </div>
      </div>
    </>
    : this.props.children;

}
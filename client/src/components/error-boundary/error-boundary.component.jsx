import React from "react";
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    };
  }
  static getDerivedStateFromError(error) {
    // Process the error
    return { hasErrored: true };
  }

  componentDidMount(error, info) {
    console.log(error);
  }

  render() {
    return this.state.hasErrored ? (
      <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/FOeYt4E.png' />
          <ErrorImageText>Sorry, this page appears to be broken</ErrorImageText>
      </ErrorImageOverlay>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;

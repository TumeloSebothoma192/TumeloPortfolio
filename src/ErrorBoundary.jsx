import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }

  componentDidCatch(error, info) {
    this.setState({ error, info });
    // keep console logging for diagnostics
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught error:", error, info);
  }

  render() {
    const { error, info } = this.state;
    if (error) {
      return (
        <div
          style={{ padding: 24, fontFamily: "system-ui, Arial", color: "#222" }}
        >
          <h1>Something went wrong</h1>
          <p>{String(error && error.message)}</p>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {info && info.componentStack}
          </details>
          <p>Open the browser console for full error details.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

import { Component, type ReactNode } from "react";

/* Catches render/runtime errors in its subtree (e.g. a WebGL context
 * failure from the 3D robot on devices without GPU/WebGL) and shows a
 * fallback instead of crashing the whole page. */
export default class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    // swallow — the fallback UI is enough for a decorative element
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

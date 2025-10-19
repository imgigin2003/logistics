import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
          خطایی در نمایش نقشه رخ داد. لطفاً صفحه را رفرش کنید.
        </div>
      );
    }
    return this.props.children;
  }
}

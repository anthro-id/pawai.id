declare global {
  interface HTMLElementEventMap {
    'post-loading': CustomEvent<{}>;
  };
}

export {};
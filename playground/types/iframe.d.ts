declare namespace JSX {
  interface IFrameLazy
    extends React.DetailedHTMLProps<
      React.IframeHTMLAttributes<HTMLIFrameElement>,
      HTMLIFrameElement
    > {
    loading: "eager" | "lazy" | "auto";
  }
  interface IntrinsicElements {
    iframe: IFrameLazy;
  }
}

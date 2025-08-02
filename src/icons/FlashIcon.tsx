const FlashIcon = (props: any) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#000000" // Default color
    {...props} // Allows passing additional SVG props like className, style, etc.
  >
    <path
      d="M13 10V3L5 14H11V21L19 10H13Z"
      stroke="currentColor" // Use currentColor to inherit color from CSS/props
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FlashIcon;

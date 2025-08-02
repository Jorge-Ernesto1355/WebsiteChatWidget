const GmailIcon = (props: any) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="#6B6B6B" // Color por defecto (negro)
    {...props} // Permite pasar props adicionales como className, style, etc.
  >
    <path
      d="M1.99672 12.8535L10.242 18.151C11.2335 18.7836 12.7665 18.7836 13.758 18.151L22.0033 12.8535C22.6416 12.4468 23 11.7589 23 11V7C23 5.89543 22.1046 5 21 5H3C1.89543 5 1 5.89543 1 7V11C1 11.7589 1.35843 12.4468 1.99672 12.8535Z"
      stroke="currentColor" // Usa 'currentColor' para heredar el color de CSS o la prop 'color'
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 7L12 14L1 7"
      stroke="currentColor" // Usa 'currentColor' para heredar el color
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default GmailIcon;

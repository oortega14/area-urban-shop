interface Props {
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
}

export const TicketIcon = ({ className, onClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-ticket ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 5l0 2" />
      <path d="M15 11l0 2" />
      <path d="M15 17l0 2" />
      <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
    </svg>
  );
};

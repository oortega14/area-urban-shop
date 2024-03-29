interface Props {
  className?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
}

export const ShirtIcon = ({ className, onClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={ `icon icon-tabler icon-tabler-shirt ${className}`}
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
      <path d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0" />
    </svg>
  );
};

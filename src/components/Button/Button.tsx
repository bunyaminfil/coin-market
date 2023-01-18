type ButtonProps = {
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
  label: string;
  handleClick?: () => void;
};

export const Button = ({
  size = "md",
  backgroundColor,
  label,
  handleClick,
  ...props
}: ButtonProps) => {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: "50px",
  };
  return (
    <button type="button" style={style} onClick={handleClick} {...props}>
      {label}
    </button>
  );
};

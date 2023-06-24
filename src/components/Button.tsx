interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button className="btn btn-info" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

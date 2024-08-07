import s from './Button.module.css';

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={onClick} className={s.button}>
      {children}
    </button>
  );
};

export default Button;

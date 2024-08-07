import Image from 'next/image';
import Button from './Button';
import s from './ControlBar.module.css';

interface Props {
  onRotateLeft: React.MouseEventHandler;
  onRotateRight: React.MouseEventHandler;
  onMoveForwards: React.MouseEventHandler;
}

const ICON_SIZE = 32;

const ControlBar = ({ onRotateLeft, onRotateRight, onMoveForwards }: Props) => {
  return (
    <div className={s.controls}>
      <Button onClick={onRotateLeft} aria-label="Rotate left">
        <Image
          src="./icons/rotate-ccw.svg"
          alt="Rotate left"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </Button>
      <Button onClick={onMoveForwards} aria-label="Move forwards">
        <Image
          src="./icons/arrow-up.svg"
          alt="Forwards"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </Button>
      <Button onClick={onRotateRight} aria-label="Rotate right">
        <Image
          src="./icons/rotate-cw.svg"
          alt="Rotate right"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </Button>
    </div>
  );
};

export default ControlBar;

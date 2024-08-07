import Image from 'next/image';
import s from './Robot.module.css';

interface Props {
  rotate: number;
  style: React.CSSProperties;
}

const Robot = ({ rotate, style }: Props) => {
  return (
    <div className={s.robot} style={style}>
      <div className={s.imageWrap}>
        <Image
          src="./robot.svg"
          alt="Robot"
          fill
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div
        className={s.direction}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <div className={s.arrowWrap}>
          <Image src="./icons/chevron-up.svg" fill priority alt="" />
        </div>
      </div>
    </div>
  );
};

export default Robot;

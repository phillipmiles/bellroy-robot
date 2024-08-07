import Cell from './Cell';
import s from './Grid.module.css';

interface Props {
  rowNum: number;
  colNum: number;
  children: React.ReactNode;
}

const Grid = ({ rowNum, colNum, children }: Props) => {
  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < rowNum * colNum; i++) {
      cells.push(<Cell key={i} />);
    }

    return cells;
  };

  return (
    <div
      className={s.grid}
      style={{
        gridTemplateColumns: `repeat(${colNum}, calc(100% / ${colNum}) [col])`,
        gridTemplateRows: `repeat(${rowNum}, calc(100% / ${rowNum}) [row])`,
      }}
    >
      {renderCells()}
      {children}
    </div>
  );
};

export default Grid;

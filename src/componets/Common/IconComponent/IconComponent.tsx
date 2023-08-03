import { IconTypes } from '@src/types';
import icons from 'public/icons';

type IconComponentProps = {
  name: keyof IconTypes;
  width?: number;
  height?: number;
  fill?: string;
  isMirror?: boolean;
};

const IconComponent = ({
  name,
  width = 24,
  height = 24,
  isMirror = false,
  fill
}: IconComponentProps) => {
  const Icon = icons[name];
  return (
    <Icon
      style={{ transform: isMirror ? 'rotate(180deg)' : 'rotate(0)' }}
      fill={fill}
      width={width}
      height={height}
    />
  );
};

export default IconComponent;

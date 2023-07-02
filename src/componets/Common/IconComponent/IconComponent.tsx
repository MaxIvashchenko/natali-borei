import { ElementType } from 'react';

import arrow from 'public/icons/arrow.svg';
import close from 'public/icons/close.svg';
import cube from 'public/icons/cube.svg';
import email from 'public/icons/email.svg';
import error from 'public/icons/error.svg';
import facebook from 'public/icons/facebook.svg';
import file from 'public/icons/file.svg';
import finance from 'public/icons/finance.svg';
import group from 'public/icons/group.svg';
import home from 'public/icons/home.svg';
import image from 'public/icons/image.svg';
import instagram from 'public/icons/instagram.svg';
import lesson from 'public/icons/lesson.svg';
import loader from 'public/icons/loader.svg';
import loop from 'public/icons/loop.svg';
import man from 'public/icons/man.svg';
import marketing from 'public/icons/marketing.svg';
import megaphone from 'public/icons/megaphone.svg';
import menu from 'public/icons/menu.svg';
import notVisible from 'public/icons/notVisible.svg';
import paper from 'public/icons/paper.svg';
import planning from 'public/icons/planning.svg';
import repeat from 'public/icons/repeat.svg';
import restaurant from 'public/icons/restaurant.svg';
import right from 'public/icons/right.svg';
import salon from 'public/icons/salon.svg';
import scaleup from 'public/icons/scaleup.svg';
import settings from 'public/icons/settings.svg';
import shuttle from 'public/icons/shuttle.svg';
import stats from 'public/icons/stats.svg';
import success from 'public/icons/success.svg';
import suitcase from 'public/icons/suitcase.svg';
import telegram from 'public/icons/telegram.svg';
import telephone from 'public/icons/telephone.svg';
import text from 'public/icons/text.svg';
import triangle from 'public/icons/triangle.svg';
import user from 'public/icons/user.svg';
import visible from 'public/icons/visible.svg';
import youtube from 'public/icons/youtube.svg';
import logo from 'public/logo.svg';

type IconTypes = {
  logo: ElementType;
  cube: ElementType;
  stats: ElementType;
  planning: ElementType;
  scaleup: ElementType;
  marketing: ElementType;
  arrow: ElementType;
  telegram: ElementType;
  facebook: ElementType;
  telephone: ElementType;
  close: ElementType;
  visible: ElementType;
  notVisible: ElementType;
  salon: ElementType;
  restaurant: ElementType;
  image: ElementType;
  triangle: ElementType;
  menu: ElementType;
  man: ElementType;
  loop: ElementType;
  shuttle: ElementType;
  suitcase: ElementType;
  youtube: ElementType;
  instagram: ElementType;
  email: ElementType;
  user: ElementType;
  loader: ElementType;
  repeat: ElementType;
  group: ElementType;
  settings: ElementType;
  right: ElementType;
  finance: ElementType;
  paper: ElementType;
  megaphone: ElementType;
  text: ElementType;
  lesson: ElementType;
  file: ElementType;
  home: ElementType;
  error: ElementType;
  success: ElementType;
};

const iconTypes: IconTypes = {
  logo,
  cube,
  stats,
  planning,
  scaleup,
  marketing,
  arrow,
  telegram,
  facebook,
  telephone,
  close,
  visible,
  notVisible,
  salon,
  restaurant,
  image,
  triangle,
  menu,
  man,
  loop,
  shuttle,
  suitcase,
  youtube,
  instagram,
  email,
  user,
  loader,
  repeat,
  group,
  settings,
  right,
  finance,
  paper,
  megaphone,
  text,
  lesson,
  file,
  home,
  error,
  success
};

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
  const Icon = iconTypes[name];
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

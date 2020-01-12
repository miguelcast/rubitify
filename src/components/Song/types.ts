import { THEME_DARK, THEME_LIGHT } from '../../config/types';

type Theme = THEME_LIGHT | THEME_DARK;

export interface Props {
  title: string;
  duration: number | string;
  url: string;
  onClick: () => void;
  hasPreview: boolean;
  image?: string;
  isActive?: boolean;
  isFixed?: boolean;
  theme?: Theme;
}

export interface ThemeProps {
  theme: Theme;
}

export interface WrapperProps {
  readonly isActive: boolean;
  readonly isFixed: boolean;
  readonly theme: Theme;
  readonly hasPreview: boolean;
}

import classnames from 'classnames';
import { ReactNode } from 'react';
const ColorTypes: Record<string, object> = {
  blue: {
    background: 'var(--blue-5)',
    color: 'var(--blue)',
  },
  green: {
    background: 'var(--green-5)',
    color: 'var(--green)',
  },
  purple: {
    background: 'var(--purple-5)',
    color: 'var(--purple)',
  },
  cyan: {
    background: 'var(--cyan-5)',
    color: 'var(--cyan)',
  },
  red: {
    background: 'var(--red-5)',
    color: 'var(--red)',
  },
  yellow: {
    background: 'var(--yellow-5)',
    color: 'var(--yellow)',
  },
  default: {
    background: 'var(--gray-5)',
    color: 'var(--gray)',
  },
};

export enum TagSize {
  default,
  lg,
}

export const Tag = ({
  children,
  color = 'default',
  style,
  className,
  size = TagSize.default,
}: {
  children: ReactNode;
  color?: string;
  style?: object;
  className?: string;
  size?: TagSize;
}) => {
  return (
    <span
      style={{
        ...(ColorTypes[color] || ColorTypes['default']),
        ...style,
      }}
      className={classnames(
        size === TagSize.default && 'oac-text-12 oac-px-[6px] oac-py-[2px] ',
        size === TagSize.lg && 'oac-text-16 oac-px-[8px] oac-py-[4px] ',
        'oac-rounded oac-inline-block',
        className
      )}
    >
      {children}
    </span>
  );
};

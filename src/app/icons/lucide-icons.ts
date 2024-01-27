export const icons = {
  circleUser: {
    paths: ['M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662'],
    circles: [
      { cx: 12, cy: 12, r: 10 },
      { cx: 12, cy: 10, r: 3 },
    ],
  },
  eye: {
    paths: ['M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'],
    circles: [{ cx: 12, cy: 12, r: 3 }],
  },
  eyeOff: {
    paths: [
      'M9.88 9.88a3 3 0 1 0 4.24 4.24',
      'M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68',
      'M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61',
    ],
    lines: [{ x1: 2, x2: 22, y1: 2, y2: 22 }],
  },
};

export type Icons = keyof typeof icons;
export type IconsProps = {
  paths?: string[];
  circles?: {
    cx: number;
    cy: number;
    r: number;
  }[];
  lines?: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  }[];
};

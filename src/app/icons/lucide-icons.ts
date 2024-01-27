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
  bot: {
    paths: ['M12 8V4H8', 'M2 14h2', 'M20 14h2', 'M15 13v2', 'M9 13v2'],
    rects: [{ width: 16, height: 12, x: 4, y: 8, rx: 2 }],
  },
  briefcase: {
    rects: [{ width: 20, height: 14, x: 2, y: 7, rx: 2, ry: 2 }],
    paths: ['M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'],
  },
  plus: {
    paths: ['M5 12h14', 'M12 5v14'],
  },
};

export type Icons = keyof typeof icons;

export type IconProps = {
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
  rects?: {
    width: number;
    height: number;
    x: number;
    y: number;
    rx?: number;
    ry?: number;
  }[];
  polygons?: string[];
  polylines?: string[];
};

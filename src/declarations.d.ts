declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';

  const Component: React.FC<React.SVGProps<SVGSVGElement>>;

  export default Component;
}

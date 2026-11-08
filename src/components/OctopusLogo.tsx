import React from 'react';
import BrandLogo, { BrandLogoProps } from './BrandLogo';

export type OctopusLogoProps = BrandLogoProps;

export const OctopusLogo: React.FC<OctopusLogoProps> = (props) => {
  return <BrandLogo {...props} />;
};

export default OctopusLogo;

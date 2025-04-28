import { useEnhancedNode } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC } from 'react';

import { IPasswordMeterProps } from './PasswordMeter.config';
import PasswordStrengthBar from 'react-password-strength-bar';

const PasswordMeter: FC<IPasswordMeterProps> = ({
  minLength,
  style,
  className,
  classNames = [],
}) => {
  const {
    connectors: { connect },
  } = useEnhancedNode();

  return (
    <div ref={connect} style={style} className={cn(className, classNames)}>
      <PasswordStrengthBar password="password" minLength={minLength} />
    </div>
  );
};

export default PasswordMeter;

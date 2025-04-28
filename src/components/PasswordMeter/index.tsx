import config, { IPasswordMeterProps } from './PasswordMeter.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './PasswordMeter.build';
import Render from './PasswordMeter.render';

const PasswordMeter: T4DComponent<IPasswordMeterProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

PasswordMeter.craft = config.craft;
PasswordMeter.info = config.info;
PasswordMeter.defaultProps = config.defaultProps;

export default PasswordMeter;

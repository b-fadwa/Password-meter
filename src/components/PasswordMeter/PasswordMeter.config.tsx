import { EComponentKind, T4DComponentConfig } from '@ws-ui/webform-editor';
import { Settings } from '@ws-ui/webform-editor';
import { MdOutlinePassword } from "react-icons/md";

import PasswordMeterSettings, { BasicSettings } from './PasswordMeter.settings';

export default {
  craft: {
    displayName: 'PasswordMeter',
    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(PasswordMeterSettings, BasicSettings),
    },
  },
  info: {
    settings: PasswordMeterSettings,
    displayName: 'PasswordMeter',
    exposed: true,
    icon: MdOutlinePassword,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      accept: ['string'],
    },
  },
  defaultProps: {
    minLength:4,
  },
} as T4DComponentConfig<IPasswordMeterProps>;

export interface IPasswordMeterProps extends webforms.ComponentProps {
  minLength: number;
}

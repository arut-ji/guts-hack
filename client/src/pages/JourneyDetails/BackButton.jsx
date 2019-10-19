import React from 'react'

import ArrowLeftIconSm from 'bpk-component-icon/sm/long-arrow-left';
import { withAlignment } from 'bpk-component-icon';
import { lineHeightBase, iconSizeSm, colors } from 'bpk-tokens/tokens/base.es6';
import BpkText from 'bpk-component-text';

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

const AlignedArrow = withAlignment(
  ArrowLeftIconSm, lineHeightBase, iconSizeSm
);



export default () => (
  <div className={getClassName('back-button-container')}>
    <i className="fas fa-chevron-left"/>
    <BpkText textStyle="base">
      <AlignedArrow fill={colors.colorSkyGrayTint01} />
    </BpkText>
  </div>
)

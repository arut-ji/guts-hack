import React from 'react';
import { BpkGridContainer, BpkGridRow, BpkGridColumn } from 'bpk-component-grid';
import WasteData from './wasteData';

import { cssModules } from 'bpk-react-utils';
import STYLES from './style.scss';
const getClassName = cssModules(STYLES);

export default () => (
  <BpkGridContainer fullWidth>
    <BpkGridRow>
      {
        WasteData.map((item, index) => (
          <BpkGridColumn className={getClassName('no-gutters')} width={4} key={index} padded={false}>
            <div className={getClassName('waste-highlight')}>
              You can reduce
              {item.wasteReducedInKiloInAWeek} kilos
              of waste
            </div>
            <div className={getClassName('waste-content')}>
              while spending a week in <strong>{item.country}</strong>
            </div>
          </BpkGridColumn>
    ))
      }
    </BpkGridRow>
  </BpkGridContainer>
);
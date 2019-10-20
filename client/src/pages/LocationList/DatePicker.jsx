import React, {Component, useState} from 'react';
import BpkDatepicker from 'bpk-component-datepicker';
import format from 'date-fns/format';

const formatDate = (date) => format(date, 'DD/MM/YYYY');
const formatDateFull = (date) => format(date, 'dddd, Do MMMM YYYY');
const formatMonth = (date) => format(date, 'MMMM YYYY');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true
  }
  // ...
];

export default ({date = Date.now(), onSelected}) => {

  return (
    <BpkDatepicker
      id="datepicker"
      daysOfWeek={daysOfWeek}
      weekStartsOn={1}
      changeMonthLabel="Change month"
      closeButtonText="Close"
      title="Departure date"
      getApplicationElement={() => document.getElementById('pagewrap')}
      formatDate={formatDate}
      formatMonth={formatMonth}
      formatDateFull={formatDateFull}
      onDateSelect={(newDate) => onSelected(newDate)}
      date={date}
    />
  );
}

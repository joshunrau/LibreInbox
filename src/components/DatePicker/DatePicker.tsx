import React, { useReducer, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { cn } from '@/utils/cn';

import { ArrowToggle } from '../ArrowToggle';
import { Card } from '../Card';
import { CALENDAR_ANIMATION_DURATION, Calendar } from './Calendar';
import { YearSelector } from './YearSelector';

const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
] as const;

type IncrementAction = {
  type: 'increment';
};

type DecrementAction = {
  type: 'decrement';
};

type SetYearAction = {
  type: 'set-year';
  value: number;
};

type ReducerAction = DecrementAction | IncrementAction | SetYearAction;

const reducer = (previousDate: Date, action: ReducerAction) => {
  const newDate = new Date(previousDate.valueOf());
  switch (action.type) {
    case 'increment':
      newDate.setMonth(newDate.getMonth() + 1);
      break;
    case 'decrement':
      newDate.setMonth(newDate.getMonth() - 1);
      break;
    case 'set-year':
      newDate.setFullYear(action.value);
  }
  return newDate;
};

export type DatePickerProps = {
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onSelection: (value: Date) => void;
};

export const DatePicker = ({ onSelection, ...props }: DatePickerProps) => {
  const [date, dispatch] = useReducer(reducer, new Date());
  const [showYearSelector, setShowYearSelector] = useState(false);
  const { t } = useTranslation();

  // this is to prevent changing month before prev calendar is unmounted
  // the duration is doubled because presumably it is to mount old and mount new
  const [canSetMonth, setCanSetMonth] = useState(true);

  const monthName = t(`months.${MONTHS[date.getMonth()]}`);

  const handleYearSelection = (date: Date) => {
    dispatch({ type: 'set-year', value: date.getFullYear() });
    setShowYearSelector(false);
  };

  return (
    <Card className="w-fit p-3" {...props}>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-semibold">{`${monthName} ${date.getFullYear()}`}</span>
          <ArrowToggle
            className="mx-1 flex items-center justify-center rounded-full p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700"
            isToggled={showYearSelector}
            position="up"
            rotation={180}
            tabIndex={-1}
            onClick={() => {
              setShowYearSelector(!showYearSelector);
            }}
          />
        </div>
        <div className={cn('flex', { hidden: showYearSelector })}>
          <ArrowToggle
            className="mx-1 flex items-center justify-center rounded-full p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700"
            position="left"
            tabIndex={-1}
            onClick={() => {
              if (canSetMonth) {
                setCanSetMonth(false);
                dispatch({ type: 'decrement' });
                setTimeout(() => {
                  setCanSetMonth(true);
                }, CALENDAR_ANIMATION_DURATION * 2000);
              }
            }}
          />
          <ArrowToggle
            className="ml-1 flex items-center justify-center rounded-full p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700"
            position="right"
            tabIndex={-1}
            onClick={() => {
              if (canSetMonth) {
                setCanSetMonth(false);
                dispatch({ type: 'increment' });
                setTimeout(() => {
                  setCanSetMonth(true);
                }, CALENDAR_ANIMATION_DURATION * 2000);
              }
            }}
          />
        </div>
      </div>
      <div>
        <AnimatePresence initial={false} mode="wait">
          {showYearSelector ? (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              initial={{ opacity: 0, y: 10 }}
              key={0}
              transition={{ duration: 0.2 }}
            >
              <YearSelector selected={date} onSelection={handleYearSelection} />
            </motion.div>
          ) : (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              initial={{ opacity: 0, y: -10 }}
              key={1}
              transition={{ duration: 0.2 }}
            >
              <Calendar month={date.getMonth()} year={date.getFullYear()} onSelection={onSelection} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
};

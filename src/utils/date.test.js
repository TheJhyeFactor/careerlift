import test from 'node:test';
import assert from 'node:assert/strict';
import { formatResumeDate, toDateInputValue } from './date.js';

test('preserves an exact ISO date for a date input', () => {
  assert.equal(toDateInputValue('2026-01-29'), '2026-01-29');
});

test('makes legacy month-only values editable without discarding them', () => {
  assert.equal(toDateInputValue('2021-03'), '2021-03-01');
});

test('formats exact dates with day precision', () => {
  assert.equal(formatResumeDate('2026-01-29'), 'Jan 29, 2026');
});

test('keeps legacy month-only dates at their original precision', () => {
  assert.equal(formatResumeDate('2021-03'), 'Mar 2021');
});

test('rejects impossible or unsupported date values', () => {
  assert.equal(formatResumeDate('2026-02-29'), '');
  assert.equal(formatResumeDate('not-a-date'), '');
  assert.equal(toDateInputValue('2026-02-29'), '');
  assert.equal(toDateInputValue('not-a-date'), '');
});

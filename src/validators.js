import { NAV_ITEMS, HOURS_IN_DAY, MIDNIGHT_HOUR, BUTTON_TYPES } from './constans'

export function isPageValid(currentPage) {
  return NAV_ITEMS.some((navItem) => navItem.page === currentPage)
}

export function isTimelineItemValid({ hour }) {
  return isHourValid(hour)
}

export function isHourValid(val) {
  return isNumber(val) && isBetween(val, MIDNIGHT_HOUR, HOURS_IN_DAY - 1)
}

function isSelectOptionValid({ value, label }) {
  return isNumber(value) || (isNotEmptyString(value) && isNotEmptyString(label))
}

export function validateSelectOptions(options) {
  return options.every(isSelectOptionValid)
}

export function validateTimelineItems(items) {
  return items.every(isTimelineItemValid)
}

export function isUndefinedOrNull(val) {
  return isNull(val) || isUndefined(val)
}

export function isNumberOrNull(val) {
  return isNumber(val) || isNull(val)
}

export function isUndefined(val) {
  return val === undefined
}

export function isActivityValid({ id, name, secondsToComplete }) {
  if (isNull(id)) {
    return true
  }
  return isNotEmptyString(id) && isNotEmptyString(name) && isNumber(secondsToComplete)
}

export function validateActivities(activities) {
  return activities.every(isActivityValid)
}

export function isButtonTypeValid(type) {
  return BUTTON_TYPES.includes(type)
}

export function isNumber(val) {
  return typeof val === 'number'
}

export function isNull(val) {
  return val === null
}

function isString(val) {
  return typeof val === 'string'
}

function isBetween(val, start, end) {
  return val >= start && val <= end
}

export function isNotEmptyString(str) {
  return isString(str) && str.length > 0
}

export function isSelectValueValid(val) {
  return isNotEmptyString(val) || isNumberOrNull(val)
}

export function isNavItemValid(navItem) {
  return NAV_ITEMS.includes(navItem)
}

import { alertConstants } from "../constants";

export const alertActions = {
  success,
  error,
  clear
};

//Alert when user is registered successfully
function success(message) {
  return { type: alertConstants.SUCCESS, message };
}

// Alert when user fails on login or register
function error(message) {
  return { type: alertConstants.ERROR, message };
}

// Clear Alerts
function clear() {
  return { type: alertConstants.CLEAR };
}

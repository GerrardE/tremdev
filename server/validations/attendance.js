import validator from "validator";
import isEmpty from "../middlewares/isEmpty";

const validAttendance = (data) => {
  const errors = {};
  data.men = !isEmpty(data.men) ? data.men : "";
  data.women = !isEmpty(data.women) ? data.women : "";
  data.children = !isEmpty(data.children) ? data.children : "";
  data.eventid = !isEmpty(data.eventid) ? data.eventid : "";
  data.preacherid = !isEmpty(data.preacherid) ? data.preacherid : "";
  data.branchid = !isEmpty(data.branchid) ? data.branchid : "";
  data.zoneid = !isEmpty(data.zoneid) ? data.zoneid : "";
  data.date = !isEmpty(data.date) ? data.date : "";

  // children validations
  if (isEmpty(data.children)) {
    errors.children = "children field is required";
  }

  // women validations
  if (isEmpty(data.women)) {
    errors.women = "women field is required";
  }

  // men validations
  if (isEmpty(data.men)) {
    errors.men = "men field is required";
  }

  // event validations
  if (isEmpty(data.eventid)) {
    errors.event = "event field is required";
  }

  // preacher validations
  if (isEmpty(data.preacherid)) {
    errors.preacher = "preacher field is required";
  }

  // branch validations
  if (isEmpty(data.branchid)) {
    errors.branch = "branch field is required";
  }

  // zone validations
  if (isEmpty(data.zoneid)) {
    errors.zone = "zone field is required";
  }

  // date validations
  if (isEmpty(data.date)) {
    errors.date = "date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validAttendance;

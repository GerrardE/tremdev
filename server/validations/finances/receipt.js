import validator from "validator";
import isEmpty from "../../middlewares/isEmpty";

const validReceipt = (data) => {
  const errors = {};

  data.financeid = !isEmpty(data.financeid) ? data.financeid : "";
  data.month = !isEmpty(data.month) ? data.month : "";
  data.offerings = !isEmpty(data.offerings) ? data.offerings : "";
  data.tithes = !isEmpty(data.tithes) ? data.tithes : "";
  data.seedfaith = !isEmpty(data.seedfaith) ? data.seedfaith : "";
  data.thanksgiving = !isEmpty(data.thanksgiving) ? data.thanksgiving : "";
  data.annualthanksgiving = !isEmpty(data.annualthanksgiving) ? data.annualthanksgiving : "";
  data.buildingprojects = !isEmpty(data.buildingprojects) ? data.buildingprojects : "";
  data.otherprojects = !isEmpty(data.otherprojects) ? data.otherprojects : "";
  data.crusadeandmissionary = !isEmpty(data.crusadeandmissionary) ? data.crusadeandmissionary : "";
  data.ministydeposits = !isEmpty(data.ministydeposits) ? data.ministydeposits : "";
  data.assetdisposal = !isEmpty(data.assetdisposal) ? data.assetdisposal : "";
  data.interestincome = !isEmpty(data.interestincome) ? data.interestincome : "";
  data.loanrepaidbydebtors = !isEmpty(data.loanrepaidbydebtors) ? data.loanrepaidbydebtors : "";
  data.loanreceived = !isEmpty(data.loanreceived) ? data.loanreceived : "";
  data.donationreceived = !isEmpty(data.donationreceived) ? data.donationreceived : "";
  data.uploads = !isEmpty(data.uploads) ? data.uploads : "";
  data.notes = !isEmpty(data.notes) ? data.notes : "";

  // month validations
  if (isEmpty(data.month)) {
    errors.month = "month field is required";
  }

  // offerings validations
  if (isEmpty(data.offerings)) {
    errors.offerings = "offerings field is required";
  }

  // tithes validations
  if (isEmpty(data.tithes)) {
    errors.tithes = "tithes field is required";
  }

  // seedfaith validations
  if (isEmpty(data.seedfaith)) {
    errors.seedfaith = "seedfaith field is required";
  }

  // thanksgiving validations
  if (isEmpty(data.thanksgiving)) {
    errors.thanksgiving = "thanksgiving field is required";
  }

  // annualthanksgiving validations
  if (isEmpty(data.annualthanksgiving)) {
    errors.annualthanksgiving = "annualthanksgiving field is required";
  }

  // buildingprojects validations
  if (isEmpty(data.buildingprojects)) {
    errors.buildingprojects = "buildingprojects field is required";
  }

  // otherprojects validations
  if (isEmpty(data.otherprojects)) {
    errors.otherprojects = "otherprojects field is required";
  }

  // crusadeandmissionary validations
  if (isEmpty(data.crusadeandmissionary)) {
    errors.crusadeandmissionary = "crusadeandmissionary field is required";
  }

  // ministrydeposits validations
  if (isEmpty(data.ministrydeposits)) {
    errors.ministrydeposits = "ministrydeposits field is required";
  }

  // assetdisposal validations
  if (isEmpty(data.assetdisposal)) {
    errors.assetdisposal = "assetdisposal field is required";
  }

  // interestincome validations
  if (isEmpty(data.interestincome)) {
    errors.interestincome = "interestincome field is required";
  }

  // loanrepaidbydebtors validations
  if (isEmpty(data.loanrepaidbydebtors)) {
    errors.loanrepaidbydebtors = "loanrepaidbydebtors field is required";
  }

  // loanreceived validations
  if (isEmpty(data.loanreceived)) {
    errors.loanreceived = "loanreceived field is required";
  }

  // donationreceived validations
  if (isEmpty(data.donationreceived)) {
    errors.donationreceived = "donationreceived field is required";
  }

  // uploads validations
  if (isEmpty(data.uploads)) {
    errors.uploads = "please upload all supporting documents e.g receipts";
  }

  // finance validations
  if (isEmpty(data.financeid)) {
    errors.finance = "finance field is required";
  }

  // notes validations
  if (!validator.isLength(data.notes, { min: 5, max: 200 })) {
    errors.notes = "notes must be between 5 and 200 characters";
  }

  if (isEmpty(data.notes)) {
    errors.notes = "notes field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

export default validReceipt;
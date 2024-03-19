import * as Yup from "yup";

const emailValidation = Yup.string().email("Invalid Email").required("Email is mandatory");

const ResetPasswordValidationSchema = Yup.object({
  email: emailValidation,
});

export {
  ResetPasswordValidationSchema,
};

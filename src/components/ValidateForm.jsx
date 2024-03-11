const validateForm = (data) => {
  const errors = {};

  const name_pattern = /^([A-Za-zก-ฮ]+)\s+([A-Za-zก-ฮ]+)$/;
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern =
    /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

  if (data.userName.trim() === "") {
    errors.userName = "Please enter your name.";
  } else if (!name_pattern.test(data.userName)) {
    errors.userName = "Invalid name format.";
  }

  if (data.email.trim() === "") {
    errors.email = "Please enter your email.";
  } else if (!email_pattern.test(data.email)) {
    errors.email = "Invalid email format.";
  }

  if (data.password.trim() === "") {
    errors.password = "Please enter your password.";
  } else if (!password_pattern.test(data.password)) {
    errors.password =
      "Password must be at least 8 characters long and include 1 special character, 1 uppercase letter, and 1 lowercase letter.";
  }

  if (data.confirmPassword.trim() === "") {
    errors.confirmPassword = "Please confirm your password.";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

export default validateForm;

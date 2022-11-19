import * as Yup from 'yup';

const emailRegex = /^[A-Za-z0-9!@#$%^&*().]+@admin\.com$/g;

export const loginSchema = Yup.object().shape({
  email: Yup.string().required('Required !!').matches(emailRegex, 'Please enter a valid admin email !!'),
  password: Yup.string().required('Required !!').length(8, 'Password must be 8 characters at least'),
});

import * as Yup from 'yup'

export const UserValidation = Yup.object({
  image: Yup.mixed()
    .nullable()
    .required('profile picture is required')
    .test('fileSize', 'image size too big', (value) => {
      return !value || (value !== null && value.size <= 2000000)
    })
    .test('fileType', 'image should be jpg or png only', (value) => {
      return (
        !value ||
        (value !== null && ['image/jpg', 'image/png'].includes(value.type))
      )
    }),
  name: Yup.string()
    .required('Name is required')
    .min(15, 'Name must be at least 15 characters'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  phoneNo: Yup.string()
    .required('Phone number is required')
    .matches(/^(\+91[-\s]?)?[0]?(91)?[789]\d{9}$/, 'invalid phone number'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password'),
})

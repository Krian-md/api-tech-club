import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: 'Firstname is required',
    }),
    lastName: string({
      required_error: 'Lastname is required',
    }),
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password too short - should be 6 chars minimum'),
    role: string({
      required_error: 'Role is required',
    }),
    token: string({
      required_error: 'Token is required',
    }),
    passwordConfirmation: string({
      required_error: 'PasswordConfirmation is required',
    }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Password do not match',
    path: ['passwordConfirmation'],
  }),
});

export type createUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  'body.passwordConfirmation'
>;

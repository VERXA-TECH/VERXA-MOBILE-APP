export type PasswordRuleId = 'uppercase' | 'number' | 'minLength';

export type PasswordRule = {
  id: PasswordRuleId;
  label: string;
  test: (password: string) => boolean;
};

export const PASSWORD_RULES: PasswordRule[] = [
  {
    id: 'uppercase',
    label: 'At least 1 uppercase',
    test: (password) => /[A-Z]/.test(password),
  },
  {
    id: 'number',
    label: 'At least 1 number',
    test: (password) => /\d/.test(password),
  },
  {
    id: 'minLength',
    label: 'At least 8 characters',
    test: (password) => password.length >= 8,
  },
];

export type PasswordStrengthLevel = 0 | 1 | 2 | 3;

export type PasswordValidationResult = {
  rules: Record<PasswordRuleId, boolean>;
  metCount: number;
  strength: PasswordStrengthLevel;
  isValid: boolean;
};

export function validatePassword(password: string): PasswordValidationResult {
  const rules = PASSWORD_RULES.reduce(
    (accumulator, rule) => ({
      ...accumulator,
      [rule.id]: rule.test(password),
    }),
    {} as Record<PasswordRuleId, boolean>,
  );

  const metCount = PASSWORD_RULES.filter((rule) => rules[rule.id]).length;

  return {
    rules,
    metCount,
    strength: metCount as PasswordStrengthLevel,
    isValid: metCount === PASSWORD_RULES.length,
  };
}

export function passwordsMatch(password: string, confirmPassword: string) {
  return password.length > 0 && password === confirmPassword;
}

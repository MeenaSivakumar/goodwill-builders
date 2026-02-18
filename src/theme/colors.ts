export const colors = {
  primary: {
    orange: '#ff7a00',
    orangeDark: '#ff4500',
    gradient: 'linear-gradient(135deg, #ff7a00 0%, #ff4500 100%)',
  },
  secondary: {
    brickRed: '#b52b2b',
    deepBlue: '#1f3b57',
  },
  neutral: {
    white: '#ffffff',
    light: '#f8f9fa',
    gray: '#6c757d',
    dark: '#212529',
  },
  status: {
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
  },
} as const

export type ColorKeys = keyof typeof colors
export type ColorShades = keyof typeof colors.primary | keyof typeof colors.secondary | keyof typeof colors.neutral | keyof typeof colors.status

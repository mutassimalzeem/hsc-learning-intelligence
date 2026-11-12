import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cx } from './cx'

type Variant = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  saving?: boolean
}

export function Button({
  variant = 'primary',
  saving = false,
  className,
  children,
  disabled,
  type = 'button',
  onClick,
  ...rest
}: ButtonProps) {
  const blocked = Boolean(disabled) || saving
  return (
    <button
      type={type}
      className={cx('btn', variant === 'primary' ? 'btn-primary' : 'btn-secondary', className)}
      disabled={disabled}
      aria-disabled={blocked || undefined}
      aria-busy={saving || undefined}
      onClick={(event) => {
        if (blocked) {
          event.preventDefault()
          return
        }
        onClick?.(event)
      }}
      {...rest}
    >
      {saving ? 'Saving...' : children}
    </button>
  )
}

export function ButtonLink({
  to,
  variant = 'primary',
  className,
  children,
}: {
  to: string
  variant?: Variant
  className?: string
  children: ReactNode
}) {
  return (
    <Link to={to} className={cx('btn', variant === 'primary' ? 'btn-primary' : 'btn-secondary', className)}>
      {children}
    </Link>
  )
}

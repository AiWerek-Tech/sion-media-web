import { BRAND } from '../styles/branding'

/**
 * Utility functions for consistent branding and styling
 */
export const brandingUtils = {
  /**
   * Get CSS classes for primary buttons
   */
  getPrimaryButtonClasses: (variant: 'solid' | 'outline' | 'ghost' = 'solid') => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900'

    switch (variant) {
      case 'solid':
        return `${baseClasses} bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500 px-4 py-2 text-sm`
      case 'outline':
        return `${baseClasses} border border-cyan-500 text-cyan-300 hover:bg-cyan-500 hover:text-white focus:ring-cyan-500 px-4 py-2 text-sm`
      case 'ghost':
        return `${baseClasses} text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 focus:ring-cyan-500 px-3 py-2 text-sm`
      default:
        return baseClasses
    }
  },

  /**
   * Get CSS classes for text colors
   */
  getTextColor: (variant: 'primary' | 'secondary' | 'muted' = 'primary') => {
    switch (variant) {
      case 'primary':
        return 'text-slate-100'
      case 'secondary':
        return 'text-slate-400'
      case 'muted':
        return 'text-slate-500'
      default:
        return 'text-slate-100'
    }
  },

  /**
   * Get CSS classes for background colors
   */
  getBackgroundColor: (variant: 'surface' | 'surfaceLight' | 'accent' = 'surface') => {
    switch (variant) {
      case 'surface':
        return 'bg-slate-900'
      case 'surfaceLight':
        return 'bg-slate-800'
      case 'accent':
        return 'bg-slate-950'
      default:
        return 'bg-slate-900'
    }
  },

  /**
   * Get consistent spacing classes
   */
  getSpacing: (size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' = 'md') => {
    return BRAND.spacing[size]
  },

  /**
   * Get consistent border radius classes
   */
  getBorderRadius: (size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' = 'md') => {
    return `rounded-${size === 'full' ? 'full' : BRAND.borderRadius[size]}`
  },

  /**
   * Get consistent shadow classes
   */
  getShadow: (size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md') => {
    return `shadow-${size}`
  },
}
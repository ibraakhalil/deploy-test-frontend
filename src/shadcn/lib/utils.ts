import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from 'tailwind-merge'


const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-heading-1',
        'text-heading-2',
        'text-heading-3',
        'text-heading-4',
        'text-heading-5',
        'text-heading-6',
        'text-body',
        'text-title',
        'text-base',
        'text-subtitle',
      ],
      'font-family': ['font-inter', 'font-noto-serif', 'font-hind-siliguri'],
    },
    conflictingClassGroups: {
      'font-size': ['font-size'],
      'font-family': ['font-family'],
    },
    theme: {
      // @ts-ignore
      screens: ['mobile', 'tablet', 'laptop', 'desktop'],
      borderRadius: ['none', 'DEFAULT', 'sm', 'md', 'lg', 'full'],
      colors: [
        'transparent',
        { primary: ['DEFAULT', '7', '10', '20', 'bg', 'fg'] },
        { secondary: ['bg'] },
        { card: ['bg', 'shade'] },
        { 'subtitle-color': ['DEFAULT', 'secondary', '50', '70', '80'] },
        { 'pure-color': ['DEFAULT', '50'] },
        { 'icon-color': ['DEFAULT', '10', '20', '50'] },
        { 'border-color': ['DEFAULT'] },
      ],
    },
  },
})



export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}

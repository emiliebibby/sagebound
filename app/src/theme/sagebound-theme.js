// sagebound-theme.js
// PrimeVue Theme Preset for Sagebound App
// This uses PrimeVue's new theming system (for PrimeVue 4+)

export default {
  primitive: {
    // Border Radius
    borderRadius: {
      none: '0',
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '16px',
      xl: '24px',
    },

    // Color Primitives - Rose & Pine Palette (from mockup)
    emerald: { // We'll override with our rose
      50: '#FFF5F0',   // Cream
      100: '#FFE8E8',  // Blush
      200: '#FFD9D9',  // Pink
      300: '#D4989E',  // Soft Rose
      400: '#BD7880',  // Rose
      500: '#BD7880',  // Rose (Primary)
      600: '#A66870',  // Darker Rose
      700: '#8F5860',  // Wine-ish
      800: '#784850',  // Dark Wine
      900: '#4D0011',  // Wine (Deep)
      950: '#3D000D',  // Deepest Wine
    },
    
    // Pine/Green for accents
    purple: {
      50: '#E8F0ED',
      100: '#D1E1DA',
      200: '#B9D2C7',
      300: '#A2C3B4',
      400: '#8BA888',  // Sage
      500: '#6B9768',  // Mid Sage
      600: '#4A7A47',  // Forest-ish
      700: '#1A4D2E',  // Forest
      800: '#102B1F',  // Pine (Deep)
      900: '#0A1D14',  // Deepest Pine
      950: '#05100A',
    },
    
    // Neutral colors (warm grays from mockup)
    slate: {
      50: '#FFF5F0',   // Cream
      100: '#F5EAE5',
      200: '#E5D5D0',
      300: '#C5B5B0',
      400: '#A5958F',
      500: '#8B7B7A',  // Warm Gray
      600: '#6B5B5A',
      700: '#4B3B3A',
      800: '#2D2D2D',  // Charcoal
      900: '#1D1D1D',
      950: '#0D0D0D',
    },
  },
  
  semantic: {
    // Primary color (our pink)
    primary: {
      50: '{emerald.50}',
      100: '{emerald.100}',
      200: '{emerald.200}',
      300: '{emerald.300}',
      400: '{emerald.400}',
      500: '{emerald.500}',
      600: '{emerald.600}',
      700: '{emerald.700}',
      800: '{emerald.800}',
      900: '{emerald.900}',
      950: '{emerald.950}',
    },
    
    // Form states
    formField: {
      paddingX: '0.75rem',
      paddingY: '0.75rem',
      borderRadius: '{borderRadius.md}',
      focusRing: {
        width: '2px',
        style: 'solid',
        color: '{primary.500}',
        offset: '2px',
        shadow: '0 0 0 3px rgba(255, 107, 157, 0.1), 0 0 20px rgba(255, 107, 157, 0.2)',
      },
      transitionDuration: '{transition.duration}',
    },
    
    colorScheme: {
      light: {
        // Background colors
        surface: {
          0: '#FFFFFF',
          50: '{slate.50}',
          100: '{slate.100}',
          200: '{slate.200}',
          300: '{slate.300}',
          400: '{slate.400}',
          500: '{slate.500}',
          600: '{slate.600}',
          700: '{slate.700}',
          800: '{slate.800}',
          900: '{slate.900}',
          950: '{slate.950}',
        },
        
        // Primary actions
        primary: {
          color: '{primary.500}',
          contrastColor: '#FFFFFF',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        
        // Text colors
        text: {
          color: '{slate.800}',
          hoverColor: '{slate.900}',
          mutedColor: '{slate.500}',
          hoverMutedColor: '{slate.600}',
        },
        
        // Success (completed reading)
        success: {
          color: '#10B981',
          contrastColor: '#FFFFFF',
          hoverColor: '#059669',
          activeColor: '#047857',
        },
        
        // Warning (due soon)
        warn: {
          color: '#F59E0B',
          contrastColor: '#FFFFFF',
          hoverColor: '#D97706',
          activeColor: '#B45309',
        },
        
        // Error (overdue)
        danger: {
          color: '#EF4444',
          contrastColor: '#FFFFFF',
          hoverColor: '#DC2626',
          activeColor: '#B91C1C',
        },
        
        // Info (new)
        info: {
          color: '#3B82F6',
          contrastColor: '#FFFFFF',
          hoverColor: '#2563EB',
          activeColor: '#1D4ED8',
        },
        
        // Highlights
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}',
        },
      },
      
      dark: {
        // Dark mode background colors
        surface: {
          0: '#0F172A',      // Deep navy
          50: '#1E293B',     // Surface
          100: '#334155',    // Card background
          200: '#475569',
          300: '#64748B',
          400: '#94A3B8',
          500: '#CBD5E1',
          600: '#E2E8F0',
          700: '#F1F5F9',
          800: '#F8FAFC',
          900: '#FFFFFF',
          950: '#FFFFFF',
        },
        
        // Primary actions (adjusted for dark)
        primary: {
          color: '{primary.400}',
          contrastColor: '{slate.900}',
          hoverColor: '{primary.300}',
          activeColor: '{primary.200}',
        },
        
        // Text colors
        text: {
          color: '{slate.100}',
          hoverColor: '{slate.50}',
          mutedColor: '{slate.400}',
          hoverMutedColor: '{slate.300}',
        },
        
        // Success
        success: {
          color: '#10B981',
          contrastColor: '{slate.900}',
          hoverColor: '#34D399',
          activeColor: '#6EE7B7',
        },
        
        // Warning
        warn: {
          color: '#F59E0B',
          contrastColor: '{slate.900}',
          hoverColor: '#FBBF24',
          activeColor: '#FCD34D',
        },
        
        // Error
        danger: {
          color: '#EF4444',
          contrastColor: '{slate.900}',
          hoverColor: '#F87171',
          activeColor: '#FCA5A5',
        },
        
        // Info
        info: {
          color: '#3B82F6',
          contrastColor: '{slate.900}',
          hoverColor: '#60A5FA',
          activeColor: '#93C5FD',
        },
        
        // Highlights
        highlight: {
          background: 'rgba(255, 107, 157, 0.16)',
          focusBackground: 'rgba(255, 107, 157, 0.24)',
          color: '{primary.300}',
          focusColor: '{primary.200}',
        },
      },
    },
    
    // Transitions
    transitionDuration: '0.2s',
  },
  
  // Component specific overrides
  components: {
    button: {
      paddingX: '1.5rem',
      paddingY: '0.75rem',
      borderRadius: '{borderRadius.md}',
      sm: {
        fontSize: '0.875rem',
        paddingX: '1rem',
        paddingY: '0.5rem',
      },
      lg: {
        fontSize: '1.125rem',
        paddingX: '2rem',
        paddingY: '1rem',
      },
      primary: {
        background: '{primary.500}',
        hoverBackground: '{primary.600}',
        activeBackground: '{primary.700}',
        borderColor: '{primary.500}',
        hoverBorderColor: '{primary.600}',
        activeBorderColor: '{primary.700}',
        color: '#FFFFFF',
        hoverColor: '#FFFFFF',
        activeColor: '#FFFFFF',
        focusRing: {
          color: '{primary.500}',
          shadow: '0 0 0 3px rgba(255, 107, 157, 0.3)',
        },
      },
      secondary: {
        background: 'transparent',
        hoverBackground: '{primary.50}',
        activeBackground: '{primary.100}',
        borderColor: '{primary.500}',
        hoverBorderColor: '{primary.600}',
        activeBorderColor: '{primary.700}',
        color: '{primary.500}',
        hoverColor: '{primary.600}',
        activeColor: '{primary.700}',
      },
      text: {
        color: '{slate.700}',
        hoverBackground: '{primary.50}',
        activeBackground: '{primary.100}',
      },
    },
    
    card: {
      background: '{surface.0}',
      borderRadius: '{borderRadius.lg}',
      color: '{text.color}',
      shadow: '0 4px 6px -1px rgba(255, 107, 157, 0.1), 0 2px 4px -1px rgba(255, 107, 157, 0.06)',
    },
    
    inputtext: {
      paddingX: '1rem',
      paddingY: '0.75rem',
      borderRadius: '{borderRadius.md}',
      background: '{surface.0}',
      disabledBackground: '{surface.200}',
      filledBackground: '{primary.50}',
      filledFocusBackground: '{surface.0}',
      borderColor: '{slate.300}',
      hoverBorderColor: '{primary.400}',
      focusBorderColor: '{primary.500}',
      invalidBorderColor: '{danger.color}',
      color: '{text.color}',
      disabledColor: '{text.mutedColor}',
      placeholderColor: '{text.mutedColor}',
      shadow: 'none',
      focusRing: {
        width: '2px',
        style: 'solid',
        color: '{primary.500}',
        offset: '0',
        shadow: '0 0 0 3px rgba(255, 107, 157, 0.1), 0 0 20px rgba(255, 107, 157, 0.2)',
      },
    },
    
    dialog: {
      borderRadius: '{borderRadius.xl}',
      background: '{surface.0}',
      borderColor: 'transparent',
      color: '{text.color}',
      shadow: '0 20px 25px -5px rgba(255, 107, 157, 0.15), 0 8px 10px -6px rgba(255, 107, 157, 0.1)',
      header: {
        padding: '1.5rem',
        background: 'transparent',
        color: '{text.color}',
        borderColor: '{surface.200}',
      },
      content: {
        padding: '0 1.5rem 1.5rem 1.5rem',
      },
      footer: {
        padding: '1.5rem',
        background: 'transparent',
        borderColor: '{surface.200}',
      },
    },
    
    toast: {
      borderRadius: '{borderRadius.lg}',
      shadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      info: {
        background: '{info.color}',
        borderColor: '{info.color}',
        color: '#FFFFFF',
        detailColor: '#FFFFFF',
        shadow: '0 4px 6px -1px rgba(59, 130, 246, 0.3)',
        closeButton: {
          hoverBackground: 'rgba(255, 255, 255, 0.2)',
          focusRing: {
            color: '#FFFFFF',
            shadow: 'none',
          },
        },
      },
      success: {
        background: '{success.color}',
        borderColor: '{success.color}',
        color: '#FFFFFF',
        detailColor: '#FFFFFF',
        shadow: '0 4px 6px -1px rgba(16, 185, 129, 0.3)',
        closeButton: {
          hoverBackground: 'rgba(255, 255, 255, 0.2)',
          focusRing: {
            color: '#FFFFFF',
            shadow: 'none',
          },
        },
      },
      warn: {
        background: '{warn.color}',
        borderColor: '{warn.color}',
        color: '#FFFFFF',
        detailColor: '#FFFFFF',
        shadow: '0 4px 6px -1px rgba(245, 158, 11, 0.3)',
        closeButton: {
          hoverBackground: 'rgba(255, 255, 255, 0.2)',
          focusRing: {
            color: '#FFFFFF',
            shadow: 'none',
          },
        },
      },
      error: {
        background: '{danger.color}',
        borderColor: '{danger.color}',
        color: '#FFFFFF',
        detailColor: '#FFFFFF',
        shadow: '0 4px 6px -1px rgba(239, 68, 68, 0.3)',
        closeButton: {
          hoverBackground: 'rgba(255, 255, 255, 0.2)',
          focusRing: {
            color: '#FFFFFF',
            shadow: 'none',
          },
        },
      },
    },
    
    tabview: {
      nav: {
        background: 'transparent',
        borderColor: '{surface.200}',
        borderWidth: '0 0 2px 0',
      },
      navContent: {
        gap: '0.5rem',
      },
      tablist: {
        borderWidth: '0',
        background: 'transparent',
        borderColor: 'transparent',
      },
      tab: {
        padding: '1rem 1.5rem',
        fontWeight: '600',
        borderWidth: '0 0 2px 0',
        borderColor: 'transparent',
        background: 'transparent',
        color: '{text.mutedColor}',
        hoverColor: '{primary.500}',
        hoverBorderColor: 'transparent',
        focusRing: {
          width: '0',
          style: 'none',
          color: 'transparent',
          offset: '0',
          shadow: 'none',
        },
        activeColor: '{primary.500}',
        activeBorderColor: '{primary.500}',
      },
      tabpanel: {
        padding: '1.5rem 0',
        background: 'transparent',
        color: '{text.color}',
      },
    },
    
    progressbar: {
      height: '1rem',
      borderRadius: '{borderRadius.md}',
      background: '{surface.200}',
      value: {
        background: 'linear-gradient(135deg, {primary.500} 0%, {purple.500} 100%)',
      },
    },
    
    badge: {
      sm: {
        fontSize: '0.75rem',
        fontWeight: '700',
        minWidth: '1.25rem',
        height: '1.25rem',
        padding: '0 0.375rem',
      },
      lg: {
        fontSize: '1rem',
        fontWeight: '700',
        minWidth: '2rem',
        height: '2rem',
        padding: '0 0.75rem',
      },
      xl: {
        fontSize: '1.125rem',
        fontWeight: '700',
        minWidth: '2.25rem',
        height: '2.25rem',
        padding: '0 0.875rem',
      },
      borderRadius: '10rem',
      primary: {
        background: '{primary.500}',
        color: '#FFFFFF',
      },
      info: {
        background: '{info.color}',
        color: '#FFFFFF',
      },
      success: {
        background: '{success.color}',
        color: '#FFFFFF',
      },
      warn: {
        background: '{warn.color}',
        color: '#FFFFFF',
      },
      danger: {
        background: '{danger.color}',
        color: '#FFFFFF',
      },
    },
    
    chip: {
      borderRadius: '{borderRadius.md}',
      paddingX: '0.75rem',
      paddingY: '0.5rem',
      gap: '0.5rem',
      background: '{primary.100}',
      color: '{primary.700}',
      removeIcon: {
        focusRing: {
          borderRadius: '50%',
          width: '2px',
          style: 'solid',
          color: '{primary.500}',
          offset: '1px',
          shadow: 'none',
        },
      },
    },
    
    avatar: {
      width: '2.5rem',
      height: '2.5rem',
      fontSize: '1rem',
      background: '{primary.100}',
      color: '{primary.600}',
      borderRadius: '{borderRadius.xl}',
    },
    
    skeleton: {
      background: '{surface.200}',
      animation: 'shimmer 1.5s infinite',
    },
  },
};
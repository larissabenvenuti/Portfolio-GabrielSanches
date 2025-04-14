"use client"; 

import { useTheme } from '@/contexts/themeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { SwitchButton } from './toggleButtonStyles';

export default function ThemeSwitcher() {
    const { themeName, toggleTheme } = useTheme();
  
    return (
      <SwitchButton onClick={toggleTheme}>
        {themeName === 'dark' ? <FaSun /> : <FaMoon />}
        {themeName === 'dark' ? 'Light' : 'Dark'}
      </SwitchButton>
    );
  }
  
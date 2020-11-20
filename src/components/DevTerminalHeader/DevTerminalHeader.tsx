import { Theme, useTheme } from '../../utils/ThemeContext';
import { Sun, Copy, Moon } from 'react-feather';
import * as React from 'react';
import Button from '../Button/Button';
import styles from './DevTerminalHeader.module.scss';

const DevTerminalHeader = (props: {
  command: string;
  setCopied: (value: boolean) => void;
}) => {
  const { theme, toggleTheme } = useTheme();
  const { command, setCopied } = props;

  const isDark = theme === Theme.Dark;

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <div className={isDark ? styles.terminalHeaderDark : styles.terminalHeader}>
      <Button
        icon={isDark ? <Sun size={16} /> : <Moon size={16} />}
        onClick={() => toggleTheme()}
      />
      <Button icon={<Copy size={16} />} onClick={() => copyToClipBoard()} />
    </div>
  );
};

export default DevTerminalHeader;

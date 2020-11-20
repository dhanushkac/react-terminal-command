import * as React from 'react';
import { makeCommand } from '../../utils/TerminalHelper';
import { Theme, useTheme } from '../../utils/ThemeContext';
import styles from './DevTerminalContent.module.scss';

const DevTerminalContent = (props: { command: string }) => {
  const { command } = props;

  const { theme } = useTheme();
  const isDark = theme === Theme.Dark;
  const processed = makeCommand(command);

  return (
    <div
      className={isDark ? styles.terminalContentDark : styles.terminalContent}
      dangerouslySetInnerHTML={{
        __html: processed
      }}
    ></div>
  );
};

export default DevTerminalContent;

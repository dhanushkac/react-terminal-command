import * as React from 'react';
import styles from './DevTerminalFooter.module.scss';

const DevTerminalFooter = (props: { isCopied: boolean }) => {
  const { isCopied } = props;

  return (
    <div className={styles.terminalFooter}>
      {isCopied && <span>copied!</span>}
    </div>
  );
};

export default DevTerminalFooter;

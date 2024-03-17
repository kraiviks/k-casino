import { Stage as PixiStage } from '@pixi/react';
import { ReactReduxContext } from 'react-redux';

// the context bridge:
const ContextBridge = ({ children, Context, render }) => {
  return (
    <Context.Consumer>
      {(value) => render(<Context.Provider value={value}>{children}</Context.Provider>)}
    </Context.Consumer>
  );
};

// your Stage:

export const Stage = ({ children, ...props }) => {
  return (
    <ContextBridge
      Context={ReactReduxContext}
      render={(children) => <PixiStage {...props}>{children}</PixiStage>}
    >
      {children}
    </ContextBridge>
  );
};

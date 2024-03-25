import { FC } from 'react';
import { ReactNode } from 'react';
import { SlotsLifecycle, selectSlotsLifecycle, setSlotsLifecycle } from '../../slices/slotsSlice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';

interface ISlotLifecycleProviderProps {
  children: ReactNode;
}

const SlotLifecycleProvider: FC<ISlotLifecycleProviderProps> = ({ children }) => {
  const lifecycle = useAppSelector(selectSlotsLifecycle);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lifecycle === SlotsLifecycle.PLAY) {
      const stopping = setTimeout(() => {
        dispatch(setSlotsLifecycle(SlotsLifecycle.STOPPING));
      }, 3000);

      return () => clearTimeout(stopping);
    }
  }, [lifecycle, dispatch]);

  useEffect(() => {
    if (lifecycle === SlotsLifecycle.STOPPING) {
      const stop = setTimeout(() => {
        dispatch(setSlotsLifecycle(SlotsLifecycle.STOP));
      }, 1000);

      return () => clearTimeout(stop);
    }
  }, [lifecycle, dispatch]);

  useEffect(() => {
    if (lifecycle === SlotsLifecycle.STOP) {
      dispatch(setSlotsLifecycle(SlotsLifecycle.INFO));
    }
  }, [lifecycle, dispatch]);

  useEffect(() => {
    if (lifecycle === SlotsLifecycle.INFO) {
      setTimeout(() => {
        dispatch(setSlotsLifecycle(SlotsLifecycle.READY_TO_START));
      }, 1000);
    }
  }, [lifecycle, dispatch]);

  return <>{children}</>;
};

export default SlotLifecycleProvider;

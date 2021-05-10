import { useContext } from 'react';
import { RootContext } from '../store/actions/RootProvider';

const useRootContext = () => useContext(RootContext);

export default useRootContext;

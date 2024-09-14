import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../redux/store';

// Custom hook để lấy thông tin từ Redux state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

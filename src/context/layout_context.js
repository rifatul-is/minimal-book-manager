import { createContext, useContext, useState } from 'react';

export const LayoutContext = createContext();

export const useLayoutContext = () => useContext(LayoutContext);

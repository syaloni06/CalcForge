import { create } from 'zustand';

const useCalculatorStore = create((set, get) => ({
  buttons: JSON.parse(localStorage.getItem('buttons')) || ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '=', '+'],
  expression: '',
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
  history: [],
  redoStack: [],

  updateExpression: (value) => set((state) => {
    if (value === '=') {
      try {
        return { expression: eval(state.expression).toString(), history: [...state.history, state.expression], redoStack: [] };
      } catch {
        return { expression: 'Error' };
      }
    }
    return { expression: state.expression + value, history: [...state.history, state.expression], redoStack: [] };
  }),

  rearrangeButtons: (newOrder) => {
    localStorage.setItem('buttons', JSON.stringify(newOrder));
    set({ buttons: newOrder });
  },

  clearExpression: () => set({ expression: '', history: [], redoStack: [] }),

  toggleDarkMode: () => {
    const newMode = !get().darkMode;
    localStorage.setItem('darkMode', JSON.stringify(newMode));
    set({ darkMode: newMode });
  },

  undo: () => set((state) => {
    if (state.history.length === 0) return {};
    const lastExpression = state.history[state.history.length - 1];
    return { 
      expression: lastExpression, 
      history: state.history.slice(0, -1), 
      redoStack: [state.expression, ...state.redoStack] 
    };
  }),

  redo: () => set((state) => {
    if (state.redoStack.length === 0) return {};
    const nextExpression = state.redoStack[0];
    return { 
      expression: nextExpression, 
      redoStack: state.redoStack.slice(1), 
      history: [...state.history, state.expression] 
    };
  })
}));

export default useCalculatorStore;

import { create } from 'zustand'

// const getThemeFromLocalStorage = ()=>{
//     const theme = window.getlo
// }

export const useTheme = create((set) => ({
    theme: 'dark',
    setTheme: (newTheme) => set((state) => ({ theme: newTheme }))
}))
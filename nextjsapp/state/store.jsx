import SendNuiCallback from '@/utils/sendnuicallback';
import { create } from 'zustand'

const useStore = create((set) => ({
    value: "",
    buttonValue: "",
    
    resetState: () => set({ value: "", buttonValue: false }),

    setState: (payload) => {
        if (payload.type == 'showUI') {
            set({ value: payload.value })
            document.getElementById('nui-content').style.display = 'block';
        }

        if (payload.type == 'hideUI') {
            SendNuiCallback('close')
            document.getElementById('nui-content').style.display = 'none';
        }
    },
    setButtonValue: (value) => {
        set({ buttonValue: value })
    }
}))

export default useStore;
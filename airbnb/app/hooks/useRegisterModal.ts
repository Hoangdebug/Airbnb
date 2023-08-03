import { create } from "zustand";

interface ResgisterModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegisterModal = create <ResgisterModalStore> ((set) => ({
    isOpen: false,
     onOpen: () => set({isOpen: true}),
     onClose: () => set({isOpen: false})
}));

export default useRegisterModal;
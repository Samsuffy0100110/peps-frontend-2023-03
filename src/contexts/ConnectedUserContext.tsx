import { createContext, useState, ReactNode } from "react";

type UserContextType = {
    connectedUser: any;
    setConnectedUser: React.Dispatch<React.SetStateAction<any>>;
};

export const ConnectedUserContext = createContext<UserContextType>({
    connectedUser: null,
    setConnectedUser: () => null,
});

type ConnectedUserContextProviderProps = {
    children: ReactNode;
};

export const ConnectedUserContextProvider = ({
    children,
}: ConnectedUserContextProviderProps) => {
    const [connectedUser, setConnectedUser] = useState<any>(null);

    return (
        <ConnectedUserContext.Provider
            value={{ connectedUser, setConnectedUser }}
        >
            {children}
        </ConnectedUserContext.Provider>
    );
};
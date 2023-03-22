import React, { createContext, useState } from "react";

export const ConnectedUserContext = createContext({} as any);
export const ConnectedUserContextProvider = ({ children }: { children:  React.ReactNode })  => {

    const [connectedUser, setConnectedUser] = useState<any>(null);

    return (
        <ConnectedUserContext.Provider
            value={{ connectedUser, setConnectedUser }}
        >
            {children}
        </ConnectedUserContext.Provider>
    );
};
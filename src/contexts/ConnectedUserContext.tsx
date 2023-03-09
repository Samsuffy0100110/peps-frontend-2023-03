import React, { createContext, useState } from "react";

export const ConnectedUserContext = createContext({} as any);
export function ConnectedUserContextProvider({ children }: { children:  React.ReactNode }) {
    // on crée un state pour stocker l'utilisateur connecté
    const [connectedUser, setConnectedUser] = useState(null);

    return (
        /* on retourne le contexte avec la valeur de l'utilisateur connecté
        et la fonction pour modifier cette valeur */
        <ConnectedUserContext.Provider
            value={{ connectedUser, setConnectedUser }}
        >
            {children}
        </ConnectedUserContext.Provider>
    );
};
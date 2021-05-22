import React, { createContext, useCallback, useContext, useState } from 'react';
import ISignIn from '../DTOS/Forms/ISignIn';
import IUser from '../DTOS/IUser';

interface IAuthContextData {
  user?: IUser;
  signIn(data: ISignIn): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const signIn = useCallback((data: ISignIn) => {
    setUser({
      ...data,
      name: 'Voluntário',
    });
  }, []);

  const signOut = useCallback(() => {
    setUser(undefined);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within a AuthProvider');

  return context;
}

export { useAuth, AuthProvider };

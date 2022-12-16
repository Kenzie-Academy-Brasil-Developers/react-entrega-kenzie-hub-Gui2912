import { ModalProvider } from './ShowModal/ShowModal';
import { TechProvider } from './Techs/Techs';
import { UserProvider } from './UserContext/UserContext';

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>
        <ModalProvider>{children}</ModalProvider>
      </TechProvider>
    </UserProvider>
  );
};

export default Providers;

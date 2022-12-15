import { ModalProvider } from './ShowModal/ShowModal';
import { TechProvider } from './Techs/Techs';
import { UserTokenIdProvider } from './UserTokenId/UserTokenId';

const Providers = ({ children }) => {
  return (
    <UserTokenIdProvider>
      <TechProvider>
        <ModalProvider>{children}</ModalProvider>
      </TechProvider>
    </UserTokenIdProvider>
  );
};

export default Providers;

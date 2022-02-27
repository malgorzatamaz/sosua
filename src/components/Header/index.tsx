import { HeaderPage, ActionBar, ServiceLogo } from "./style";
import Logo from "./image/Logo";
import { ButtonCta, ButtonDefault } from "../Buttons";
import { useSession, signIn, signOut } from "next-auth/react";
import { getLanguage } from "../../lang/getLanguages";

const getTranslation = (key) => getLanguage("homepage", key);

const Header = () => {
  const { data: session } = useSession();

  return (
    <HeaderPage>
      <ServiceLogo>
        <Logo />
      </ServiceLogo>
      <ActionBar>
        {session ? (
          <ButtonDefault
            anchor={getTranslation("logout")}
            onPress={() => signOut()}
          />
        ) : (
          <ButtonCta
            anchor={getTranslation("addLocation")}
            onPress={() => signIn()}
          />
        )}
      </ActionBar>
    </HeaderPage>
  );
};

export default Header;

import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import Brand from "../../atoms/brand";
import Subtract from "../../icons/Subtract";
import Group from "../../icons/Group";
import People from "../../icons/People";
import BagIcon from "../../icons/Bag";
import ExploreIcon from "../../icons/Explorar";
import ExitIcon from "../../icons/Exit";
import { useUser } from "utils/contexts/user";
import HomeSmallIcon from "../../icons/HomeSmall";
import Building from "../../icons/Building";
import RequestsIcon from "../../icons/Requests";
import MenuItem from "../../molecules/menu-item";
import Profile from "../../molecules/profile";
// loading the sass style fot the component
import "./index.scss";
import { useAuth } from "utils/data/hooks/useAuth";

function SidebarMenuItem(props) {
  const {
    icon: Icon,
    to,
    role,
    roleCompany,
    badge,
    currentPath,
    regexp,
    label,
    ...other
  } = props;

  if (label === "Equipe" && (roleCompany === "SELLER" || role !== "OWNER")) {
    return null;
  }

  if (to) {
    return (
      <Link to={to}>
        <MenuItem
          icon={<Icon />}
          badge={badge}
          selected={regexp?.some(rx => rx.test(currentPath))}
          {...other}
        >
          {label}
        </MenuItem>
      </Link>
    );
  }
  return (
    <MenuItem icon={<Icon />} {...other}>
      {label}
    </MenuItem>
  );
}

function SideBar(props) {
  const { className = "", children, ...other } = props;

  const { userData } = useUser();

  const links = {
    social: [
      { to: "/inicio", label: "Início", icon: HomeSmallIcon, badge: null, regexp: [/inicio/] },
      { to: "/", label: "Comprar", icon: ExploreIcon, badge: null, regexp: [/\/$/, /compra/] },
      { to: "/minha-rede", label: "Minha Rede", icon: Building, badge: null, regexp: [/minha-rede/] },

      // { to: '/mensagens', label: 'Mensagens', icon: Chat, badge: null},
    ],
    manage: [
      { to: "/equipe", label: "Equipe", icon: People, badge: null, regexp: [/equipe/] },
      {
        to: "/orcamentos",
        label: "Orçamentos",
        icon: BagIcon,
        badge: null,
        regexp: userData?.roleCompany === "SELLER" ? [/\/$/, /orcamentos/] : [/orcamentos/]
      },
      { to: "/pedidos", label: "Pedidos", icon: RequestsIcon, badge: null, regexp: [/pedidos/] },
    ],
    operatorManage: [
      { to: "/", label: "Cadastros", icon: People, badge: null, regexp: [/\/$/] },
      { to: "/publicacoes", label: "Publicações", icon: Group, badge: null, regexp: [/publicacoes/] },
      {
        to: "/consolidacao",
        label: "Consolidações",
        icon: Subtract,
        badge: null,
        regexp: [/consolidacao/]
      },
      { to: "/orcamentos", label: "Orçamentos", icon: BagIcon, badge: null, regexp: [/orcamentos/] },
      { to: "/pedidos", label: "Pedidos", icon: RequestsIcon, badge: null, regexp: [/pedidos/] },
    ],
  };

  const { logout } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const [menuItems, setMenuItems] = React.useState(links);

  React.useEffect(
    (_) => {
      setMenuItems(links);
    },
    [userData] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const exit = async () => {
    if (!window.confirm(`Deseja sair da aplicação?`)) {
      return;
    }

    await logout();
    history.push("/");
  };

  return (
    <div className={"organism__side-bar-container " + className} {...other}>
      <div className="side-bar-content">
        <div className="brand">
          <Link to="/">
            <Brand color={"brand-global"} />
          </Link>
        </div>

        <Profile large {...userData} />

        <div className="side-bar-menu">
          {userData.companyStatus === "VALID" && (
            <>
              {userData.roleCompany === "BUYER" && (
                <div className="menu-session">
                  <span id="title">Social</span>
                  {menuItems.social.map((item) => {
                    return (
                      <SidebarMenuItem
                        key={item.to}
                        {...item}
                        currentPath={location.pathname}
                        regexp={item.regexp}
                      />
                    );
                  })}
                </div>
              )}
              <div className="menu-session">
                <span id="title">Gerenciamento</span>
                {userData.roleCompany !== "OPERATOR"
                  ? menuItems.manage.map((item) => {
                    return (
                      <SidebarMenuItem
                        key={item.to}
                        {...item}
                        currentPath={location.pathname}
                        role={userData.role}
                        roleCompany={userData.roleCompany}
                      />
                    );
                  })
                  : menuItems.operatorManage.map((item) => {
                    return (
                      <SidebarMenuItem
                        key={item.to}
                        {...item}
                        currentPath={location.pathname}
                      />
                    );
                  })}
              </div>
            </>
          )}
          <div className="management-session">
            <SidebarMenuItem
              label="Sair"
              icon={ExitIcon}
              currentPath={location.pathname}
              onClick={exit}
            />
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}

export default SideBar;

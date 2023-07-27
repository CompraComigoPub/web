import Button from "components/atoms/button";
import Search from "components/atoms/search";
// loading the sass style fot the component
import Tag from "components/atoms/tag";
import Title from "components/atoms/title";
import React from "react";
import { getFormatedDate, normalize } from "utils/generalHelper";
import Avatar from "components/atoms/avatar-company";
import "./index.scss";
import Invite from "components/molecules/invite";
import { mutate } from "utils/graphql";
import { toast } from "react-toastify";
import removeUser from "utils/graphql/mutations/user/remove-user";
import { useHistory } from "react-router-dom";

function Item(props) {
  const action = props.action;
  const {
    name,
    tradeName,
    date,
    id,
    email,
    position,
    logo = "",
    statusText,
    statusVariant,
    actionLabel,
    disabledButton = false,
    subtitle = false,
    myNetworkPage = false,
    myTeamPage = false,
    tagId = ""
  } = props.data;

  const variation = {};
  variation[statusVariant] = true;
  const history = useHistory();

  async function remove(id) {
    if (!window.confirm(`Remover o usuário selecionado?`)) {
      return false;
    }

    try {
      await mutate(removeUser, { id });
      history.push("/equipe");
    } catch (error) {
      toast.error("Não foi possível remover usuário");
    } finally {
      toast.success("Usuário removido");
      window.location.reload(true);
    }
  }

  return (
    <div
      className={
        myNetworkPage
          ? "item-container item-container-my-network"
          : "item-container"
      }
    >
      {myNetworkPage && (
        <div id="avatar">
          <Avatar imageUrl={logo} />
        </div>
      )}
      <Title className="the-title" dataType="medium" level={2}>
        {tradeName || name}
      </Title>

      {myTeamPage && (
        <>
          <span className="sub">{position}</span>
          <span className="sub">{email}</span>
          <Button disabled={disabledButton}  onClick={() => remove(id)}>Remover</Button>
        </>
      )}

      {!myNetworkPage && (
        <>
          {subtitle && <span className="date-container">{subtitle}</span>}
          <span className="date-container">{getFormatedDate(date)}</span>
          <div id="column-3">
            <div id={tagId} className="centered">
              <Tag {...variation} large>
                {statusText}
              </Tag>
            </div>
            <div className="centered action-container">
              <Button disabled={disabledButton} onClick={action}>
                {actionLabel}
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function ItemsList(props) {
  const {
    className = "",
    children,
    searchPlaceholder = "Buscar orçamentos",
    items = [],
    action,
    myTeamPage = false,
    actionLabel = "",
    hideFilter = false,
    statusFilter,
    setStatusFilter,
    searchFilter,
    setSearchFilter,
    availableStatuses,
    ...other
  } = props;

  function actionHandler(item) {
    return (event) => {
      action && action(event, item);
    };
  }

  function onStatusFilter(event) {
    setStatusFilter(event.target.value);
  }

  function onSearchFilter(event) {
    setSearchFilter(normalize(event.target.value));
  }

  return (
    <div className={"organism__items-list-container " + className} {...other}>
      <div className="header">
        <Search placeholder={searchPlaceholder} onChange={onSearchFilter} />
        {!hideFilter && (
          <>
            <select className="select-el" onChange={onStatusFilter}>
              <option value="">Status</option>
              {availableStatuses.map((sts) => (
                <option value={sts.value} key={sts.value}>
                  {sts.text}
                </option>
              ))}
            </select>
          </>
        )}
        {myTeamPage && (
          <Invite
            userOnly
            id="invite"
            button="Enviar convite"
            subtitle="Preencha com as informações de envio."
            title="Enviar Convite"
            type="send"
            // onClick={generateInviteUrl}
          >
            CONVIDAR
          </Invite>
        )}
      </div>

      <div className="list-container">
        {items.map((item) => {
          return (
            <Item
              key={item.id}
              data={item}
              actionLabel={item.actionLabel || actionLabel}
              action={actionHandler(item)}
              disabledButton={item.disabledButton}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemsList;

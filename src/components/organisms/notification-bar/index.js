import React from "react";
import BaseCardBagde from "../../atoms/base-card";
import BellIcon from "../../icons/Bell";
import ExitIcon from "../../icons/Exit";
import Notification from "../../molecules/notification";
import CheckIcon from "../../icons/Check";

import { mutate, query } from "utils/graphql";
import addViewerInActivity from "utils/graphql/mutations/user/add-viewer-in-activity";

// loading the sass style fot the component
import "./index.scss";
import getActivitiesMt from "utils/graphql/queries/user/getActivities";
import { toast } from "react-toastify";

function NotificationBar(props) {
  const {
    className = "",
    children,
    onClose,
    active = false,
    setNotifbarOpen,
    hasNotifications,
    setHasNotifications,
    ...other
  } = props;

  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    if (active && hasNotifications) {
      const activitiesNotVisualized = activities?.filter(
        (activity) => !activity.visualized
      );
      const docsId = activitiesNotVisualized.map((activity) => activity.id);
      mutate(addViewerInActivity, { docsId })
        .then(() => {
          getActivities(false);
        })
        .catch((err) => {
          toast.error("Não foi possível atualizar notificações");
        });
    }
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    getActivities(true);
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps

  const getActivities = (cache = false) => {
    query(getActivitiesMt, {}, !cache ? { fetchPolicy: "no-cache" } : {}).then(
      (result) => {
        setActivities(result.data.getActivities);
        const activitiesNotVisualized = result.data.getActivities?.filter(
          (activity) => !activity.visualized
        );
        setHasNotifications(activitiesNotVisualized.length > 0);
      }
    );
  };

  return (
    <div
      className={"organism__notification-bar-container " + className}
      data-active={active ? 1 : null}
      {...other}
    >
      <div className="notification-bar-container">
        <div className="notification-head">
          <div>
            <BaseCardBagde badge={hasNotifications}>
              <BellIcon />
            </BaseCardBagde>
          </div>
          <div>
            <span>Notificações</span>
          </div>
          <div></div>
          <ExitIcon onClick={onClose} className="exit-btn" />
        </div>
        <hr />
        <div className="notifications">
          {activities?.map((activity) => {
            return (
              <Notification
                title={activity.title}
                href={activity.href}
                icon={<CheckIcon />}
                variant={"success"}
              />
            );
          })}
        </div>
        {/* <div className="footer">
          <span onClick={handleClick}>Marcar todas como lida</span>
        </div> */}
      </div>
    </div>
  );
}

export default NotificationBar;

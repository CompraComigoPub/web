import React from "react";
import { Link } from "react-router-dom";

import Loader from "components/atoms/loader";
import Button from "components/atoms/button";

import MessageIcon from "../../icons/Message";
import ExploreIcon from "../../icons/Explore";

// loading the sass style fot the componen
import "./index.scss";

function CardSet(props) {
  const {
    className = "",
    children,
    list = [],
    title,
    loading,
    //  seeAll = "",
    // seeAllLabel = "VER TODOS",
    ...other
  } = props;

  if (loading) {
    return (
      <div className={"organism__card-set-container " + className} {...other}>
        <div className="card-set-container">
          <div className="card-set-head">
            <span id="title"> {title} </span>
          </div>
        </div>
        <Loader />
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className={"organism__card-set-container " + className} {...other}>
        <div className="card-set-container">
          <div className="card-set-head">
            <span id="title"> {title} </span>
            {/* <span id="see-all-button"> {seeAllLabel} </span> */}
          </div>
          <div className="empty-card">
            <div className="card-text">
              {title === 'Minhas compras' && (
                <div className="subtitle">Nenhuma compra foi cadastrada pela sua empresa</div>
              )}
              {title === 'Compras que participo' && (
                <div className="subtitle">Sua empresa não está participando de nenhuma compra</div>
              )}
              {title === 'Em andamento' && (
                <div className="subtitle">Nenhuma compra em andamento foi encontrada nesta rede</div>
              )}
              {title === 'Encerradas' && (
                <div className="subtitle">Nenhuma compra encerrada foi encontrada nesta rede</div>
              )}
            </div>
            <div className="card-button">
              {title === 'Minhas compras' && (
                <Link to="/compra/nova">
                  <Button full>
                    <MessageIcon />
                    Cadastrar nova compra
                  </Button>
                </Link>
              )}
              {title === 'Compras que participo' && (
                <Link to="/">
                  <Button full>
                    <ExploreIcon />
                    Explorar compras publicadas
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={"organism__card-set-container " + className} {...other}>
      <div className="card-set-container">
        <div className="card-set-head">
          <span id="title"> {title} </span>
          {/* <span id="see-all-button"> {seeAllLabel} </span> */}
        </div>
        <div className="card-set-content">{list}</div>
      </div>
    </div>
  );
}

export default CardSet;

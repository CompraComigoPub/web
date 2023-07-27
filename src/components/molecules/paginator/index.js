import React from "react";
import ReactPaginate from "react-paginate";

// loading the sass style fot the component
import "./index.scss";

function Paginator(props) {
  const {
    className = "",
    containerClassName = "",
    children,
    pageSize = 10,
    setCurrentPage,
    currentPage,
    totalProducts,
    ...other
  } = props;

  const [curList, setCurList] = React.useState([]);

  React.useEffect(
    (_) => {
      setCurList(children);
    },
    [children]
  );

  function onPageChange({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const pageCount = Math.ceil(totalProducts / pageSize);

  return (
    <div
      className={"molecule__paginator-container " + containerClassName}
      {...other}
    >
      <div className={"list-container " + className}>{curList}</div>

      <ReactPaginate
        previousLabel={"‹ Anterior"}
        nextLabel={"Próxima ›"}
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
}

export default Paginator;

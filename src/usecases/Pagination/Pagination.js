import React from "react";
import "./Pagination.css";
const Pagination = ({ data, curPage, setPage }) => {
  const products = data.slice(curPage * 10 - 10, curPage * 10);

  const clickHandler = (i) => {
    setPage(i + 1);
  };

  const pageNavHandler = (nav) => {
    switch (nav) {
      case "Prev":
        setPage(curPage - 1);
        break;
      case "Next":
        setPage(curPage + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      {products.map((prd) => (
        <div className="products" key={prd.id}>
          <div>
            <img src={prd.images[1] || prd.images[0]} alt={prd.title} />
            <p>
              {prd.title.length > 13
                ? `${prd.title.slice(0, 13)}... `
                : prd.title}
            </p>
          </div>
        </div>
      ))}

      {data.length > 0 && (
        <div className="pageButtons">
          {curPage !== 1 && (
            <span onClick={() => pageNavHandler("Prev")}>⬅️</span>
          )}
          {[...Array(data?.length / 10)].map((_, index) => {
            return (
              <span
                key={index}
                className={curPage === index + 1 ? "currentPage" : ""}
                onClick={() => clickHandler(index)}
              >
                {index + 1}
              </span>
            );
          })}
          {curPage !== data.length / 10 && (
            <span onClick={() => pageNavHandler("Next")}>➡️</span>
          )}
        </div>
      )}
    </div>
  );
};
export default Pagination;

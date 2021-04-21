const Pagination = ({
  onClickDoubleLeft,
  onClickLeft,
  onClickRight,
  onClickDoubleRight,
  total
}) => {
  return (
    <div className="row mt-5">
      <div className="col">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link"
              onClick={onClickDoubleLeft}
              >
                &laquo;
              </a>
            </li>
            <li className="page-item">
              <a className="page-link"
              onClick={onClickLeft}
              >&lt;</a>
            </li>
            <li className="page-item">
              <a className="page-link">{total}</a>
            </li>
            <li className="page-item">
              <a className="page-link"
              onClick={onClickRight}
              >&gt;</a>
            </li>
            <li className="page-item">
              <a className="page-link"
              onClick={onClickDoubleRight}
              >&raquo;</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;

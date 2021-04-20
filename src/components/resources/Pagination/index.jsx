const Pagination = () => {
  return (
    <div className="row mt-5">
      <div className="col">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" tabIndex="-1">
                &laquo;
              </a>
            </li>
            <li className="page-item">
              <a className="page-link">&lt;</a>
            </li>
            <li className="page-item">
              <a className="page-link">1</a>
            </li>
            <li className="page-item">
              <a className="page-link">&gt;</a>
            </li>
            <li className="page-item">
              <a className="page-link">&raquo;</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;

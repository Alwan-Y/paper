const Pagination = () => {
  return (
    <div className="row mt-5">
      <div className="col">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" tabIndex="-1">
                &laquo;
              </a>
            </li>
            <li class="page-item">
              <a class="page-link">&lt;</a>
            </li>
            <li class="page-item">
              <a class="page-link">2</a>
            </li>
            <li class="page-item">
              <a class="page-link">&gt;</a>
            </li>
            <li class="page-item">
              <a class="page-link">&raquo;</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;

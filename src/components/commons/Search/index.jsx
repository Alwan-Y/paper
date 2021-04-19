import search from 'assets/images/index/loupe.png';

const Search = ({ placeholder, onClick }) => {
  return (
    <div>
      <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
        <div class="input-group">
          <input
            type="search"
            placeholder={placeholder}
            aria-describedby="button-addon1"
            class="form-control border-0 bg-light"
          />
          <div class="input-group-append">
            <button
              id="button-addon1"
              type="submit"
              class="btn btn-link text-primary"
              onClick={onClick}
            >
              <img src={search} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

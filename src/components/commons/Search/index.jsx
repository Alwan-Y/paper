import search from 'assets/images/index/loupe.png';
import Button from 'components/commons/Button';

const Search = ({ placeholder, onClickSearch, onChangeSearch }) => {
  return (
    <div>
      <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
        <div className="input-group">
          <input
            type="text"
            placeholder={placeholder}
            className="form-control border-0 bg-light"
            onChange={onChangeSearch}
          />
          <div className="input-group-append">
            <Button type="submit" className="text-primary" onClick={onClickSearch}>
              <img src={search} alt="" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchIcon, SearchForm, Button, Input } from './SearchBar.style';

export const SearchBar = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const handleQueryChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          name="searchQuery"
          placeholder="Search movies..."
          onChange={handleQueryChange}
        />
        <Button type="submit" onClick={handleSubmit}>
          <SearchIcon />
        </Button>
      </SearchForm>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

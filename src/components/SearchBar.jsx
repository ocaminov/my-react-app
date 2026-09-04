function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <input
        type="text"
        placeholder="Buscar películas..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
}

export default SearchBar;

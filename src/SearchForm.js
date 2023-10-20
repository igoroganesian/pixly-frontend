import { useState } from "react";
import "./SearchForm.css";

/**
 * SearchForm Component
 *
 * Allows image search by keyword.
 *
 * Props:
 *  - handleSearch
 *  - currSearchTerm
 *
 * State:
 *  - formData: Current data input by the user. Contains searchTerm.
 *
 * NavBar => SearchForm
 */
function SearchForm({ handleSearch, currSearchTerm = "" }) {
  const [formData, setFormData] = useState({ searchTerm: currSearchTerm });

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  /** Call parent function and reset form if needed. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(formData.searchTerm.trim());
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <div className="SearchForm-form">
        <input
          id="search-term"
          name="searchTerm"
          className="col-auto"
          placeholder="Enter a search term"
          onChange={handleChange}
          value={formData.searchTerm}
        />
      </div>
      <button className="btn btn-primary">Search</button>
    </form>
  );
}

export default SearchForm;

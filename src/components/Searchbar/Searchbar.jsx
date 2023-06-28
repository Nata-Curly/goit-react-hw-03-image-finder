import { Component } from 'react';
import css from './SearchBar.module.css';
import { FcSearch } from 'react-icons/fc';


class SearchBar extends Component {
    state = {
        value: '',
    }
    
    handleChange = ({ target: {value} }) => {
        this.setState({ value });
    };
    
    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.handleSearch(this.state.value);
        this.setState({ value: '' });
     }
    render() { 
        return (
    <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={this.handleSubmit}>
    <button className={css.SearchFormBtn} type="submit">
        <FcSearch size='20px'/>
    </button>
<label htmlFor="" className={css.SearchFormBtnLabel}>
    </label>
    <input className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
      value={this.state.value}
    />
  </form>
</header>
        );
    };
}
 

export default SearchBar;


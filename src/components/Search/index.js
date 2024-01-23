import PropTypes from 'prop-types';
import './styles.scss';
import emojis from "../../emojis.json";

function Search(props) {
  const handleSearchChange = (event) => {
    const filtered = emojis.filter(emoji => {
      return (
        emoji.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        emoji.keywords.toLowerCase().includes(event.target.value.toLowerCase())
      )
    });

    props.setFunc(filtered);
  };

  return (
    <div className="Search">
      <input className="Search-input" onChange={handleSearchChange} />
    </div>
  );
}

Search.propTypes = {
  setFunc: PropTypes.func,
};

export default Search;
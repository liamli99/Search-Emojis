import PropTypes from 'prop-types';
import './styles.scss';

function Results(props) {
  return (
    <div className="Results">
      {props.emojis.map((emoji) => {
        return (
          <div className="Results-item">
            <div className="Results-symbol">{emoji.symbol}</div>
            <div className="Results-title">{emoji.title}</div>
          </div>
        )
      })}
    </div>
  );
}

Results.propTypes = {
  emojis: PropTypes.arrayOf(
    PropTypes.shape({
      symbol: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Results;
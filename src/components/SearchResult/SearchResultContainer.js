import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {getCardsForList} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;
  console.log('container', state.cards);
  return {
    cards: getCardsForList(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResult);

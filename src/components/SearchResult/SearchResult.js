import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResult.scss';
import Card from '../Card/Card';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const SearchResult = ({cards}) => {
  return (
    <Container>
      <section className={styles.component}>
        <div className={styles.cards}>{cards.map(cardData => (
          <div key={cardData.id} className={styles.wrapper}>
            <Card key={cardData.id} {...cardData} />
            <Link className={styles.link} to={`/list/$cardData.listId`}>
              <p>Go to the list</p>
            </Link>
          </div>
        ))}
        </div>
      </section >
    </Container>
  );
};

SearchResult.propTypes = {
  cards: PropTypes.array,
};


export default SearchResult;

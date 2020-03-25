import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
    columns: this.props.columns || [],
  }

  static propTypes ={
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          }
        ]
      }
    ))}

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
        <span className={styles.icon}>
          {this.state.columns.map(({key, title, icon, cards}) => (
            <Icon name={icon} />
          ))}
        </span>
        </h3>
        <div>
          {this.state.cards.map(({key, ...columnProps}) => (
            <Card key={key} {...columnProps} />
          ))}
        </div>
        <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section>
    )

  }
}

export default Column;

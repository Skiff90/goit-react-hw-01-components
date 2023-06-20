import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
    <li className={css.item}>
      <span
        className={
          isOnline
            ? `${css.status} ${css.isOnline}`
            : `${css.status} ${css.isOfline}`
        }
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={isOnline
            ? `${css.name} ${css.isOnline}`
            : `${css.name} ${css.isOfline}`}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

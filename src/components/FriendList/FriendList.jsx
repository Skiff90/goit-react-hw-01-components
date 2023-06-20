import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.container}>
      <ul className={css.friendList}>
      {
        friends.map(({id,name,avatar,isOnline}) => (
          <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline}/>
        ))
      }</ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

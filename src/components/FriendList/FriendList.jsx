// import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.container}>
      <ul className={css.friendList}>
      {friends.map(({avatar,name,isOnline,id}) => (
        <li className={css.item} key={id}>
            <span className={css.status}>{isOnline}</span>
            <img src={avatar} className={css.avatar} alt={name} width='48'/>
        </li>
      ))}</ul>
    </section>
  );
};

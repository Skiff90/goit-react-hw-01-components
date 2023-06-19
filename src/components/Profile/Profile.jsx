import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div class={css.profile}>
      <div class={css.description}>
        <img src={avatar} alt="{username}" class={css.avatar} width="300" />
        <p class={css.name}>{username}</p>
        <p class={css.tag}>@{tag}</p>
        <p class={css.location}>{location}</p>
      </div>

      <ul class={css.stats}>
        <li>
          <span class={css.label}>Followers</span>
          <span class={css.quantity}>{followers}</span>
        </li>
        <li>
          <span class={css.label}>Views</span>
          <span class={css.quantity}>{views}</span>
        </li>
        <li>
          <span class={css.label}>Likes</span>
          <span class={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

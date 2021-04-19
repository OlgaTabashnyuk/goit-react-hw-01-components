import ReactDOM from 'react-dom';
import defaultImage from '../../components/default.jpg';
import PropTypes from 'prop-types';
import styles from './SocialProfile.module.css';
console.log(styles);

const SocialProfile = ({ avatar, name, tag, location, stats }) => (
  <div className={styles.wrapper}>
    <div className={styles.profile}>
      <img
        className={styles.profile__avatar}
        src={avatar}
        alt={name}
        width="150"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}> @{tag}</p>
      <p className={styles.location}>{location}</p>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {stats.views}</span>
        </li>

        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

export default SocialProfile;

SocialProfile.defaultProps = {
  avatar: defaultImage,
};

SocialProfile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
import defaultImage from '../../components/default.jpg'
import PropTypes from 'prop-types';
import styles from "../FriendList/FriendList.module.css"

const FriendList = ({friends}) => (
     <ul className={styles.friendList}>
        {friends.map(({id, avatar, name, isOnline, }) => (
             <li 
             key={id} 
             className={styles.friendList__item}>
                <span className={styles.status} style={{backgroundColor: isOnline ? "rgb(137, 212, 24)" : "rgb(235, 23, 8)"}}></span>
                <img className={styles.avatar} src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
                </li>
        ))}
       
    </ul>
);

FriendList.defaultProps = {
    avatar: defaultImage,
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name:  PropTypes.string.isRequired,
            avatar:  PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
           })
       ).isRequired,
}

export default FriendList;
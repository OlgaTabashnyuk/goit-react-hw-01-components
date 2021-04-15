import ReactDOM from "react-dom"
import user from "../user.json"
import defaultImage from '../components/default.jpg'
import PropTypes from 'prop-types';

const Profile = ({avatar, name, tag, location, stats}) => (
<div>
  <div className="profile">
      <div className="description">
          <img
           src={avatar}
           alt={name}
           className="avatar"
           width="150"
         />
         <p className="name">User name: {name}</p>
         <p className="tag">User tag: @{tag}</p>
         <p className="location">Location: {location}</p>
       </div>
     
       <ul className="stats">
         <li>
           <span className="label">Followers</span>
           <span className="quantity"> {stats.followers}</span>
         </li>
         <li>
           <span className="label">Views</span>
           <span className="quantity"> {stats.views}</span>
         </li>
         <li>
           <span className="label">Likes</span>
           <span className="quantity"> {stats.likes}</span>
         </li>
       </ul>
     </div>
     </div>
)

export default Profile;

Profile.defaultProps = {
  avatar: defaultImage,
}


Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
}
// ЗАДАНИЕ 

// Описание компонента
// Компонент должен принимать несколько пропсов с информацией о пользователе:

// name — имя пользователя
// tag — тег в социальной сети без @
// location — город и страна
// avatar — url на изображение
// stats — объект с информацией об активности
// Компонент должен создавать DOM элемент следующей структуры.

// <div class="profile">
//   <div class="description">
//     <img
//       src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
//       alt="Аватар пользователя"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>
// Пример использования
// import user from 'путь/к/user.json;

// <Profile
//   name={user.name}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />
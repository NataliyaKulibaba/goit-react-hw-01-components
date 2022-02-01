import FriendsList from './FriendList';
import PropTypes from 'prop-types';

function FriendsListItems({ items }) {
  return (
    <ul className="friend-list">
      {items.map(({avatar,name,isOnline,id}) => (
        <li key={id}>
          <FriendsList
            src={avatar}
            name={name}
            isOnline={isOnline}
          />
        </li>
      ))
      }
    </ul>
  )
}
 

FriendsListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.string.isRequired,
  }))
}

export default FriendsListItems;
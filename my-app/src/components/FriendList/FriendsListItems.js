import FriendsList from './FriendList';
import PropTypes from 'prop-types';

import s from'./FriendList.module.css'

function FriendsListItems({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(({avatar,name,isOnline,id}) => (
        
          <FriendsList
          key={id}
            src={avatar}
            name={name}
            isOnline={isOnline}
          />
       
      ))
      }
    </ul>
  )
}
 

FriendsListItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired,
  }))
}

export default FriendsListItems;
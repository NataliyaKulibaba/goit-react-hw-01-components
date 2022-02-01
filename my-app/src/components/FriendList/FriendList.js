import PropTypes from 'prop-types';

export default function FriendList({isOnline,src,name}) {
  return <li class="item">
    <span class="status">{isOnline}</span>
  <img class="avatar" src={src} alt="User avatar" width="48" />
    <p class="name">{ name}</p>
</li>
}

FriendList.propTypes = {
  src: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}
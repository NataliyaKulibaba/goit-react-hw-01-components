import PropTypes from 'prop-types';
import s from'./FriendList.module.css'

export default function FriendList({ isOnline, src, name }) {
  
  return <li className={s.item} >
    {isOnline?<span className={s.status}>{isOnline}</span>:<span className={s.statusOffline}>{isOnline}</span>}
    
    <img className={s.avatar} src={src} alt="User avatar" width="48" />
    <p className={s.name}>{ name}</p>
</li>
}

FriendList.propTypes = {
  src: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}
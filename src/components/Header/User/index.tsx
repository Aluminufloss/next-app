"use client"

import Image from 'next/image';
import avatar from '@/assets/avatar.png';

import styles from '../header.module.scss';

type PropsType = {
  userName: string;
}

const User: React.FC<PropsType> = (props) => {
  return (
    <div className={styles.user}>
      <span className={styles.username}>{props.userName}</span>
      <Image  
        src={avatar}
        alt="User"
        width={32}
        height={32}
        className={styles.userIcon}
      />
    </div>
  )
}

export default User;
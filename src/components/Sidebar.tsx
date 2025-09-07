import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

import profileBackground from '../assets/profile-background.png'
import { Avatar } from './Avatar'

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img className={styles.cover} src={profileBackground} />
			<div className={styles.profile}>
				<Avatar src="https://github.com/tblima.png" alt="" />
				<strong>Thiago Bittencourt</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	)
}
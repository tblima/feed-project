import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content}: {content: string}) {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/tblima.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Thiago Bittencourt</strong>
							<time title="16 de junho às 21:42h" dateTime="2025-06-16 21:42:30">Cerca de 1h atrás</time>
						</div>

						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p>{ content }</p>
				</div>
				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	)
}
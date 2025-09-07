import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post({ author, publishedAt, content }: { author: any, publishedAt: Date, content: any[]}) {
	const [comments, setComments] = useState([1, 2])

	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

	function handleCreateNewComment() {
		event?.preventDefault()
		setComments([...comments, comments.length + 1])
	}
	
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={ author.avatarUrl } />
					<div className={styles.authorInfo}>
						<strong>{ author.name }</strong>
						<span>{ author.role }</span>
					</div>
				</div>
				<time title={ publishedDateFormatted } dateTime={ publishedAt.toISOString() }>
					{ publishedDateRelativeToNow }
				</time>
			</header>

			<div className={styles.content}>
				{content.map((item) => {
					if(item.type === 'paragraph') {
						return <p key={item.content}>{item.content}</p>
					} else if(item.type === 'link') {
						return <p key={item.content}><a href={item.content}>{item.content}</a></p>
					}
				})}
			</div>

			<form onSubmit={ handleCreateNewComment } className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea placeholder="Deixe um comentário" />

				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{ comments.map(comment => {
					return <Comment key={comment} />
				})}
			</div>
		</article>
	)
}
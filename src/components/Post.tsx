import { format, formatDistanceToNow, set } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post({ author, publishedAt, content }: { author: any, publishedAt: Date, content: any[]}) {
	const [comments, setComments] = useState(['Post muito bacana, hein?!'])

	const [newCommentText, setNewCommentText] = useState('')

	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

	function handleCreateNewComment() {
		event?.preventDefault()
		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	function handleNewCommentChange() {
		event?.target.setCustomValidity('')
		setNewCommentText(event?.target.value)
	}

	function handleNewCommentInvalid() {
		event?.target.setCustomValidity('Esse campo é obrigatório!')
	}

	function deleteComment(commentToDelete: string) {
		const commentsWithoutDeletedOne = comments.filter(comment => {
			return comment !== commentToDelete
		})

		setComments(commentsWithoutDeletedOne)
	}

	const isNewCommentEmpty = newCommentText.length == 0
	
	return (
		<article className={ styles.post }>
			<header>
				<div className={ styles.author }>
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

			<div className={ styles.content }>
				{content.map(item => {
					if(item.type === 'paragraph') {
						return <p key={ item.content }>{ item.content }</p>
					} else if(item.type === 'link') {
						return <p key={ item.content }><a href={ item.content }>{ item.content }</a></p>
					}
				})}
			</div>

			<form onSubmit={ handleCreateNewComment } className={ styles.commentForm }>
				<strong>Deixe seu feedback</strong>

				<textarea name="comment" placeholder="Deixe um comentário" value={ newCommentText } onChange={ handleNewCommentChange } required onInvalid={ handleNewCommentInvalid } />

				<footer>
					<button type="submit" disabled={ isNewCommentEmpty }>Publicar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{ comments.map(comment => {
					return <Comment key={ comment } content={ comment } onDeleteComment={ deleteComment } />
				})}
			</div>
		</article>
	)
}
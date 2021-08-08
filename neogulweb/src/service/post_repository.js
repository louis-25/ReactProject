import firebaseApp from './firebase'

class CardRepository {
    syncPosts(userId, onUpdate) {
        const ref = firebaseApp.database().ref(`${userId}/posts`)
        ref.on('value', snapshot => {
            const value = snapshot.val()
            value && onUpdate(value)
        })
        return () => ref.off()
    }

    savePost(userId, post) {
        firebaseApp.database().ref(`${userId}/posts/${post.id}`).set(post)
    }

    removePost(userId, post) {
        firebaseApp.database().ref(`${userId}/posts/${post.id}`).remove()
    }
}

export default CardRepository

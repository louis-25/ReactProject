import firebaseApp from './firebase'

class CardRepository {    
    syncPosts(onUpdate) {
        const ref = firebaseApp.database().ref('posts')
        ref.on('value', snapshot => {
            const value = snapshot.val()
            console.log('value ', value)
            value && onUpdate(value)            
        })
        return () => ref.off()
    }

    savePost(post) {        
        firebaseApp.database().ref(`posts/${post.no}`).set(post)
        firebaseApp.database().ref(`user/${post.name}`).set(post)
    }

    removePost(post) {
        firebaseApp.database().ref(`posts/${post.no}`).remove()
    }
}

export default CardRepository

import { commentApi } from "../../api"
import request from "../../utils/request"


export default function CreateComment({
    user,
    accessToken,
    gameId,
    onCreate
}) {
    const addCommentAction = async(formData) => {
        const comment = {
            text: formData.get('text'),
            author: user?.email,
            game_id: gameId,
            user_id: user?.id
        }

        try {
            await commentApi.create(comment, accessToken)
            onCreate()
        } catch (error) {
            alert(error)
        }
        
    }
    return (
        <>
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" action={addCommentAction}>
                    <textarea name="text" placeholder="Comment......" />
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </>
    );
}
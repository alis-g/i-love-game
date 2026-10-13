import { request } from "../../utils/request";

export default function CreateComment({
    user,
    gameId
}) {
    const addCommentAction = async(formData) => {
        const comment = {
            text: formData.get('text'),
            author: user?.email,
            game_id: gameId
        }

        try {
            await request('/comments', "POST", comment )
            
        } catch (error) {
            alert(error)
        }
        
    }
    return (
        <>
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" action={addCommentAction}>
                    <textarea name="text" placeholder="Comment......" defaultValue={""} />
                    <input className="btn submit" type="submit" defaultValue="Add Comment" />
                </form>
            </article>
        </>
    );
}
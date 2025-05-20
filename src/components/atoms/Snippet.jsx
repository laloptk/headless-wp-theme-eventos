import { trimText } from "../../utils/helpers"

const Snippet = ({ text, wordsNum }) => {
    return (
        <p>
            {trimText(text, wordsNum)}
        </p>
    )
}   

export default Snippet
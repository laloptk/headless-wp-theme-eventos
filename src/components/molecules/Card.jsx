import Title from "../atoms/Title";
import SemanticImg from "./SemanticImg";
import Snippet from "../atoms/Snippet";
import Button from "../atoms/Button";


const Card = ({ title, description, imageUrl, link }) => {
    return (
        <article className="card">
            {imageUrl && (
                <SemanticImg src={imageUrl} alt={title} className="card-image" />
            )}
            <div className="card-content">
                <Title 
                    className="card-title"
                    level='3'
                >
                    {title}
                </Title>
                <Snippet
                    text={description}
                    wordsNum={20}
                    className="card-description"
                />
                {link && (
                    <Button href={link} className="card-button">
                        Learn more
                    </Button>
                )}
            </div>
        </article>
    );
};

export default Card;

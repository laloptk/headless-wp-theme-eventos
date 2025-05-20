import Image from "../atoms/Image";
import Caption from "../atoms/Caption";

const SemanticImg = ({ src, alt, className }) => {
    return (
        <figure className="flex flex-col items-center">
            <Image
                src={src}
                alt={alt}
                className={`w-full h-auto ${className}`}
            />
            <Caption text={alt} />
        </figure>
    )
}
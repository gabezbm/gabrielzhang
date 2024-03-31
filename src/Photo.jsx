export default function Photo({ src, descr }) {
    return (
        <div className="photo">
            <img src={src} />
            <a href={src} target="_blank" className="photo-description">
                <p>{descr}</p>
            </a>
        </div>
    );
}

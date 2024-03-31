import "./Gallery.css";
import Photo from "./Photo";

export default function Gallery() {
    const photoDescrs = [
        "July 3, 2023 @ Weihai, China",
        "July 4, 2023 @ Weihai, China",
        "September 5, 2023 @ Fuzhou, China",
        "September 6, 2023 @ Fuzhou, China",
        "September 5, 2023 @ Fuzhou, China",
        "September 6, 2023 @ Fuzhou, China",
        "September 6, 2023 @ Fuzhou, China",
        "July 3, 2023 @ Weihai, China",
        "July 5, 2023 @ Weihai, China",
        "July 3, 2023 @ Weihai, China",
        "September 5, 2023 @ Fuzhou, China",
    ];
    return (
        <div id="photo-gallery">
            <h2 id="heading">
                <span>Gabriel Zhang&apos;s</span> photo gallery
            </h2>
            <div id="photos">
                {photoDescrs.map((descr, index) => (
                    <Photo
                        key={index}
                        src={`/src/assets/${index + 1}.png`}
                        descr={descr}
                    />
                ))}
            </div>
        </div>
    );
}

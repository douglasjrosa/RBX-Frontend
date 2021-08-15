import Image from "../elements/image";

const ImageSection = ({ data }) => {
    const {url, alternativeText, width, height} = data.image;
    return (
        <div className="bg-rbx-green" >
            <h1>{data.title}</h1>
            <Image
                media={{url: url, alternativeText: alternativeText}}
                className="flex-shrink-0 object-contain w-full md:w-6/12 mt-6 md:mt-0"
                width={width}
                height={height}
            />
        </div>
    );
};
    

export default ImageSection;
    
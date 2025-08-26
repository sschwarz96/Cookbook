// @ts-ignore
export default function SideArea({width, image_path}) {
    console.log(image_path)
    return (
        <div className={`${width} bg-cover bg-center p-10 h-full`} style={{backgroundImage: `url(${image_path})`}}>
        </div>
    );
}
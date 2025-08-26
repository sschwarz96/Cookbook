import SideArea from "@/Components/side_area"
import BologneseImage from '../img/Easy-Bolognese.webp'; // Import the image
import KaiserschmarrnImage from '../img/kaiserschmarrn.jpg'; // Import the image
import MainMenu from "@/Components/main_menu";
import Recipes from "@/Components/recipes";


export default function Home() {
    return (
        <main className="h-screen">
            <div className="flex flex-col h-screen">
                <div className="topArea flex flex-row h-1/3">
                    <SideArea
                        width={"w-1/5"}
                        image_path={BologneseImage.src}
                    />
                    <div className="w-3/5">
                        <MainMenu></MainMenu>
                    </div>
                    <SideArea
                        width={"w-1/5"}
                        image_path={KaiserschmarrnImage.src}
                    />
                </div>
                <div className="recipesContainer flex flex-col items-center h-1/3 w-full">
                    <Recipes></Recipes>
                </div>

            </div>
        </main>
    );
}

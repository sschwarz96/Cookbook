import ButtonGroup from "@/components/main_menu_buttons";
import SearchInput from "@/components/search_field";
import InteractiveList from "@/components/favorites_list";

export default function MainMenu() {
    return (
        <div className="flex flex-col items-center relative w-full">
            {/* Background image with blur and overlay for opacity */}
            <div className="absolute inset-0 bg-[url('../img/kitchen.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-white bg-opacity-60"></div>
            </div>

            {/* Content area that remains sharp */}
            <div className="relative z-10 flex flex-col items-center h-20 p-10">
                <header className="font-bold text-lg">
                    WELCOME
                </header>
                Enjoy and Cook
            </div>

            {/* Bottom row with buttons and inputs */}
            <div className="relative z-10 flex flex-col items-center w-full">
                <ButtonGroup />
                <SearchInput />
            </div>
        </div>
    );
}

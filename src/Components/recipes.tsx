import React from 'react';


const Recipes = () => {
    return (
        <div className="favoritesContainer flex flex-column items-center justify-center w-full pt-10">
            <div className="categories flex flex-row items-center space-x-36">
                <header className="text-lg font-semibold">Starters</header>
                <header className="text-lg font-semibold">Mains</header>
                <header className="text-lg font-semibold">Desserts</header>
            </div>
        </div>
    );
};

export default Recipes;
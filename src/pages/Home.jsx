import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
    const [items, setItems] = React.useState([])

    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        fetch('https://6289e120e5e5a9ad321e689d.mockapi.io/items')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                        : items.map(obj => <PizzaBlock
                            key={obj.id}
                            {...obj}
                        />)
                }
            </div>
        </>
    );
};

export default Home;
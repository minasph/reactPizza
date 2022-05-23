import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";

const Home = ({ searchValue, setSearchValue }) => {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortId, setSortId] = React.useState(
        {
            name: 'популярности',
            sortProperty: 'rating'},
    )




    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://6289e120e5e5a9ad321e689d.mockapi.io/items?
        ${categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortId.sortProperty}&order=desc`)
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr);
                setIsLoading(false);
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortId]);

    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
                <Sort value={sortId} onChangeSort={(i) => setSortId(i)}/>
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
            <Pagination/>
        </>
    );
};

export default Home;
import { useGlobalContext } from "../context";

const FilterNav = () => {
    const { filterMealsByCategory, meals } = useGlobalContext();
    const handleClick = (e, cat) => {
        e.preventDefault();
        filterMealsByCategory(cat)
    }
    let menuItems = [...new Set(meals.map((meal) => meal.strCategory))];
    const mainCategories = ['Dessert', 'Side', 'Vegetarian'];
    menuItems = menuItems.filter(category => !mainCategories.includes(category));

    return (

        <section className="navbar-container bg-light">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link text-secondary fw-bold" id="dessert" href="#" onClick={e => handleClick(e, 'All')}>All</a>
                </li>
                {
                    mainCategories.map((category) => {
                        return (
                            <li className="nav-item" >
                                <a className="nav-link text-secondary" href="#" id={category} key={category} onClick={e => handleClick(e, category)}>{category}</a>
                            </li>
                        )
                    })
                }
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Others</a>
                    <ul className="dropdown-menu">
                        {
                            menuItems.map((category) => {
                                return (
                                    <li><a className="dropdown-item" id={category} key={category} href="#" onClick={e => handleClick(e, category)}>{category}</a></li>
                                );

                            })}
                    </ul>
                </li>
            </ul>
        </section >

    )
}
export default FilterNav;
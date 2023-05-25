import { useGlobalContext } from "../context";

const FilterNav = () => {
    const { filterMealsByCategory } = useGlobalContext();
    const handleClick = (e, cat) => {
        e.preventDefault();
        filterMealsByCategory(cat)
    }

    return (

        <section className="navbar-container bg-light">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link text-secondary fw-bold" id="dessert" href="#" onClick={e => handleClick(e, 'All')}>All</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" id="side" href="#" onClick={e => handleClick(e, 'Side')}>Side</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" id='vegetarian' onClick={e => handleClick(e, 'Vegetarian')} href="#">Vegetarian</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" id="dessert" href="#" onClick={e => handleClick(e, 'Dessert')}>Dessert</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Others</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">category1</a></li>
                        <li><a className="dropdown-item" href="#">category2</a></li>
                        <li><a className="dropdown-item" href="#">category3</a></li>
                    </ul>
                </li>
            </ul>
        </section >

    )
}
export default FilterNav;
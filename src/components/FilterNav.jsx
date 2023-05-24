const FilterNav = () => {
    return (

        <section className="navbar-container bg-light">
            <ul className="nav justify-content-center">
                <li className="nav-item dropdown text-secondary active">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">All</a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">Side</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">Vegetarian</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary">Dessert</a>
                </li>
            </ul>
        </section >

    )
}
export default FilterNav;
import styles from './Menu.module.scss'
import { NavLink, Route } from "react-router-dom"
import { useLocation, useParams } from "react-router"
interface IMenu {
    path: string
    name: string
}
const menus: IMenu[] = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/pages",
        name: "Pages"
    },
    {
        path: "/products",
        name: "Product"
    },
    {
        path: "/blog",
        name: "Blog"
    },
    {
        path: "/shop",
        name: "Shop"
    },
    {
        path: "/contact",
        name: "Contact"
    },
]

const CustomMenu = ({ path, name }: IMenu) => {
    return <li>
        <NavLink to={path}>{name}</NavLink>
    </li>

}
const showMenu = (menus: any) => {
    var result = null
    if (menus.length > 0) {
        result = menus.map((menu: any, index: number) => {
            return <CustomMenu key={index} path={menu.path} name={menu.name} />
        })
    }
    return result
}
const Menu = () => {
    // const location = useLocation()
    // const params = useParams()
    // console.log("Menu location", location);
    // console.log("Menu params", params);

    return (
        <nav className={styles.navBar}>
            <div className={styles.left}>
                <div>
                    <span className={styles.textLogo}>Hekto</span>
                </div>
                <div>
                    <ul>
                        {showMenu(menus)}
                    </ul>
                </div>
            </div>
            <div className={styles.right}>
                <input type="text" />
                <span>
                    <i className="fas fa-search"></i>
                </span>
            </div>
        </nav>
    )
}

export default Menu

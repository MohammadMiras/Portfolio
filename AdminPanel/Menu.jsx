import DashboardIcon from "@mui/icons-material/Dashboard"
import Menus from "Menus"

const menuItems = [
    {
        title: "InfraDashboard",
        icon: DashboardIcon,
        path: "/"
    },
    ...Menus.Accounts,
    ...Menus.Blog,
    ...Menus.ChangeLog,
    ...Menus.Contacts,
    ...Menus.Contents,
    ...Menus.Currencies,
    ...Menus.DataTypes,
    ...Menus.Forms,
    ...Menus.Navigation,
    ...Menus.NewTaxonomy,
    ...Menus.Scopes,
    ...Menus.Settings,
    ...Menus.Social,
    ...Menus.Tenants,
    ...Menus.Units,
    ...Menus.Modules
]

export default menuItems

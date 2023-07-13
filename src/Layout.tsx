import { ReactNode } from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export type Props = {
    children: ReactNode;
}
const Layout = ({children} : Props) => {
    return(
        <>
        <h1>This is header</h1>
{children}
        <h1>This is footer</h1>
        </>
    )
}

export default Layout;
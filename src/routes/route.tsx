import { lazy } from "react"

const HomeRoute = lazy(() => import("../pages/home"))
const ContactRoute = lazy(() => import("../pages/contact"))


const BlueBirdRoutes = [
    { index : true , element: <HomeRoute/> },
    { path: '/contact-us', element: <ContactRoute/> },
    { path: '/projects', element: <div>This is our Projects</div> }
]

export default BlueBirdRoutes
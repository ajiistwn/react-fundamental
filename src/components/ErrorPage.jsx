import { useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()
    return <div>oh, error !!!</div>
}

export default ErrorPage
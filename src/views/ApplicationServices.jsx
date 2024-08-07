import { BottomApplication } from "../components/services/application-services/Bottom"
import { HeadApplication } from "../components/services/application-services/Head"
import { MiddleApplication } from "../components/services/application-services/Middle"

const ApplicationServices = () => {
    return(
        <>
        <HeadApplication/>
        <MiddleApplication/>
        <BottomApplication/>
        </>
    )
}


export default ApplicationServices
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { TextField } from "@radix-ui/themes"
import { AuthContext } from "frontend/auth/auth-controller"
import { useContext } from "react"

const Topbar = () => {
    const authContext = useContext(AuthContext)

    return (
        <div className="bg-zinc-800 h-10 p-2 flex items-center justify-between text-white">
            <span className="capitalize">{(() => {
                if (authContext.userInfo?.username) {
                    return authContext.userInfo?.username
                }
                return authContext.userInfo?.firstName + " " + authContext.userInfo?.lastName
            })()}</span>
            <div>
                <TextField.Root>
                    <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                    </TextField.Slot>
                    <TextField.Input placeholder="Search .." />
                </TextField.Root>
            </div>
        </div>
    )
}

export default Topbar
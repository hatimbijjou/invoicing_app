import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { TextField } from "@radix-ui/themes"

const Topbar = () => {
    return (
        <div className="bg-zinc-800 h-10 p-2 flex items-center justify-end text-white">
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
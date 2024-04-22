import { User } from "@phosphor-icons/react/dist/ssr"
import { Box, Card, Inset, Strong, Text } from "@radix-ui/themes"
import { IClient } from "frontend/interfaces"
import React from "react"

interface ClientCardProps extends React.HTMLAttributes<HTMLDivElement> {
    client: IClient;
}

export const ClientCard: React.FC<ClientCardProps> = ({client, ...props}) => {
    return (
        <Box className="col-span-2 cursor-pointer hover:scale-[1.01]" {...props}>
            <Card size="2">
                <Inset className=" h-28 bg-slate-500 flex justify-center items-center mb-2" clip="padding-box" side="top" pb="current">
                    <User className="text-white" size={60}/>
                </Inset>
                <p><Strong>Client: </Strong>{client.name}</p>
                <p><Strong>Adress: </Strong>{client.address}</p>
                <p><Strong>Email: </Strong>{client.email}</p>
                <p><Strong>Website: </Strong>{client.website}</p>
            </Card>
        </Box>
    )
}
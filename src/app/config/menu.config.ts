import { IMenu } from "@app/interface/config/menu.interface";

export const MENU: IMenu[] = [
    {
        id: "national",
        idParent: "",
        display: "National",
        name: "national",
        path: "/app/national",
        show: true,
        privileges: ["view"],
    },
]
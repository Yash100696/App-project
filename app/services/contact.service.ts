import { Injectable } from "@angular/core";

export interface Contact {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    photo?: string
};

@Injectable()
export class ContactService {
    private _contacts: Contact[] = [
        {
            id: 0,
            name: {
                firstName: "Susmita",
                lastName: "Kujur"
            },
            photo: "~/assets/susu.jpg"
        },
        {
            id: 1,
            name: {
                firstName: "Neelam",
                lastName: "Kullu"
            },
            photo: "~/assets/neelam.jpg"
        },
        {
            id: 2,
            name: {
                firstName: "Ruby",
                lastName: "Ekka"
            },
            photo: "~/assets/ruby.jpg"
        },
        {
            id: 3,
            name: {
                firstName: "Yash",
                lastName: "Sinha"
            },
            photo: "~/assets/yash.jpg"
        },
        {
            id: 4,
            name: {
                firstName: "Suchitra",
                lastName: "Aind"
            },
            photo: "~/assets/suchi.jpg"
        },
        {
            id: 5,
            name: {
                firstName: "Bandana",
                lastName: "Bar"
            },
            photo: "~/assets/bandana.jpg"
        },
        {
            id: 6,
            name: {
                firstName: "Lawrence",
                lastName: "Kerketta"
            },
            photo: "~/assets/lawrence.jpg"
        }
    ];

    get contacts(): Contact[] {
        return this._contacts;
    }

    findContact(id): Contact {
        return this._contacts.find(contact => contact.id === parseInt(id));
    }
}

import { UUID } from "crypto";

export interface Activity {
    id: UUID,
    name: string,
    location: string,
    recurringDate: Date,
    description: string,
}

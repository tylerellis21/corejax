import * as $ from "jquery";

export interface ICorejaxApp {
    name: string;
    build(firstName: string, lastName: string): string;
}

export class Basic implements ICorejaxApp {
    
    name: string = "Basic";

    build(firstName: string, lastName: string): string {
        return firstName + lastName;
    }
}
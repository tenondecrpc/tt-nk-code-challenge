export class TaskCreate {
    message: string;
    id: number;

    constructor(message: string, id: number) {
        this.message = message;
        this.id = id;
    }
}

export class TaskUpdate {
    message: string;
    id: number;

    constructor(message: string, id: number) {
        this.message = message;
        this.id = id;
    }
}
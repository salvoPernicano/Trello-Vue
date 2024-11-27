//string bc il valore ci vene dato da Nanoid
export type ID = string;

export interface Column {
    id : ID;
    title : string;
    tasks: Task[]
}

export interface Task {
    id : ID;
    title: string;
    createdAt : Date;
}
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    title: string

    @Column({
        default: false,
    })
    completed: boolean
}
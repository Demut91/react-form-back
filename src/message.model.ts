import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    text: string;

    constructor(name: string, email: string, text: string, id?: number) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.text = text;
    }
}




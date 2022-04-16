import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    text: string;

    constructor(username: string, email: string, text: string, id?: number) {
        super();
        this.id = id;
        this.username = username;
        this.email = email;
        this.text = text;
    }
}




import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index, JoinColumn } from 'typeorm';
import User from "../models/User";

@Entity('letters')
export default class Letter {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    content: string;

    @Column()
    sender: string; 
    
    @Column()
    receiver: string;
    
    @Column()
    users_id: number;
}
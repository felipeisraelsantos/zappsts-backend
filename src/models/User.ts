import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm';

import Letter from '../models/Letter'

@Entity('users')
export default class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    last_name: string; 
    
    @Column()
    age: number;
    
}
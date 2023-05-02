import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Order } from '../order/order.entity';

@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    name: string;

    @Column({ length: 15 })
    phoneNumber: string;

    @Column({ length: 200 })
    password: string;

    @Column({ length: 500, nullable: true })
    address: string;

    @Column({ nullable: true })
    point: number;

    @Column({ length: 500, nullable: true })
    avatarUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({ default: true })
    isActive: boolean;

    //order 1--n
    @OneToMany(() => Order, order => order.user)
    orders: Order[];

}
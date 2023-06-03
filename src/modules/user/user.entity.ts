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
    avatarUri: string;

    @CreateDateColumn({ type: 'timestamp', default: 'NOW()' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', onUpdate: 'NOW()', nullable: true })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', onUpdate: 'NOW()', nullable: true })
    deletedAt: Date;

    @Column({ default: true })
    isActive: boolean;

    //order 1--n
    @OneToMany(() => Order, order => order.user)
    orders: Order[];

}
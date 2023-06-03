import { Category } from 'src/modules/category/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';
import { Order } from '../order/order.entity';

@Entity({ name: "product" })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    name: string;

    @Column({ nullable: true })
    amount: number;

    @Column({ length: 100, nullable: true })
    unit: string;

    @Column({ nullable: true })
    grossPrice: number;

    @Column({ nullable: true })
    netPrice: number;

    @Column({ nullable: true })
    discount: number;

    @Column({ nullable: true, length: 5000 })
    description: string;

    @Column({ length: 500, nullable: true })
    imageUri: string;

    @CreateDateColumn({ type: 'timestamp', default: 'NOW()' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', onUpdate: 'NOW()', nullable: true })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', onUpdate: 'NOW()', nullable: true })
    deletedAt: Date;

    @Column({ default: true })
    isActive: boolean;

    //category n--1
    @ManyToOne(() => Category, cat => cat.products)
    category: Category

    @ManyToMany(
        () => Order,
        order => order.products,
        { onDelete: 'NO ACTION', onUpdate: 'NO ACTION', },
    )
    orders: Order[]
}
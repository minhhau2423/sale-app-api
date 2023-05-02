import { Category } from 'src/models/category/entities/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne } from 'typeorm';

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
    imageUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({ default: true })
    isActive: boolean;

    //category n--1
    @ManyToOne(() => Category, cat => cat.products)
    category: Category

}
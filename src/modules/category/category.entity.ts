import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity({ name: "category" })
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    name: string;

    @Column({ length: 500, nullable: true })
    imageUri: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({ default: true })
    isActive: boolean;

    //products 1--n
    @OneToMany(() => Product, prod => prod.category)
    products: Product[];

}
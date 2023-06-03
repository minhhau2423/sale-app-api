import { Status } from 'src/common/interfaces/status.enum';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../user/user.entity';
import { Product } from '../product/product.entity';

@Entity({ name: "order" })
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "Status", type: "enum", enum: ["processing", "completed", "canceled"], enumName: "Status", nullable: true })
    status: Status;

    @Column({ nullable: true })
    estimatedDeliveryDate: Date;

    @Column({ nullable: true })
    DeliveryDate: Date;

    @Column({ nullable: true })
    shippingFee: number;

    @Column({ nullable: true })
    discount: number;

    @Column({ nullable: true })
    total: number;

    @Column({ length: 500 })
    note: string;

    @CreateDateColumn({ type: 'timestamp', default: 'NOW()' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp', onUpdate: 'NOW()', nullable: true })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'timestamp', onUpdate: 'NOW()', nullable: true })
    deletedAt: Date;

    @Column({ default: true })
    isActive: boolean;

    //user n--1
    @ManyToOne(() => User, user => user.orders)
    user: User;

    //product n--n
    @ManyToMany(() => Product, product => product.orders)
    @JoinTable({name: 'order_products'})
    products: Product[]
}
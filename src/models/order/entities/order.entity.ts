import { Status } from 'src/common/interfaces/status.enum';
import { User } from 'src/models/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({ default: true })
    isActive: boolean;

    //user n--1
    @ManyToOne(() => User, user => user.orders)
    user: User;

    //product n--n

}
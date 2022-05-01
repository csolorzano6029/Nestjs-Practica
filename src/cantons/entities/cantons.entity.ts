import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('public.cantones')
export class CantonsEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'provincias_id' })
  provinciasId: number;
}

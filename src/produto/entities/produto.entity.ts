import { IsNotEmpty } from "class-validator"
import { Categoria } from "src/categoria/entities/categoria.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({type: 'float', precision: 6, scale: 2, nullable: false}) //nullable false = NOTNULL
    valor: number

    @Column({length: 1000})
    imagem: string
    
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })
    categoria: Categoria

}
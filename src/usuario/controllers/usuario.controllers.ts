import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, UseGuards } from "@nestjs/common";
import { UsuarioService } from "../services/usuario.service";
import { JwtAuthGuard } from "src/auth/guard/jwt.auth.guard";
import { Usuario } from "../entities/usuario.entity";

@Controller("/usuarios")
export class UsuarioController{

    constructor(private readonly usuarioService: UsuarioService) { }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Usuario[]>{
        return this.usuarioService.findAll();
        
    }

    @UseGuards(JwtAuthGuard)
    @Get('/id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario>{
        return this.usuarioService.findById(id);

    }

    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.create(usuario)
    }

    @UseGuards(JwtAuthGuard)
    @Post('/atualizar')
    @HttpCode(HttpStatus.CREATED)
    async update(@Body() usuario: Usuario): Promise<Usuario>{
        return this.usuarioService.update(usuario)
    }
    
}
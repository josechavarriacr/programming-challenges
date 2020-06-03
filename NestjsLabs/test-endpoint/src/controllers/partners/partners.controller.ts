import { Controller, Get, Param } from '@nestjs/common';

@Controller('partners')
export class PartnersController {
    @Get()
    findAll() {
        return 'this is a message'
    }

    @Get(':id')
    findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
    }
}

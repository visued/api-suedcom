import { Injectable } from '@nestjs/common';

@Injectable()
export class PreInscriptionService {
    async findAll(): Promise<string>{
        return "Todos felizes!!!"
    }
}

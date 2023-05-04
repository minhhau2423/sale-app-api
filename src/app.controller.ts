import { Controller, Get, Param, Res  } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';
@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  @Get('files/public/images/:filename')
  serveImage(@Param('filename') filename: string, @Res() res: Response) {
    return res.sendFile(filename, { root: join(process.cwd(), 'files', 'public', 'images') });
  }
}
